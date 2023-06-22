import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import SearchBar from './Components/SearchBar/SearchBar'
import ButtonPage from './Components/ButtonPage/ButtonPage'
import SearchResults from './Components/SearchResults/SearchResults'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [offset, setOffset] = useState(10)
  const [searchResults, setSearchResults] = useState(null)

  const fetchData = async () => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`)
    const data = await response.json()
    setSearchResults(data.query.search)
  }

  useEffect(() => {
    fetchData()
  }, [searchQuery, offset])

  return (
    <> 
    <div className="header">
      <h1>Search through Wikipedia</h1>
      <SearchBar setSearchQuery={ setSearchQuery }/>
    </div>

      <SearchResults searchResults={ searchResults } />

      {
        searchResults === null ? '' :
          <div className="pagination">
          <ButtonPage offset={offset} setOffset={setOffset} label="Previous" value={-10}/>
          Page {offset/10}
          <ButtonPage offset={offset} setOffset={setOffset} label="Next" value={10}/>
          </div>
      }
    </>
  )
}

export default App
