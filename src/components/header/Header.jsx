import { useState } from 'react';
import Butterfly from '/Butterfly.jpg'


export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
        <header> 
        <img src={Butterfly} className="logo Butterfly" alt="Butterfly" />
        <h3>shtrv</h3>
        <span>{now.toLocaleTimeString()}</span>
        </header>
    )
}
