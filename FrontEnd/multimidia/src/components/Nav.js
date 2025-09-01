import HomeIcon from "../Icons/Home.svg"
import PlaylistIcon from "../Icons/Playlist.svg"
import FolderIcon from "../Icons/Folder.svg"
import ConnectionIcon from "../Icons/Connection.svg"
import SettingIcon from "../Icons/Settings.svg"

function Nav() {
    return (
        <>
            <nav>
                <button><img src={HomeIcon} alt="Ícone de casa"/>Home</button>
                <button><img src={PlaylistIcon} alt="Ícone de lista de musicas"/>Playlist</button>
                <button><img src={FolderIcon} alt="Ícone de pastas"/>Pastas</button>
                <button><img src={ConnectionIcon} alt="Ícone de sala"/>Sala</button>
                <div className="IndicatorSession"></div>
            </nav>

            <div>
                <button><img src={SettingIcon} alt="Ícone de ajustes"/>Ajustes</button>
            </div>
        </>
    )
}

export default Nav
