export type HouseName = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff"

export interface House {
  name: HouseName
  emoji: string
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
    emoji:"",
    colors:{
        primary:"",
        secondary:"",
        gradient:"",

    },
    traits:["Bravery", "Courage", "Chivalry"],
    description:"Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are red and gold.",
    founder:"Godric Gryffindor",
    ghost:"Nearly Headless Nick",
    element:"Fire",
    animal:"Lion",
    notableMembers:["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"],
    motto:"Their daring, nerve and chivalry set Gryffindors apart." 
}

    }