import { useEffect, useState } from "react"
import SearchBar from './SearchBar'
import { fetchResult } from '../SearchAPIHelper'
import DictionaryResults from "./DictionaryResults"
import * as Mui from '@mui/material'
import Error404 from "./Error404"

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
                <>
                    {data.Error ? <Error404 /> : <DictionaryResults data={data} />}
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
            <Mui.Typography variant='h2'>DICTIONARY</Mui.Typography>
            <SearchBar handleSearch={handleSearch} />
            {showDefinition()}
        </div>
    )
}