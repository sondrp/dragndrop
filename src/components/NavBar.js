import logo from "../img/logo2.PNG"
import "../App.css"

export default function NavBar() {


    return (
        <div className="navbar">
            <div><img src={logo} alt="logo" className="logo"/></div>
            <div className="name">PEDERSEN SERVICES</div>
            <div className="blue">HOME</div>
            <div className="blue">CONTACT</div>
        </div>
    )
}