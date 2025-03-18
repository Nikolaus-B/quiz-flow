import { ProgressBar } from "@/data/progressBarsData";
import { Review } from "@/data/reviewsData";
import { MultiStepsDataType } from "./MultiStepData";

export interface UserState {
  reviews: Review[];
  progressBars: ProgressBar[];
  multiStepsData: MultiStepsDataType;
  loading: boolean;
  error: string | null;
}
