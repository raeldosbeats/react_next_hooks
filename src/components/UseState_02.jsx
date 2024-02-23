import { useState } from "react";

const HookState02 = () => {

    const [valor, setValor] = useState(0)

    function aumentar() {
        setValor(v => v + 1)
    }

    function diminuir() {
        if (valor !== 0) {
            setValor(v => v - 1)
        }
    }

    function diminuir_valor(a){
        setValor(v => v - a)
    }

    return (
        <>
            <h1>Valor: {valor}</h1>
            <button onClick={() => diminuir_valor(100)}>Diminuir -</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}

export default HookState02;
