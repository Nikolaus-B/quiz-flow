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
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        select:
          "px-[1rem] py-[1.4rem] bg-[#FFFFFF] text-[#111111] text-[1.4rem] font-bold border border-[#D2CFDF] hover:border-[#31728D] focus:border-[#31728D] transition-colors duration-200 text-center whitespace-normal justify-center items-center leading-normal flex",
        text: "bg-transparent text-[#111111] font-bold underline underline-offset-4 hover:text-[#31728D] transition-colors duration-200",
      },
      size: {
        default: "",
        regularSelect: "w-[15.7rem] h-[6.3rem]",
        regulatText: "text-[1.4rem]",
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
