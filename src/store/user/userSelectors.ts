import { RootState } from "../store";

export const selectReviews = (state: RootState) => state.user.reviews;

export const selectProgressBars = (state: RootState) => state.user.progressBars;

export const selectMultiStepsData = (state: RootState) =>
  state.user.multiStepsData;
