"use client"
import { useRouter } from "next/navigation"
import { useState , useEffect} from "react"
import { MagicalBackground } from "@/components/magical-background"
import { Sparkles } from "@/components/sparkles"
import { QuizQuestionComponent } from "@/components/quiz"
import { quizQuestions, type QuizAnswer } from "@/lib/quiz"
import { audio } from "@/hooks/audio"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
const [hasStarted, setHasStarted] = useState(false)
    const currentQuestion = quizQuestions[currentQuestionIndex]


  const handleAnswer = async (answer: string | number) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, answer }]
    setAnswers(newAnswers)

    const {play: playSortingHat} =audio("/sound/sorting-hat.mp3", false)
    
     useEffect(() => {
    if (!hasStarted) {
      playSortingHat()
      setHasStarted(true)
    }
  }, [hasStarted, playSortingHat])


    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsProcessing(true)
      try {
        const response = await fetch("/api/sort", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: newAnswers }),
        })
        const result = await response.json()
   
        sessionStorage.setItem("sortingResult", JSON.stringify(result))
        router.push("/results")
      } catch (error) {
        console.error("Error submitting quiz:", error)
        router.push("/results")
      }
    }
  }

  if (!currentQuestion) {
    return null
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <MagicalBackground />
      <Sparkles />
      
      <div className="relative z-20 container mx-auto px-4 py-8">
        <QuizQuestionComponent
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  )
}