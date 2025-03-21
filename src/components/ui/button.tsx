import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none outline-none",
  {
    variants: {
      variant: {
        default:
          "w-full px-[116px] py-[14px] bg-[#31728D] text-[1.8rem] text-[#FFFFFF] font-bold rounded-xl hover:bg-[#31728D]  focus:bg-[#31728D] disabled:bg-[#E8E6EF] disabled:text-[#B7B4C1]",
        select:
          "px-[1rem] py-[1.4rem] bg-[#FFFFFF] text-[#111111] text-[1.4rem] font-bold border border-[#D2CFDF] hover:border-[#31728D] focus:border-[#31728D] transition-colors duration-200 text-center whitespace-normal justify-center items-center leading-normal flex",
        text: "bg-transparent text-[#111111] font-bold underline underline-offset-4 hover:text-[#31728D] transition-colors duration-200",
        transparent:
          "px-[4.2rem] py-[1.4rem] bg-transparent text-[#111111] text-[1.6rem] font-bold border border-[#D2CFDF] hover:text-[#31728D] hover:border-[#31728D] transition-colors duration-200",
        round:
          "border border-[#D2CFDF] hover:border-[#31728D] focus:border-[#31728D] transition-colors duration-200 text-center rounded-full",
      },
      size: {
        default: "",
        regularSelect: "w-[15.7rem] h-[6.3rem]",
        regulatText: "text-[1.4rem]",
        regulatRound: "w-[40px] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
