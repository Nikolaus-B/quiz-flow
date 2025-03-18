import {
  fetchMultiStepsData,
  fetchProgressBars,
  fetchReviews,
} from "@/api/mockApi";
import { ProgressBar } from "@/data/progressBarsData";
import { Review } from "@/data/reviewsData";
import { MultiStepsDataType } from "@/models/MultiStepData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk<
  {
    reviews: Review[];
    progressBars: ProgressBar[];
    multiStepsData: MultiStepsDataType;
  },
  void
>("user/fetchData", async (_, { rejectWithValue }) => {
  try {
    const [reviews, progressBars, multiStepsData] = await Promise.all([
      fetchReviews(),
      fetchProgressBars(),
      fetchMultiStepsData(),
    ]);
    return { reviews, progressBars, multiStepsData };
  } catch (error) {
    console.log("error:", error);
    return rejectWithValue("Failed to load data");
  }
});
