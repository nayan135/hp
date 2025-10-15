"use client"
import { useState } from "react"
import { QuizQuestion } from "@/lib/quiz"

interface QuizQuestionProps {
  question: QuizQuestion
  onAnswer: (answer: string | number) => void
  currentQuestion: number
  totalQuestions: number
  isProcessing?: boolean
}

export function QuizQuestionComponent({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
  isProcessing = false,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null)
  const [scaleValue, setScaleValue] = useState<number>(3)

  const handleSubmit = () => {
    if (question.type === "choice" && selectedAnswer !== null) {
      onAnswer(selectedAnswer as string)
    } else if (question.type === "scale") {
      onAnswer(scaleValue)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-amber-200 mb-2">
          <span>Question {currentQuestion}</span>
          <span>{totalQuestions} Questions</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-yellow-600 transition-all duration-500"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="p-8 bg-gray-800/80 backdrop-blur-sm border border-amber-500/20 rounded-xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-100 text-center">
          {question.question}
        </h2>

        {/* Multiple Choice Options */}
        {question.type === "choice" && question.options && (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswer(option)
                  // Auto-submit for choice questions
                  setTimeout(() => onAnswer(option), 300)
                }}
                disabled={isProcessing}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:scale-[1.02] ${
                  selectedAnswer === option
                    ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/20"
                    : "border-gray-600 bg-gray-700/30 hover:border-amber-500/50"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="text-base leading-relaxed text-amber-50">{option}</span>
              </button>
            ))}
          </div>
        )}

        {/* Scale Input */}
        {question.type === "scale" && question.scaleLabels && (
          <div className="space-y-6">
            <div className="px-2">
              <input
                type="range"
                min="1"
                max="5"
                value={scaleValue}
                onChange={(e) => setScaleValue(Number(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between mt-2 text-sm text-amber-200">
                <span>{question.scaleLabels.min}</span>
                <span className="text-xl font-bold text-amber-400">{scaleValue}</span>
                <span>{question.scaleLabels.max}</span>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "Continue"}
            </button>
          </div>
        )}

        {isProcessing && (
          <div className="mt-6 text-center text-amber-200 animate-pulse">
            The Sorting Hat is considering...
          </div>
        )}
      </div>
    </div>
  )
}
