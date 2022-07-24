import React from "react";
import FooterIonIcon from "./FooterIonIcon";
import './style.css'

export default function Footer({ estiloFooter, perguntas }){
    const [arrFooter, setArrFooter]=React.useState([]);
    const [nomeClasse, setNomeClasse]=React.useState([]);
 

    if(estiloFooter[0]==="close-circle"){
        arrFooter.push(estiloFooter[0]);
        nomeClasse.push("vermelho");
        
    }
     if(estiloFooter[0]==="help-circle"){
        arrFooter.push(estiloFooter[0]);
    }
     if(estiloFooter[0]==="checkmark-circle"){
        arrFooter.push(estiloFooter[0]);
    }
    console.log(arrFooter);
    return(

        <div className="footer">
            
            <p>
            {arrFooter.length}/{perguntas.length} COncluídos
                {arrFooter.map((nomeIcone,index) => <FooterIonIcon key={index} nomeIcone={nomeIcone} nomeClasse={nomeClasse} numero={index}/>)}   
            </p>
        </div>
    )
}