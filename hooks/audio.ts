export function audio(audioUrl: string, autoPlay= false){
    const audioR = useRef<HTMLAudioElement | null>(null);

    useEffect(()=> {
        audioR.current = new Audio(audioUrl);

        if(autoPlay){
            audioR.current.play().catch((error) => {
                console.error("Error playing audio:", error);
        }

    })
    return

}