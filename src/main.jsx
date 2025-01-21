import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import './styles.css'
import GonzaloApp from './GonzaloApp'

/*     const HelloWorld = () => {

        return ( <div>Hola mundo</div>)
    } */

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>

        
        <GonzaloApp saludo = "Buenos dias" numero = {123} booleano = {true} unArray = {[1,2,3,4]}/>


    </StrictMode>

)