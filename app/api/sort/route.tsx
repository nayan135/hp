import { QuizAnswer, quizQuestions } from "@/lib/quiz"
import type { HouseName } from "@/lib/house"
import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { answers }: { answers: QuizAnswer[] } = await request.json()

    // Format answers for analysis
    const formattedAnswers = answers
      .map((answer) => {
        const question = quizQuestions.find((q) => q.id === answer.questionId)
        if (!question) return ""

      if (question.type === "scale") {
        return `Q: ${question.question}\nA: ${answer.answer}/5`
      }
      return `Q: ${question.question}\nA: ${answer.answer}`
    })
    .filter(Boolean)
    .join("\n\n")

    
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: `Imagine yourself as the Sorting Hat from the Harry Potter series.
      pull your wisdom from the books and movies to make an accurate sorting decision.
      The decision you make is going to decide the future of young witch and wizards!
      You are the Hogwarts Sorting Hat. Based on these quiz answers, determine which house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin) best fits this person.

Quiz Answers:
${formattedAnswers}

Respond EXACTLY in this format with no other text:
HouseName|Brief reasoning (2-3 sentences explaining why this house fits them)

if you are unsure, just say Gryffindor. and add that you are unsure in reasoning


Example: Gryffindor|Your answers show tremendous courage and a willingness to stand up for what's right. You value bravery and aren't afraid to take risks for the greater good.`,
    })

    // Parse the AI response
    const [houseName, reasoning] = text.split("|").map((s) => s.trim())

    // Validate the house name
    const validHouses: HouseName[] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    if (!validHouses.includes(houseName as HouseName)) {
      console.error("Invalid house name generated:", houseName)
      // Fallback to a default house
      return Response.json(
        {
          house: "Gryffindor" as HouseName,
          reasoning: "The Sorting Hat has made its decision based on your unique qualities.",
        },
        { status: 200 }
      )
    }

    return Response.json(
      {
        house: houseName as HouseName,
        reasoning: reasoning || "The Sorting Hat has made its decision based on your unique qualities.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sorting into house:", error)
    return Response.json(
      { error: "Failed to sort into house. Please try again." },
      { status: 500 }
    )
  }
}


