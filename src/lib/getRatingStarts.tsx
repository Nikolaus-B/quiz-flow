import { Star } from "lucide-react";

export const getRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const fraction = rating % 1;
  const totalStars = 5;

  return (
    <div className="flex items-center gap-[0.2rem] ">
      {[...Array(totalStars)].map((_, i) => {
        const fillWidth =
          i < fullStars
            ? "100%"
            : i === fullStars && fraction > 0
            ? `${fraction * 100}%`
            : "0%";

        return (
          <div key={i} className="relative w-[1.6rem] h-[1.6rem]">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: fillWidth }}
            ></div>

            <Star className="absolute w-full h-full text-white fill-white stroke-green-500" />
          </div>
        );
      })}
    </div>
  );
};
