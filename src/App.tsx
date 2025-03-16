import { Route, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const GoalMultiformPage = lazy(() => import("./pages/GoalMultiformPage"));
const PersonalPlanSummaryPage = lazy(
  () => import("./pages/PersonalPlanSummaryPage")
);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/goal-multiform/:goalId" element={<GoalMultiformPage />} />
        <Route
          path="/personal-plan-summary"
          element={<PersonalPlanSummaryPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
