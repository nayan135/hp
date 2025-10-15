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
]


  export interface QuizAnswer {
  questionId: number
  answer: string | number
}