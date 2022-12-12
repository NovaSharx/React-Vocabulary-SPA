import * as Mui from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchResult } from '../SearchAPIHelper'

export default function PlayHangMan(props) {

    const randomWord = props.randomWord.toUpperCase()
    const randomWordArray = randomWord.split('')
    const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let [wordDefinition, setWordDefinition] = useState('')

    useEffect(() => {
        fetchResult(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
            .then(result => {
                setWordDefinition(`"${result[0].meanings[0].definitions[0].definition}"`)
            })
    }, [randomWord])

    const placeBlanks = randomWordArray.map((letter, index) => {
        return (
            <Mui.Box key={index} sx={{ minWidth: 20, minHeight: 20, borderBottom: 'solid 2px white' }}>
                <Mui.Typography sx={{ opacity: '25%' }}>
                    {letter}
                </Mui.Typography>
            </Mui.Box>
        )
    })

    const placeAlphabetKeys = alphabetArray.map((letter, index) => {
        return (
            <Mui.Button key={index} variant='outlined' color='inherit' sx={{ margin: 1 }} onClick={() => submitLetter(letter, this)}>
                {letter}
            </Mui.Button>
        )
    })

    const submitLetter = (letter) => {

    }

    return (
        <Mui.Box sx={{ margin: 2, padding: 2, border: 'solid 1px white', borderRadius: 3, display: 'flex', justifyContent: 'center' }}>
            <Mui.Stack spacing={2}>
                {randomWord}
                <Mui.Typography>
                    {wordDefinition}
                </Mui.Typography>
                <Mui.Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {placeBlanks}
                </Mui.Stack>
                <Mui.Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                    {placeAlphabetKeys}
                </Mui.Box>
            </Mui.Stack>
        </Mui.Box>
    )
}
                // <Mui.Box>
                //     <Mui.TextField label='Letter' inputProps={{ maxLength: 1, pattern: /^[a-zA-Z]+$/ }} size='small' onChange={(e) => setInput(e.target.value)} />
                //     <Mui.Button variant='outlined' color='inherit' onClick={() => submitInput()}>Enter</Mui.Button>
                // </Mui.Box>