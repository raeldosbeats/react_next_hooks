import { useState } from "react";

const HookState03 = () => {

    const [valor1, setValor1] = useState(1)
    const [valor2, setValor2] = useState(2)

    function diminuir1() {
        setValor1(v => v - 1)
    }

    function aumentar1() {
        setValor1(v => v + 1)
    }

    function diminuir2() {
        setValor2(v => v - 1)
    }

    function aumentar2() {
        setValor2(v => v + 1)
    }

    return (
        <>
            <h4>useState - Exercício 1</h4>
            <h3>{valor1}</h3>
            <button onClick={diminuir1}>-</button>
            <button onClick={aumentar1}>+</button>
            <hr />
            <h3>{valor2}</h3>
            <button onClick={diminuir2}>-</button>
            <button onClick={aumentar2}>+</button>
            <hr />
            <p>O resultado de {valor1} x {valor2} = {valor1 * valor2}</p>
        </>
    )
}

export default HookState03;
