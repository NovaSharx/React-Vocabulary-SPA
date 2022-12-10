import { useEffect, useState } from "react"
import SearchBar from './SearchBar'
import { fetchResult } from '../SearchAPIHelper';
import ShowDefinition from "./ShowDefinition";

export default function Dictionary() {

    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState(null)

    useEffect(() => {
        if (searchTerm) {
            let API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
            fetchResult(API_URL)
                .then(result => {
                    setData(result)
                    console.log(result)
                })
        }
    }, [searchTerm])

    const showDefinition = () => {
        if (data) {
            return (
                <>
                    <ShowDefinition data={data} />
                </>
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