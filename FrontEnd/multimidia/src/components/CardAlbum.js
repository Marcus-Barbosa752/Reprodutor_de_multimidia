function CardAlbum({ Capa, Nome, Estilo }) {
    return (
        <div className="CardPlayList">
            <img src={Capa} alt="Capa da playlist"/>
            <h4>{Nome}</h4>
            <span>{Estilo}</span>
        </div>
    )
}                                               

export default CardAlbum