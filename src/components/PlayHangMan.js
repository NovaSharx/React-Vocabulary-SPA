import * as Mui from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchResult } from '../SearchAPIHelper'

export default function PlayHangMan(props) {

    const randomWord = props.randomWord.toUpperCase()
    const randomWordArray = randomWord.split('')

    let [blankArray, setBlankArray] = useState(randomWordArray.map(() => ' '))
    let [score, setScore] = useState(0)
    let [hangmanFrame, setHangmanFrame] = useState(0)

    const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    let [wordDefinition, setWordDefinition] = useState('')

    useEffect(() => {
        fetchResult(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
            .then(result => {
                setWordDefinition(`"${result[0].meanings[0].definitions[0].definition}"`)
            })
    }, [randomWord])

    useEffect(() => {
        if (hangmanFrame >= 6) {
            console.log('YOU LOST! D:')
        }
    }, [hangmanFrame, score])

    const placeBlanks = randomWordArray.map((letter, index) => {
        return (
            <Mui.Box key={index} sx={{ minWidth: 20, minHeight: 20, borderBottom: 'solid 2px white' }}>
                <Mui.Typography>
                    {blankArray[index]}
                </Mui.Typography>
            </Mui.Box>
        )
    })

    const placeAlphabetKeys = alphabetArray.map((letter, index) => {
        return (
            <Mui.Button key={index} variant='outlined' color='inherit' sx={{ margin: 1 }} onClick={(e) => { checkLetter(letter, e.target) }}>
                {letter}
            </Mui.Button>
        )
    })

    const checkLetter = (input, button) => {
        button.remove()
        if (randomWordArray.includes(input)) {
            setScore(score + 1)
            revealLetter(input)
        } else {
            setHangmanFrame(hangmanFrame + 1)
            console.log(`${input} is not in this word...`)
        }
    }

    const revealLetter = (input) => {
        let indexArray = []
        randomWordArray.forEach((letter, index) => {
            if (letter === input) {
                indexArray.push(index)
            }
        })
        let newBlankArray = blankArray
        for (const index of indexArray) {
            newBlankArray[index] = input
        }
        setBlankArray(newBlankArray)
    }

    return (
        <Mui.Box sx={{ margin: 2, padding: 2, border: 'solid 1px white', borderRadius: 3, display: 'flex', justifyContent: 'center' }}>
            <Mui.Stack spacing={2}>
                {/* {randomWord} */}
                <Mui.CardMedia component='img' height='500' image={'/hangman_' + hangmanFrame + '.svg'} alt='hangman image' />
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