import './ButtonPage.scss'

export default function ButtonPage ({offset, setOffset, label, value}) {

    const handleClick = () => {
        setOffset(offset + value)
    }

    return (
        <button className="pageBtn" onClick={handleClick}>{ label }</button>
    )
}