import React from "react";
import FooterIonIcon from "./FooterIonIcon";
import './style.css'

export default function Footer({ estiloFooter, numero, perguntas, setEstiloFooter}){

    const [resultadoFinal, setResultadoFinal]=React.useState(<></>);
    if(estiloFooter.length===8){
        const arrVerificar = estiloFooter.filter(verificador);
        if(arrVerificar.length === 0){
            setResultadoFinal(
                <>  
                <div>
                    <p>parabens</p>
                </div>
                </>
            );
        }
        else{
            setResultadoFinal(
            <>
            <div>
                <p>parabens</p>
            </div>
            </>);
        }
    }
    function verificador(obj){
        if(obj.cor === "vermelho"){
            return true;
        }
    }
    return(

        <div className="footer">
            {resultadoFinal}
            <div>
                {estiloFooter.length}/{perguntas.length} CONCLUÍDOS
                <div className="flex">
                    {estiloFooter.map((tipoQuestao,index) => <FooterIonIcon key={index} nomeIcone={tipoQuestao.nome} nomeClasse={tipoQuestao.cor} numero={index} />)}
                </div>   
            </div>
        </div>
    )
}
