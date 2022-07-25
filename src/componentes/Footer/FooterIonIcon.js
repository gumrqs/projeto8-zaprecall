

export default function FooterIonIcon({ nomeIcone, nomeClasse}){
    console.log(nomeClasse);
    return(
        <div className={nomeClasse}>
            <ion-icon name={nomeIcone}></ion-icon>
        </div>
    )
}