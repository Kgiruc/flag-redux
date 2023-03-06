import { useSelector, useDispatch } from "react-redux"
import { increment } from "../actions/Index";
import { decrement } from "../actions/Index";

function menu() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col h-[100vh] justify-center items-center">
           <p>Counter {counter}</p>
           <button onClick={() => dispatch(increment(5))}>+</button>
           <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? <p>zalogowano</p> : <p>logowanie pedale</p>} 
        </div>
    )
}

export default menu