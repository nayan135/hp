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
question: "You're waking through the forbidden forest at night and hear something injured nearby. What would you do?",
type: "choice",
options: ["Light your wand and go to help - even if it's dangerous", "Analyze the sounds- could be ceantaur or worse -- better to think before acting",
   "Apporach quietly- maybe you can tame it", "Go get Hagrid, he will know hoe to handle magical creatures"],
  },
  {
id : 2,
question: "On a scale of 1 to 5, how much do you value bravery?",
type: "scale",
scaleLabels: { min: "Not at all", max: "Very much" },
  },
  {
    id: 3,
    question: "You stand before the Mirror of Erised. What do you see?",
    type: "choice",
    options:["Holding a wand, powerful enough to chenge the fate","My friends beside me, -nofear, no loss", "The answer to every question you had", "A world at peace even if no one knows what I gave up"],
  },  
  {
      id: 4,
    question: "The Triwizard Cup sits before you. You could take it  or let another win",
    type: "choice",
    options:["Take it. You've earned your glory",
      "Step back. Winning isn't everything", 
      "Wait -sometimes the Cup hides more than it shows", 
      "Pretend to yeild, then seize the chance when its write"],
  },  
  {   
     id: 5,
    question: "You're offered a vial of Felix Felicis(The Liquid Luck). You can oly use it once. What would you do ?",
    type: "choice",
    options: ["When I can't afford to lose",
      "To protect someone else even if i fall"
      ,"For something I've worked on for years",
      "Save it forever, luck shouldn't be wasted" ],
  },
]


  export interface QuizAnswer {
  questionId: number
  answer: string | number
}