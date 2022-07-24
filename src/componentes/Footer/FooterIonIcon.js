

export default function FooterIonIcon({ nomeIcone, nomeClasse, numero}){
    return(
        <>
            <ion-icon className={nomeClasse[numero]} name={nomeIcone} ></ion-icon>
        </>
    )
}