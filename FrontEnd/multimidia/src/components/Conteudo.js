import Style from "./Style.css"
import MobileIcon from "../Icons/Mobile.png"
import Slideshow from "./Slideshow"
import Diretorios from "./Diretorios"
import Music from "./Music"
import Video from "./Video"

const FoldersUser = [
    {Nome: "Nome 1", Qtd: 12},
    {Nome: "Nome 2", Qtd: 9},
    {Nome: "Nome 3", Qtd: 5},
    {Nome: "Nome 4", Qtd: 5},
]
const CardMusic = [
    {Nome: "Musica 1", Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Musica 2", Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Musica 3", Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Musica 4", Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
]
const CardVideo = [
    {Nome: "Video 1", Categorias: ["Corrida", "Ação"], Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Video 2", Categorias: ["Corrida", "Ação"], Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Video 3", Categorias: ["Corrida", "Ação"], Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"},
    {Nome: "Video 4", Categorias: ["Corrida", "Ação"], Capa: "https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp"}
]

function Conteudo() {
    return (
        <div className="Conteudo">
            <section className="Banner">
                <div className="Top">
                    <>
                        <input type="text" id="InputSearchHome" placeholder="Pesquisar"/>
                    </>

                    <section className="InfoUserHome">
                        <div className="InsertFotoeNome">
                            <img className="InsertFotoHome" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Perfil do usuario"/>
                            <span>Marcus Barbosa</span>
                        </div>
                        <img className="Phone" src={MobileIcon} alt="Icone de um celular"/>
                    </section>
                </div>

                <Slideshow/>
            </section>
            
            <h4>Diretorios</h4>
            <section className="SectionDiretoriosHome">
                {FoldersUser.map(Item => <Diretorios Nome={Item.Nome} QtdArquivos={Item.Qtd}/>)}
            </section>

            <h4>Musicas</h4>
            <section className="SectionMusicHome">
                {CardMusic.map(Item => <Music Nome={Item.Nome} Capa={Item.Capa}/>)}
            </section>

            <h4>Videos</h4>
            <section className="SectionVideoHome">
                {CardVideo.map((Item, index) => <Video key={index} Nome={Item.Nome} Categorias={Item.Categorias} Capa={Item.Capa} />)}
            </section>
        </div>
    )
}

export default Conteudo