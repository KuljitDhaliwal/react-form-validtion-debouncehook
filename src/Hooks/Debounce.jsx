import { useEffect, useRef } from "react"

export const useDebounce = (fun, delay) => {
    const timerRef = useRef()
    useEffect(()=>{
        return()=>{
            clearTimeout(timerRef.current)
        }
    },[])
    return (...args) => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            fun(...args)
        }, delay)

        
    }

}