import React, { useEffect, useRef, useState } from 'react'

interface Props {
    milisegundos: number
}

export default function Timer({milisegundos} : Props) {
    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>()
    useEffect(() => {
        if(seconds >= 50) { // Si es mayor limpia el intervalo
            ref.current && clearInterval(ref.current) // Debemos verificar si hay ref.current asi no salta error, ya que debe tener valor si o si

        } else {
            ref.current = setInterval(() => setSeconds(s => s + 1), milisegundos) // Si es menor de 50 entonces establecer intervalo
        }
        return() => {
            clearInterval(ref.current) // Limite de tiempo
        }
    },[milisegundos, seconds])
  return (
    <div>
        <h1>Timer: {seconds}</h1>
    </div>
  )
}
