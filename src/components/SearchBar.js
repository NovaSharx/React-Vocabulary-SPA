import { useState } from "react"
import * as Mui from '@mui/material'

export default function SearchBar(props) {

    let [input, setInput] = useState('')

    return (
        <form id='searchform' onSubmit={(e) => props.handleSearch(e, input)}>
            <Mui.TextField label="Search term here" variant="outlined" size='small' onChange={(e) => setInput(e.target.value)}></Mui.TextField>
            <Mui.Button variant='contained' type='submit' form='searchform'>Search</Mui.Button>
        </form>
    )

}