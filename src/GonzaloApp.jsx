import PropTypes from "prop-types";

export const GonzaloApp = ({titulo, saludo, numero, booleano, unArray, subSaludo, nombre}) => {

    const getSaludo = () => {
        return "Holita";
    }

    return(
        <>
            <div>{titulo}</div>
            <div>{nombre}</div>
            <p>{saludo + subSaludo}</p>
            <p>{numero}</p>
            <p>{booleano}</p>
            <p>{unArray}</p>
            <p>{getSaludo()}</p>
        </>
    )
}

GonzaloApp.propTypes = {

    saludo: PropTypes.string.isRequired,
    numero: PropTypes.number,
    booleano: PropTypes.bool,
    unArray: PropTypes.array,
    subSaludo: PropTypes.string,
    titulo: PropTypes.string

}

GonzaloApp.defaultProps = {

    titulo: "Titulo por defecto",
    saludo: "Saludo por defecto",
    nombre: "Nombre por defecto"


}

export default GonzaloApp