import Butterfly from '/Butterfly.jpg'

const Now = new Date().toLocaleTimeString();

export default function Header() {
    return (
        <header> 
        <img src={Butterfly} className="logo Butterfly" alt="Butterfly" />
        <h3>shtrv</h3>
        <span>{Now}</span>
        </header>
    )
}