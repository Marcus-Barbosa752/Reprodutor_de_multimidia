import PlayMusicIco from "../Icons/Play.png"

function Music({ Nome, Capa }) {
    return (
        <div className="CardMusic">
            <img src={Capa} className="CapaMusic" alt="Capa da musica"/>

            <section className="InfoCardInfo">
                <h3>{Nome}</h3>
                <img className="IconePlay" width={10} src={PlayMusicIco} alt="Icone de play"/>
            </section>
        </div>
    )
}

export default Music