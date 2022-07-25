import "./style.css"
import logoPequeno from './logo-pequeno.png'
import { escolhendoPerguntas } from "./Dados"
import Pergunta from "./Pergunta";
import Footer from "../Footer/Footer";
import React from "react";


export default function TelaPerguntas(){
    
    const[estiloFooter, setEstiloFooter]= React.useState([])
    function comparador() { 
        return Math.random() - 0.5; 
    }
    escolhendoPerguntas.sort(comparador);
    let perguntas = escolhendoPerguntas.map((pergunta,index) => <Pergunta key={index} index={index} numero={index+1} estiloFooter={estiloFooter} setEstiloFooter={setEstiloFooter} pergunta={pergunta.pergunta}  questao={pergunta.questao} resposta={pergunta.resposta} />);
    

    


    return(
    <>
    
        <div className="conteiner">
            <div className="topo">
                <img src={logoPequeno}/>
                <p>ZapRecall</p>            
            </div>
            {perguntas} 
            <Footer estiloFooter={estiloFooter} setEstiloFooter={setEstiloFooter} perguntas={perguntas} />
        </div>
       
    </>);
}
