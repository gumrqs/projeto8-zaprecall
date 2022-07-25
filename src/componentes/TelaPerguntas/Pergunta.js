import React from 'react'
import setinha from "./setinha.png"



export default function Pergunta({ questao, resposta, setEstiloFooter, numero, estiloFooter }){

    const [estadoDaPergunta, setEstadoDaPergunta]=React.useState("fechada");
    function mostrarQuestao(){
        if(estadoDaPergunta === "fechada"){ 
            setEstadoDaPergunta("aberta");
            
        }
        if(estadoDaPergunta==="aberta"){
            setEstadoDaPergunta("respostaVista")
        }
        if(estadoDaPergunta==="respostaVista"){
            setEstadoDaPergunta("")
        }
    }
    function responderQuestao(resposta){
        if(resposta==="errou"){
            setEstadoDaPergunta("vermelho");
            estiloFooter.push({nome:"close-circle", cor:"vermelho"});
        }

        if(resposta==="quase"){
            setEstadoDaPergunta("laranja");
            estiloFooter.push({nome:"help-circle", cor:"laranja"});
        }
        
        if(resposta==="acertou"){
            setEstadoDaPergunta("verde");
            estiloFooter.push({nome:"checkmark-circle", cor:"verde"});
        }
        setEstiloFooter([...estiloFooter]);
        }
    
    return (
        <> 
            {
                estadoDaPergunta==="fechada"
                ? 
                <div className="perguntas">
                    <div className="estilos-perguntas">
                        <p>Pergunta {numero}</p>
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
                    estadoDaPergunta ==="respostaVista"
                        ?
                    <div className='resposta-pergunta'>
                        <p>{resposta}</p>
                        <div className="opcoes">
                            <div className=  'nao-lembrei' onClick={()=>responderQuestao("errou")}>
                                <p>Não lembrei</p>
                            </div>
                            <div className='quase-nao-lembrei' onClick={()=>responderQuestao("quase")}>
                                <p>Quase não lembrei</p>
                            </div>
                            <div className='zap'onClick={()=>responderQuestao("acertou")}>
                                <p>zap!</p>
                            </div>
                        </div>
                    </div>
                :
                    estadoDaPergunta==="vermelho"
                    ?
                    <div className="perguntas">
                        <div className="estilos-perguntas-respondidas">
                            <p>Pergunta {numero}</p>
                        <div>
                        <ion-icon name="close-circle"></ion-icon>
                        </div>
                        </div>
                    </div>
                :
                    estadoDaPergunta ==="verde"
                    ?
                    <div className="perguntas">
                        <div className="estilos-perguntas-respondidas-verde">
                            <p>Pergunta {numero}</p>
                        <div>
                        <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        </div>
                    </div>
                : 
                    estadoDaPergunta==="laranja"
                        ?
                    <div className="perguntas">
                        <div className="estilos-perguntas-respondidas-laranja">
                            <p>Pergunta {numero}</p>
                        <div>
                        <ion-icon name="help-circle"></ion-icon>
                        </div>
                        </div>
                      </div>  
                      :<></>

                
            }  
     
        </>

    )
}

