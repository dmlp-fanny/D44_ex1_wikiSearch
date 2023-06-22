import './SearchResults.scss'

export default function SearchResults ({ searchResults }) {
    return (
        <>
        {
            searchResults === null 
            ?
            ''
            :
            <div className="results"> 
            <h2>Results</h2>
            { searchResults.map(result => 
                <div className="result" key={result.pageid}><strong>{result.title}</strong>
                    <br/>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    <br />
                    <div className="link"><a href={'https://en.wikipedia.org/wiki/'+ result.title} target='_blank' rel="noopener noreferrer">Check the Wiki</a></div>
                </div>
                )
            }
            </div>
        }
        </>
    )
        
}