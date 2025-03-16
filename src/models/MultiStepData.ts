export type StepType = {
  name: string;
  label: string;
  type: "text" | "email" | "radio" | "checkbox";
  options?: { value: string; emoji?: string }[];
};

export type MultiStepsDataType = {
  "emotional-attraction": StepType[];
  "build-connection": StepType[];
  default: StepType[];
};

export type GoalIDType = "emotional-attraction" | "build-connection";
