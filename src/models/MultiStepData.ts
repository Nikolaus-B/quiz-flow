export type FieldsTypes = "email" | "radio" | "checkbox";

export interface StepType {
  name: string;
  label: string;
  type: FieldsTypes;
  options?: { value: string; emoji?: string }[];
}

export interface MultiStepsDataType {
  "emotional-attraction": StepType[];
  "build-connection": StepType[];
  default: StepType[];
}

export type GoalIDType = "emotional-attraction" | "build-connection";
