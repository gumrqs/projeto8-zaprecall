import "./style.css"
import logoPequeno from './logo-pequeno.png'
import { escolhendoPerguntas } from "./Dados"
import Pergunta from "./Pergunta"
import React from "react"


export default function TelaPerguntas(){
    
    const[estiloFooter, setEstiloFooter]= React.useState("")
    let perguntas = escolhendoPerguntas.map(pergunta => <Pergunta setEstiloFooter={setEstiloFooter} pergunta={pergunta.pergunta}  questao={pergunta.questao} resposta={pergunta.resposta} />);
    
    return(
    <>
    
        <div className="conteiner">
            <div className="topo">
                <img src={logoPequeno}/>
                <p>ZapRecall</p>            
            </div>
            {perguntas} 
            {/* <Pergunta pergunta={perguntas} responderQuestao={responderQuestao} mostrarQuestao={mostrarQuestao} estadoDaPergunta={estadoDaPergunta}/> */}
        </div>
        <div className="footer">
            <p><ion-icon name={estiloFooter}></ion-icon></p>
        </div>
       
    </>);
}
