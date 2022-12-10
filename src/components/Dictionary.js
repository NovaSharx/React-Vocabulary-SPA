import { useEffect, useState } from "react"
import SearchBar from './SearchBar'
import { fetchResult } from '../SearchAPIHelper';

export default function Dictionary() {

    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState(null)

    useEffect(() => {
        if (searchTerm) {
            let API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
            fetchResult(API_URL)
                .then(result => {
                    setData(result)
                })
        }
    }, [searchTerm])

    const showDefinition = () => {
        if (data) {
            return (
                console.log(data)
            )
        }
    }

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    return (
        <div>
            <h1>Dictionary</h1>
            <SearchBar handleSearch={handleSearch} />
            {showDefinition()}
        </div>
    )
}