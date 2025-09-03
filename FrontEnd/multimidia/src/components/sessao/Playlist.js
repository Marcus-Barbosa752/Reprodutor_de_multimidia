import sessao from "./sessao.css"
import CardAlbum from "../CardAlbum"
import CardMusicas from "../CardMusicPlaylist"
import AlbumPlaylist from "../AlbumPlaylist"

const NovosAlbums = [
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 1", Estilo: "Eletrônica" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 2", Estilo: "Eletrônica" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 3", Estilo: "Eletrônica" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 4", Estilo: "Eletrônica" }
]

const Musicas = [
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Música 1", Estilo: "Eletrônica", Tempo: "10:10" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Música 2", Estilo: "Eletrônica", Tempo: "10:10" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Música 3", Estilo: "Eletrônica", Tempo: "10:10" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Música 4", Estilo: "Eletrônica", Tempo: "10:10" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Música 5", Estilo: "Eletrônica", Tempo: "10:10" },    
]

const Albums = [
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 1" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 2" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 3" },
    { Capa: "https://cdn.venngage.com/template/thumbnail/small/679bf7bb-2170-4d54-9485-240baa4ae33c.webp", Nome: "Playlist 4" }
]

function Playlist() {
    return (
        <section className="PlaylistSession">
            <header>
                <input type="text" placeholder="Pesquisar por nome, playlist ou álbum" />
            </header>

            <h3>Novos álbuns</h3>
            <section className="CardsNovosAlbums">
                {NovosAlbums.map((Item, index) =>
                    <CardAlbum key={index} Capa={Item.Capa} Nome={Item.Nome} Estilo={Item.Estilo} />
                )}
            </section>

            <section className="MusicasPlaylists">
                <div className="Musicas">
                    <h4>Músicas</h4>

                    <section className="InsertMusicas">
                        {Musicas.map((Item, index) =>
                            <CardMusicas
                                key={index}
                                Capa={Item.Capa}
                                Nome={Item.Nome}
                                AlbumNome={Item.Estilo}
                                Tempo={Item.Tempo}
                            />
                        )}
                    </section>
                </div>

                <div className="PlayLists">
                    <h4>Playlist</h4>

                    <section className="InsertPlaylist">
                        {Albums.map((Item, index) =>
                            <AlbumPlaylist key={index} Capa={Item.Capa} Nome={Item.Nome} />
                        )}
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Playlist
