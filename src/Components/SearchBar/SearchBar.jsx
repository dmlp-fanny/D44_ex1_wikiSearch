import { useState } from "react"
import './SearchBar.scss'

export default function SearchBar({ setSearchQuery }) {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = () => {
        setSearchQuery(search)
    }

    return (
        <>
        <div className="search">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick} class="button-56" role="button">Search</button>
        </div>
        </>
    )
}