import { useState } from "react" 
import PlayIco from "../Icons/DarkPlay.png"

function Video({ Nome, Categorias, Capa }) {
    function StartVideo() {
        alert(`Nome: ${Nome}`)
        window.open("https://www.youtube.com", "_blank")
    }

    return (
        <div className="CardVideo">
            <img className="CapaVideo" src={Capa} alt={`Capa do vídeo ${Nome}`} />
            
            <div className="InfoVideo">
                <h3>{Nome}</h3>

                <div className="CategoriasVideo">
                    {Categorias.map((Cat, index) => <span key={index} className="CategoriaTag">{Cat}</span>)}
                </div>

                <img onClick={StartVideo} className="IcoPlay" src={PlayIco} alt="Icone de play"/>
            </div>
        </div>
    )
}

export default Video