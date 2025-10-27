export type HouseName = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff"

export interface House {
  name: HouseName
  emoji: string
  audio: string
  colors: {
    primary: string
    secondary: string
    gradient: string
  }
  traits: string[]
  description: string
  founder: string
  ghost: string
  animal: string
  element: string
  notableMembers: string[]
  motto: string
}

export const houses: Record<HouseName, House> = {
  Gryffindor: {
    name: "Gryffindor",
    emoji:"/images/Gryffindor.jpg",
    audio:"/sound/gryffindor.mp3",
    colors:{
        primary:"#4342f",
        secondary:"#d4ac2b",
        gradient:"#ff0000 to #ffdd00",

    },
    traits:["Bravery", "Courage", "Chivalry"],
    description:"Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are red and gold.",
    founder:"Godric Gryffindor",
    ghost:"Nearly Headless Nick",
    element:"Fire",
    animal:"Lion",
    notableMembers:["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"],
    motto:"Their daring, nerve and chivalry set Gryffindors apart." 
},

Slytherin: {
  name:"Slytherin",
  emoji:"/images/Slytherin.jpg",
  audio:"/sound/slytherin.mp3",
  colors:{
    primary:"#1a472a",
    secondary:"#aaaaaa",
    gradient:"#006400 to #00ff00",

  },
  traits:["Ambition", "Cunning","Determination","Pride"],
  description:"Slytherin values ambition, leadership ,resourcefulness and  'a certain disregard for the rules'. Its emblem animal is the Serpent",
  founder:"Salazar Slytherin",
  ghost:"Bloody Baron",
  element:"Water",
  animal:"Serpent",
  notableMembers:["Severus Snape", "Draco Malfoy","Tom Riddle (Lord Voldemort)"],
  motto:"Slytherin will help you on your way to greatness."
},
Ravenclaw:{
  name:"Ravenclaw",
  emoji:"/images/Ravenclaw.jpg",
  audio:"/sound/ravenclaw.mp3",
  colors:{
    primary:"#0e1a40",
    secondary:"#946b2d",
    gradient:"#0000ff to #00ffff",
  },
  traits:["Wit","Learning","Wishdom","Intelligence","Creativity"],
  description:"Ravenclaw is for those who value learning, wishdom and intelligence. Its emblem animal is the eagke",
  founder:"Rowena Ravenclaw",
  ghost:"Grey Lady (Helena Ravenclaw)",
  element:"Air",
  animal:"Eagle",
  notableMembers:["Luna Lovegood", "Helena Ravenclaw","Cho Chang","Garrick Ollivander"],
  motto:"Wit beyond measure is man's greatest treasure."
},

Hufflepuff:{
  name:"Hufflepuff",
  emoji:"/images/Hufflepuff.jpg",
  audio:"/sound/hufflepuff.mp3",
  colors:{
    primary:"#ecb939",
    secondary:"#000000",
    gradient:"#ffff00 to #000000",
  },
  traits:["Loyalty","Hard Working", "Fairness","Patience"],
  description:"Hufflepuff values hardwork and loyalty more than anything else. Its emblem animal is the Badger",
  founder:"Helga Hufflepuff",
  ghost:"Fat Friar",
  element:"Earth",
  animal:"Badger",
  notableMembers:["Cedric Diggory","Hengist of Woodcroft", "Fat Friar"],
  motto:"Nobler than royalty are friends of true loyalty",

  }
}

    