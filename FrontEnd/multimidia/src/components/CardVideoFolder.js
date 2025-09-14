function CardVideoFolder({ Nome, QtdConteudo }) {
    return (
        <div className="CardMusicFolder">
            <div className="Left">
                <div className="IcoPasta"></div>
            </div>

            <div className="Info">
                <h4>{Nome} Videos</h4>
                <span>{QtdConteudo} {QtdConteudo === 1 ? "item" : "items"}</span>
            </div>
        </div>
    )
}

export default CardVideoFolder
