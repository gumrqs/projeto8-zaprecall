import "./style.css"
import logoPequeno from './logo-pequeno.png'
import { escolhendoPerguntas } from "./Dados"
import Pergunta from "./Pergunta"

export default function TelaPerguntas(){

    let perguntas = escolhendoPerguntas.map(pergunta => <Pergunta pergunta={pergunta.pergunta} />);
            
    return(
    <>
        <div className="conteiner">
        <div className="topo">
            <img src={logoPequeno}/>
            <p>ZapRecall</p>            
        </div>
        {perguntas}
        </div>
    </>);
}
