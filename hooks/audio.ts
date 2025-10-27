import { useEffect, useRef } from "react";

export function audio(audioUrl: string, autoPlay= false){
    const audioR = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
          const audio = new Audio(audioUrl)
        audioR.current = audio

        if(autoPlay){
            audio.play().catch((error) => {
                console.error("Error playing audio:", error)
        })

        }
    return() => {
        audio.pause()
        audio.currentTime = 0
    }

},[audioUrl, autoPlay])

const play = () => {
    if(audioR.current){
        audioR.current.currentTime =0
        audioR.current.play().catch((error) => {
            console.error("Error playing audio:", error)
    })
}

}
const stop = () => {
    if(audioR.current){
        audioR.current.pause()
        audioR.current.currentTime =0
    }
  }

  return { play, stop, audioR }
}

