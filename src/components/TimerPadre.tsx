import React, { useState } from 'react'
import Timer from './Timer';

export default function TimerPadre() {
    const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <>
        <span>Milisegundos: {milisegundos}</span>
        <div>
            <button onClick={() => setMilisegundos(1000)}>1000 Milisegundos</button>
            <button onClick={() => setMilisegundos(2000)}>2000 Milisegundos</button>
        </div>
        <Timer milisegundos={milisegundos}/>
    </>
  )
}
