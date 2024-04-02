const Challenge = () => {
    const Valor1 = 1;
    const Valor2 = 5;

    const SomaValores = () => {
            console.log(Valor1 + Valor2)
        
    }
    return (
        <div>
            <button onClick={SomaValores}>Soma</button>
        </div>
    )
}

export default Challenge