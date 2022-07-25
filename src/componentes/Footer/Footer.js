import React from "react";
import FooterIonIcon from "./FooterIonIcon";
import './style.css'
import party from './party.png'
import sad from './sad.png'

export default function Footer({ estiloFooter, perguntas }){

    const [resultadoFinal, setResultadoFinal]=React.useState("");

    if(estiloFooter.length === perguntas.length){
        const arrVerificar = estiloFooter.filter(verificador);
        if(arrVerificar.length === 0){
            setResultadoFinal(
                <>
                     <div className="footer-resultado">
                    <div className="frase-erro"> 
                        <strong> <img src={party}/> Parabéns!</strong>
                       <p> Você não esqueceu de nenhum flashcard!</p>
                    </div>
                </div>
                </>
            );
        }
        else{
            setResultadoFinal(
                <>
                <div className="footer-resultado">
                    <div className="frase-erro"> 
                        <strong> <img src={sad}/> Putz...</strong>
                       <p> Ainda faltam alguns...
                        Mas não desanime!</p>
                    </div>
                </div>
                </>
            );
        }
        estiloFooter.push(0);
    }
    function verificador(obj){
        if(obj.cor === "vermelho"){
            return true;
        }
        
    }
    let corte= estiloFooter.slice(0,4);
    return(
<>        

        <div className="footer">
        {resultadoFinal}
            <div>
                {corte.length}/{perguntas.length} CONCLUÍDOS
                <div className="flex">
                    {estiloFooter.map((tipoQuestao,index) => <FooterIonIcon key={index} nomeIcone={tipoQuestao.nome} nomeClasse={tipoQuestao.cor}/>)}
                </div>   
            </div>
        </div>
        </>

    )
}
