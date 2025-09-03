function AlbumPlaylist({ Capa, Nome }) {
    return (
        <div className="CardAlbum">
            <img width={40} src={Capa} alt="Capa de playlist"/>

            <div className="InfoName">
                <span>{Nome}</span>
            </div>
        </div>
    )
}

export default AlbumPlaylist