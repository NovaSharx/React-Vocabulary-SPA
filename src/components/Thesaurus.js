import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import { fetchResult } from '../SearchAPIHelper'
import * as Mui from '@mui/material'
import ThesaurusResults from "./ThesaurusResults"

export default function Thesaurus() {

    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState(null)

    useEffect(() => {
        if (searchTerm) {
            fetchResult(`https://api.api-ninjas.com/v1/thesaurus?word=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'MBs9NpWm2xG1WNrZStb6Lw==gzk4zr4cdHotbKH3',
                    'Content-Type': 'application/json'
                }
            })
                .then(result => {
                    setData(result)
                })
        }
    }, [searchTerm])

    const showResults = () => {
        if (data) {
            return (
                <ThesaurusResults data={data} />
            )
        }
    }

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    return (
        <div>
            <Mui.Typography variant='h2'>THESAURUS</Mui.Typography>
            <SearchBar handleSearch={handleSearch} />
            {showResults()}
        </div>
    )

}