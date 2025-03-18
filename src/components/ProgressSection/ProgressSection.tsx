import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import Logo from "../elements/Logo/Logo";
import { getRatingStars } from "@/lib/getRatingStarts";
import { progressBarsData } from "@/data/progressBarsData";
import { reviewsData } from "@/data/reviewsData";

function ProgressSection() {
  const [progress, setProgress] = useState(
    new Array(progressBarsData.length).fill(0)
  );
  const [showPopup, setShowPopup] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pausedAtIndex, setPausedAtIndex] = useState(new Set<number>());
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      return newIndex < progressBarsData.length ? newIndex : prevIndex;
    });
  }, []);

  useEffect(() => {
    if (currentIndex >= progressBarsData.length || isPaused) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = [...prev];

        if (newProgress[currentIndex] < 100) {
          newProgress[currentIndex] += 5;

          if (
            newProgress[currentIndex] >= 50 &&
            !pausedAtIndex.has(currentIndex)
          ) {
            setShowPopup(true);
            setIsPaused(true);
            setPausedAtIndex(new Set([...pausedAtIndex, currentIndex]));
            clearInterval(intervalRef.current!);
          }
        } else {
          clearInterval(intervalRef.current!);

          if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
              updateIndex();
              timeoutRef.current = null;
            }, 500);
          }
        }

        return newProgress;
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isPaused, updateIndex]);

  const handlePopupClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewsData.length);
    }, 3000);
    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <div className="mx-auto">
      <div>
        <Logo />
        <h2 className="text-2xl font-bold mt-[1.2rem] mb-[1.2rem] text-center">
          We are crafting your personalized plan
        </h2>

        {progressBarsData.map((item, index) => (
          <div key={index} className="mb-[1.2rem]">
            <div className="flex justify-between items-center mb-[0.4rem] text-[1.2rem]">
              <p className="font-light">{item.title}</p>
              <p className="font-bold">{progress[index]}%</p>
            </div>
            <div className="bg-gray-200 rounded-full h-[1.4rem] sm:h-[1.6rem] w-full overflow-hidden">
              <motion.div
                className="h-full bg-[#31728D] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress[index]}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={showPopup} onOpenChange={() => {}}>
        <DialogContent
          className="p-[2rem] bg-white"
          aria-describedby="dialog-description"
        >
          <DialogHeader>
            <DialogTitle className="text-[1.2rem] text-[#666666] font-semibold text-center">
              To move forward, specify
            </DialogTitle>
          </DialogHeader>
          <DialogDescription
            id="dialog-description"
            className="text-[1.8rem] font-bold text-center"
          >
            {progressBarsData[currentIndex]?.message}
          </DialogDescription>

          <div className="flex justify-center gap-4 mt-[1.2rem]">
            <Button
              variant={"transparent"}
              className="min-w-[6rem] sm:min-w-[8rem]"
              onClick={handlePopupClose}
            >
              No
            </Button>
            <Button
              variant={"transparent"}
              className="min-w-[6rem] sm:min-w-[8rem]"
              onClick={handlePopupClose}
            >
              Yes
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full relative mt-auto">
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full! max-w-full! sm:max-w-sm p-0">
            <CardContent className="w-full  px-[1.6rem] py-[1.2rem]">
              <div className="flex justify-between">
                <h3 className="text-[1.6rem] text-[#666666] font-semibold">
                  {reviewsData[currentReview].name}
                </h3>
                <div className="flex items-center gap-[0.8rem]">
                  {getRatingStars(reviewsData[currentReview].rating)}
                  <span className=" font-light text-[1.2rem]">
                    {reviewsData[currentReview].rating}
                  </span>
                </div>
              </div>
              <p className="text-[1.2rem] font-light text-left">
                {reviewsData[currentReview].text}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ProgressSection;
