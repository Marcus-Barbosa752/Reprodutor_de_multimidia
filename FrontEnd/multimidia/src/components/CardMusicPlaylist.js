import PlayMusicIco from "../Icons/Play.png"

function CardMusicas({ Capa, Nome, AlbumNome, Tempo }) {
    return (
        <div className="CardMusicasPlaylist">
            <img src={Capa} alt="Capa de musica" />

            <div className="InfoCardPlaylist">
                <div className="Left">
                    <h4>{Nome}</h4>
                    <span>{AlbumNome}</span>
                </div>

                <span>{Tempo}</span>
            </div>

            <img width={30} src={PlayMusicIco} alt="Icone de play" />
        </div>
    )
}

export default CardMusicas
