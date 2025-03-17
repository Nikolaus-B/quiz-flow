import { MultiStepsDataType } from "@/models/MultiStepData";

export const multiStepsData: MultiStepsDataType = {
  "emotional-attraction": [
    {
      name: "preference",
      label: "What would you like to learn?",
      type: "checkbox",
      options: [
        { value: "Skill1_goal1", emoji: "🙌" },
        { value: "Skill2_goal1", emoji: "🥹" },
        { value: "Skill3_goal1", emoji: "⚡" },
        { value: "Skill4_goal1", emoji: "😌" },
        { value: "Skill5_goal1", emoji: "👍" },
      ],
    },
    {
      name: "skills",
      label: "What skills do you want to improve?",
      type: "radio",
      options: [
        { value: "Listening", emoji: "👂" },
        { value: "Confidence", emoji: "💪" },
        {
          value: "Emotional Intelligence",
          emoji: "🧠",
        },
      ],
    },
  ],
  "build-connection": [
    {
      name: "approach",
      label: "What would you like to learn?",
      type: "checkbox",
      options: [
        { value: "Skill1_goal2", emoji: "🤝" },
        { value: "Skill2_goal2", emoji: "💬" },
        { value: "Skill3_goal2", emoji: "🎭" },
        { value: "Skill4_goal2", emoji: "🗣️" },
        { value: "Skill5_goal2", emoji: "📞" },
      ],
    },
    {
      name: "strengths",
      label: "What are your social strengths?",
      type: "radio",
      options: [
        { value: "Empathy", emoji: "❤️" },
        { value: "Humor", emoji: "😂" },
        { value: "Openness", emoji: "🌍" },
      ],
    },
  ],
  default: [
    {
      name: "email",
      label: "Please enter your email to see results",
      type: "email",
    },
  ],
};
