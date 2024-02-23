import { useState } from "react";

const HookState01 = () => {

    const [valor, setValor] = useState(0)

    function aumentar() {
        setValor(v => v + 1)
    }

    function diminuir() {
        if (valor !== 0) {
            setValor(v => v - 1)
        }
    }

    return (
        <>
            <h1>Valor: {valor}</h1>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}

export default HookState01;
