const TemplateExpress = () => {
    const name = "Pedro"
    const data = {
        age: 22,
        job: "programador"
    }
    return (
        <div>
            <p>Olá, me chamo{name}.</p>
            <p>Tenho {data.age} anos</p>
            <p>e sou {data.job}</p>
        </div>
    )   
}

export default TemplateExpress