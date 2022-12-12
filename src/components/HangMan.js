import * as Mui from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction';
import CasinoIcon from '@mui/icons-material/Casino';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import PlayHangMan from './PlayHangMan';
import { fetchResult } from '../SearchAPIHelper';

export default function HangMan() {

    let [randomWord, setRandomWord] = useState(null)

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    const generateRandomWord = () => {
        fetchResult(`https://api.api-ninjas.com/v1/randomword?noun`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'MBs9NpWm2xG1WNrZStb6Lw==gzk4zr4cdHotbKH3',
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                setRandomWord(result.word)
            })
    }

    const renderGame = () => {
        if (randomWord) {
            return (
                <PlayHangMan key={randomWord} randomWord={randomWord} />
            )
        }
    }

    return (
        <div>
            <Mui.Typography variant='h2'>HANGMAN</Mui.Typography>
            <Mui.Typography variant='h6' color='text.secondary'>
                <ConstructionIcon />
                WIP
            </Mui.Typography>
            <ThemeProvider theme={darkTheme}>
                <Mui.Card sx={{ margin: 'auto', maxWidth: 1000 }}>
                    <Mui.CardContent>
                        <Mui.Button variant='outlined' onClick={() => { generateRandomWord() }}>
                            <CasinoIcon /> Generate Random Word
                        </Mui.Button>
                        {renderGame()}
                    </Mui.CardContent>
                </Mui.Card>
            </ThemeProvider>
        </div>
    )

}