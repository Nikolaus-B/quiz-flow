import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { multiStepsData } from "@/data/multiStepsData";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { MultiStepsDataType, StepType } from "@/models/MultiStepData";
import EmojiCheckbox from "@/components/elements/EmojiCheckbox/EmojiCheckbox";
import Logo from "@/components/elements/Logo/Logo";
import { Link } from "react-router";

const stepVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

function MultiStepForm({ goalId }: { goalId: keyof MultiStepsDataType }) {
  const filteredSteps: StepType[] = [
    ...(multiStepsData[goalId] || []),
    ...multiStepsData["default"],
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const { register, handleSubmit } = useForm();

  const handleToggle = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const onSubmit = (data: Record<string, string | string[]>) => {
    if (currentStep < filteredSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final Data: ", { ...data, selectedValues });
    }
  };

  return (
    <motion.div
      key={currentStep}
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4"
    >
      <Progress
        value={((currentStep + 1) / filteredSteps.length) * 100}
        className="mb-[1.2rem] bg-[#E8E6EF] [&>div]:bg-[#31728D]"
      />
      <div className="flex gap-[6.3rem] items-center justify-center mb-[4.2rem]">
        {currentStep > 0 ? (
          <Button
            type="button"
            variant={"round"}
            size="regulatRound"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
        ) : (
          <Link to="/">
            <Button type="button" variant={"round"} size="regulatRound">
              <img src="/arrow-left.svg" alt="Logo" />
            </Button>
          </Link>
        )}
        <Logo />
        <p className="text-[1.6rem] font-bold leading-[120%]">
          <span className=" text-[#31728D]">{currentStep + 1}</span>/
          {filteredSteps.length}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-center">
        <label className="font-semibold text-[2.5rem] mx-[2.7rem] text-center">
          {filteredSteps[currentStep]?.label}
        </label>
        {filteredSteps[currentStep]?.type === "text" && (
          <Input {...register(filteredSteps[currentStep]?.name)} type="text" />
        )}
        {filteredSteps[currentStep]?.type === "email" && (
          <Input {...register(filteredSteps[currentStep]?.name)} type="email" />
        )}
        {filteredSteps[currentStep]?.type === "radio" &&
          filteredSteps[currentStep]?.options?.map((option) => (
            <label
              key={option.value}
              className="block flex items-center space-x-2 border p-3 rounded-lg cursor-pointer"
            >
              <input
                type="radio"
                {...register(filteredSteps[currentStep]?.name)}
                value={option.value}
                className="hidden"
              />
              <span className="text-lg">{option.emoji}</span>
              <span>{option.value}</span>
            </label>
          ))}
        {filteredSteps[currentStep]?.type === "checkbox" &&
          filteredSteps[currentStep]?.options?.map((option) => (
            <EmojiCheckbox
              key={option.value}
              emoji={option.emoji}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleToggle(option.value)}
            />
          ))}
        <div className="flex justify-between">
          <Button type="submit">
            {currentStep < filteredSteps.length - 1 ? "Next" : "Submit"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default MultiStepForm;
