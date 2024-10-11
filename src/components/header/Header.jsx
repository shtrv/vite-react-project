import "./Header.css";
import Butterfly from "/Butterfly.jpg";

export default function Header() {


  return (
    <header>
      <img src={Butterfly} className="logo Butterfly" alt="Butterfly" />
      <h3>shtrv</h3>
    </header>
  );
}
