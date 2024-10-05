export default function Card({ title, text }) {
    return (
        <li>
            <p>
                <strong>{title}</strong> {text}
            </p>
        </li>
    )
}