import { multiStepsData } from "@/data/multiStepsData";
import { progressBarsData } from "@/data/progressBarsData";
import { reviewsData } from "@/data/reviewsData";

const mockFetch = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export const fetchReviews = () => mockFetch(reviewsData);
export const fetchProgressBars = () => mockFetch(progressBarsData);
export const fetchMultiStepsData = () => mockFetch(multiStepsData);
