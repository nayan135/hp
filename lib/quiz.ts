export interface QuizQuestion {
  id: number
  question: string
  type: "choice" | "scale"
  options?: string[]
  scaleLabels?: { min: string; max: string }
}

export const quizQuestions: QuizQuestion[] = [
  {
id : 1,
question: "What is your favorite color?",
type: "choice",
options: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
  },
  {
id : 2,
question: "On a scale of 1 to 5, how much do you value bravery?",
type: "scale",
scaleLabels: { min: "Not at all", max: "Very much" },
  },
  {
    id: 3,
    question: "",
    type: "choice",
    options:["","", "", "", "", ""],
  },
]


  export interface QuizAnswer {
  questionId: number
  answer: string | number
}