import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import './styles.css'
import GonzaloApp from './GonzaloApp'
import { ContadorApp } from './ContadorApp'

/*     const HelloWorld = () => {

        return ( <div>Hola mundo</div>)
    } */

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>

        
        <GonzaloApp titulo="Soy un titulo" saludo = "Buenos dias" subSaludo =" Que tal?" numero = {123} booleano = {true} unArray = {[1,2,3,4]}/>
        <ContadorApp value = {0}/>

    </StrictMode>

)