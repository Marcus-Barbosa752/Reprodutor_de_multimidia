import PastaIco from "../Images/Pasta.png"

function CardPastas({ Nome, Index }) {
    return (
        <div className="CardPastas">
            <img src={PastaIco}/>
            <h4>{Nome} {Index}</h4>
        </div>
    )
}

export default CardPastas
