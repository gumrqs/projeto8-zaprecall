import React from 'react'
import setinha from "./setinha.png"



export default function Pergunta({pergunta, questao, resposta}){
   /*  let questoes = cardQuestoes.map(questao => <Pergunta questao={questao.questao} resposta={questao.resposta}/>)

 */
    const [estadoDaPergunta, setEstadoDaPergunta]=React.useState("fechada");
    function mostrarQuestao(){
        if(estadoDaPergunta === "fechada"){ 
            setEstadoDaPergunta("aberta");
          
        }
        if(estadoDaPergunta==="aberta"){
            setEstadoDaPergunta("aopaOlhaaResposta")
        }
    }

    return (
        <> 
            {
                estadoDaPergunta==="fechada"
                ? 
                <div className="perguntas">
                    <div className="estilos-perguntas">
                        <p>{pergunta}</p>
                    <div>
                        <ion-icon name="play-outline" onClick={mostrarQuestao} ></ion-icon>
                    </div>
                    </div>
                </div>
                :
                    estadoDaPergunta==="aberta"
                    ?
                    
                    <div className="pergunta-fechada">
                        <p>{questao} </p>
                        <div className="img-pergunta-fechada">
                        <img onClick={mostrarQuestao} src={setinha}/>
                    </div>
                    </div>

                    
                 :
                 <>
                    <div className='resposta-pergunta'>
                        <p>{resposta}</p>
                    </div>
                    <div className="opcoes">
                        <div className='nao-lembrei'>
                            <p>Não lembrei</p>
                        </div>
                        <div className='quase-nao-lembrei'>
                            <p>Quase não lembrei</p>
                        </div>
                        <div className='zap'>
                            <p>zap!</p>
                        </div>

                        
                    </div>
                </>
                    
                
                    
            }  
     
        </>

    )
}

