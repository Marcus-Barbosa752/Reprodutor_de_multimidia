import Style from "./Style.css"
import Logo from "../Images/Logo.png"
import Nav from "./Nav"

function Header() {
    return (
        <>
            <header>
                <div className="ContainerLogo">
                    <img src={Logo} alt="Logo"/>
                    <h4>ChirpSync</h4>
                </div>
                
                <Nav />
            </header>
        </>
    )
}

export default Header