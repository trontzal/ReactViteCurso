import PropTypes from "prop-types"
import { useState } from "react"

export const ContadorApp = ({value}) =>{

    const [contador, setContador] = useState(value)

    const addContador = function(){

        /* value = value + 1;
        console.log(value) */

        /* setContador(contador + 1) */

        setContador( (c) => c + 1);

    }

    const resetContador = function(){
        setContador(0)
    }

    const subractContador = function(){
        setContador(contador - 1)
    }

    return (
        <>
            <h2>Contador</h2>
            <p>{contador}</p>
            <button onClick={addContador}>+1</button>
            <button onClick={resetContador}>Reset</button>
            <button onClick={subractContador}>-1</button>
        </>
        
    )
}

ContadorApp.propTypes = {

    value: PropTypes.number.isRequired

}