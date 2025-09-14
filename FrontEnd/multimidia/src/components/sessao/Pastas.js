import sessao from "./sessao.css"
import FilterPastaIco from "../../Icons/Filter.png"
import CardPastas from "../CardPastas"
import CardMusicFolder from "../CardMusicFolder"
import CardVideoFolder from "../CardVideoFolder"

const PastaList = [
    {Nome: "Pasta"}, 
    {Nome: "Pasta"}, 
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"}
]

const PastaMusicVideoList = [
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"},
    {Nome: "Pasta"}
]

function Pastas() {
    return (
        <section className="PastasSession">
            <div className="HeaderPastas">
                <input type="text" id="InputSearchPasta" placeholder="Pesquisar por categoria"/>

                <div className="ContainerFilterPastas">
                    <div className="Left" id="IndicatorFilter">Todos</div>
                    <img src={FilterPastaIco} alt="Icone de filtro"/>
                </div>
            </div>

            <h4>Pastas</h4>
            <section className="InsertPastas">
                {PastaList.map((Item, Index) => <CardPastas Nome={Item.Nome} Index={++Index} />)}
            </section>

            <h4>Musicas</h4>
            <section className="InsertMusicas">
                {PastaMusicVideoList.map((Item, Index) => <CardMusicFolder Nome={Item.Nome} QtdConteudo={++Index}/>)}
            </section>

            <h4>Videos</h4>
            <section className="InsertMusicas">
                {PastaMusicVideoList.map((Item, Index) => <CardVideoFolder Nome={Item.Nome} QtdConteudo={++Index}/>)}
            </section>
        </section>
    )
}

export default Pastas
