import { FieldsTypes } from "@/models/MultiStepData";

export const getMultiFormLabel = (type: FieldsTypes): string => {
  switch (type) {
    case "checkbox":
      return "Select all that apply";
    case "radio":
      return "Select one that apply";
    case "email":
      return "Please enter your email to see results";
    default:
      return "";
  }
};
