import { useReducer } from "react"

const initialValues = {
    contador: 0
}

type ActionType = 
    | {type: 'incrementar'}
    | {type: 'decrementar'}
    | {type: 'reset'}
    | {type: 'custom', payload: number}

const counterReducer = (state: typeof initialValues, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar': 
            return {
                ...state,
                contador: state.contador > 0 ? state.contador - 1 : state.contador = 0
            }
        case 'reset':
            return{
                ...state,
                contador: state.contador = 0
            }
        case 'custom': 
            return {
                ...state,
                contador: state.contador + action.payload
            }
        default:
            return state;
    }   
    

}

export default function CounterRed() {
    const [contadorState, dispatch] = useReducer(counterReducer, initialValues)
  return (
    <>
        <h1>Contador con reducer: {contadorState.contador}</h1>
        <button onClick={() => dispatch({type: 'incrementar'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrementar'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'custom', payload: 5})}>Icrement by 5</button>
        
    </>
  )
}
