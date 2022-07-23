
export default function Pergunta({pergunta}){
    return (
        <>
            <div className="perguntas">
                <div className="estilos-perguntas">
                    <p>{pergunta}</p>
                <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}