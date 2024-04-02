const Events = () => {

    const HandleMyEvent = () => {
        console.log("Ativou a mensagem")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Isso foi renderizado!</h1>
        } else {
            return <h1>Agora isso foi renderizado</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={HandleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (true) {
                            console.log("Erro")
                        }
                    }}>
                    Ou aqui!
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}
export default Events;