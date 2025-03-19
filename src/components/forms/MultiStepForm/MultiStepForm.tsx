import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { MultiStepsDataType, StepType } from "@/models/MultiStepData";
import EmojiCheckbox from "@/components/elements/EmojiCheckbox/EmojiCheckbox";
import Logo from "@/components/elements/Logo/Logo";
import { Link, useNavigate } from "react-router";
import EmojiRadioGroup from "@/components/elements/EmojiRadioGroup/EmojiRadioGroup";
import { getMultiFormLabel } from "@/lib/getMultiFormLabel";
import { useAppSelector } from "@/store/store";
import { selectMultiStepsData } from "@/store/user/userSelectors";

const stepVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

function MultiStepForm({ goalId }: { goalId: keyof MultiStepsDataType }) {
  const multiStepsData = useAppSelector(selectMultiStepsData);

  const filteredSteps: StepType[] = [
    ...(multiStepsData[goalId] || []),
    ...multiStepsData["default"],
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

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
      clearErrors();
    } else {
      console.log("Final Data: ", { ...data, selectedValues });
      navigate("/personal-plan-summary");
    }
  };

  const emailValue = watch("email", "");
  const radioValue = watch(filteredSteps[currentStep]?.name || "", "");

  const isButtonDisabled =
    (!selectedValues.length &&
      filteredSteps[currentStep]?.type !== "email" &&
      filteredSteps[currentStep]?.type !== "radio") ||
    (filteredSteps[currentStep]?.type === "email" && !emailValue) ||
    (filteredSteps[currentStep]?.type === "radio" && !radioValue);

  return (
    <motion.div
      key={currentStep}
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Progress
        value={((currentStep + 1) / filteredSteps.length) * 100}
        className="mb-[1.2rem] bg-[#E8E6EF] [&>div]:bg-[#31728D]"
      />
      <div className="flex gap-[6.3rem] items-center justify-center mb-[4.2rem]">
        {currentStep > 0 ? (
          <div className="w-[40px] h-[40px]">
            <Button
              type="button"
              variant={"round"}
              size="regulatRound"
              onClick={() => {
                clearErrors();
                setCurrentStep(currentStep - 1);
              }}
            >
              <img src="/arrow-left.svg" className="w-[12px]" alt="Logo" />
            </Button>
          </div>
        ) : (
          <Link to="/">
            <Button type="button" variant={"round"} size="regulatRound">
              <img src="/arrow-left.svg" alt="Logo" className="w-[12px]" />
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
        <div className="flex flex-col gap-[1.2rem] mb-[7.4rem]">
          <label className=" font-semibold text-[2.5rem] mx-auto text-center ">
            {filteredSteps[currentStep]?.label}
          </label>
          <label className="text-[1.2rem] text-[#666666] font-light">
            {getMultiFormLabel(filteredSteps[currentStep].type)}
          </label>
        </div>
        <div className=" relative">
          {filteredSteps[currentStep]?.type === "email" && (
            <>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                className={`w-full h-auto px-[1.2rem] py-[1.2rem] text-[1.6rem] leading-[120%] rounded-lg focus-visible:ring-0 border transition-all focus:ring-0 focus:outline-none placeholder-gray-400 focus:border-[#31728D] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.email
                    ? "border-[#EA6747] focus:border-[#EA6747]"
                    : "border-gray-300"
                } `}
                placeholder="example@gmail.com"
                // disabled={isSubmitting}
              />
              {errors.email && (
                <p className="absolute bottom-[-1.4rem] text-[#EA6747] font-semibold text-sm">
                  {String(errors.email.message)}
                </p>
              )}
            </>
          )}
        </div>
        {filteredSteps[currentStep]?.type === "radio" && (
          <EmojiRadioGroup
            name={filteredSteps[currentStep]?.name}
            options={filteredSteps[currentStep]?.options || []}
            selectedValue={radioValue}
            onChange={(value) =>
              setValue(filteredSteps[currentStep]?.name, value)
            }
          />
        )}
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
        <Button
          type="submit"
          disabled={isButtonDisabled}
          className="mt-[1.2rem]"
        >
          {currentStep < filteredSteps.length - 1 ? "Continue" : "Get results"}
        </Button>
      </form>
    </motion.div>
  );
}

export default MultiStepForm;
