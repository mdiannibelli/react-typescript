import { useState } from "react"


export default function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementar = (num: number = 1):void => { // Si no se proporciona ningun valor la función no devuelve ningun valor (void)
        setCounter(counter + num)
    }
  return (
    <div>
        <span>Counter</span>
        <hr />
        <button onClick={() => incrementar()}>Más 1</button>
        <button onClick={() => incrementar(2)}>Más 2</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(0)}>Clear</button>
    </div>
  )
}
