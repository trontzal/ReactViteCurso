export const GonzaloApp = ({saludo, numero, booleano, unArray}) => {

    const getSaludo = () => {
        return "Holita";
    }

    return(
        <>
            <div>Gonzalo</div>
            <p>{saludo}</p>
            <p>{numero}</p>
            <p>{booleano}</p>
            <p>{unArray}</p>
            <p>{getSaludo()}</p>
        </>
    )
}

export default GonzaloApp