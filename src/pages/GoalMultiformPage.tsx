import MultiStepForm from "@/components/forms/MultiStepForm/MultiStepForm";
import { GoalIDType } from "@/models/MultiStepData";
import { useParams } from "react-router";

function GoalMultiformPage() {
  const { goalId } = useParams();

  return (
    <section className="min-w-[32.7rem]">
      <MultiStepForm goalId={goalId as GoalIDType} />
    </section>
  );
}

export default GoalMultiformPage;
