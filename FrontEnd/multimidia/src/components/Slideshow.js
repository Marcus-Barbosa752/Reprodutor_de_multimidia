import PlayBannerIco from "../Icons/Play.png"
import InfoBannerIco from "../Icons/Info.png"

function Slideshow() {
    return (
        <div className="Slider">
            <div className="Imagens">
                <section className="Principal">
                    <img className="FotoPrincipalSlider" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Foto principal do slider"/>
                </section>

                <section className="Proximo">
                    <h4>Nome do album ou musica</h4>

                    <div className="InsertProxImagert">
                        <img className="FotoPrincipalSlider" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Foto principal do slider"/>
                        <img className="FotoPrincipalSlider" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Foto principal do slider"/>
                        <img className="FotoPrincipalSlider" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Foto principal do slider"/>
                        <img className="FotoPrincipalSlider" src="https://wallpapers.com/images/high/best-profile-pictures-amip1x7pglgg1xpt.webp" alt="Foto principal do slider"/>
                    </div>
                </section>

            </div>

            <div className="Controles">
                <button><img src={PlayBannerIco} alt="Icone de play"/></button>
                <button><img src={InfoBannerIco} alt="Icone de sobre"/></button>
            </div>
        </div>
    )
}

export default Slideshow