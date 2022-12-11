import * as Mui from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material';

export default function DictionaryResults(props) {

    // ***Try using an accordion for meanings array ***

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    const definition = props.data[0]

    return (
        <ThemeProvider theme={darkTheme}>
            <Mui.Card sx={{ minWidth: 300, minHeight: 300, margin: 5, padding: 5 }}>
                <Mui.CardContent>
                        <Mui.Typography variant='h2'>
                            {definition.word}
                        </Mui.Typography>
                        <Mui.Typography>
                            {definition.phonetic}
                        </Mui.Typography>
                    <Mui.Stack spacing={3}>
                        <Mui.Typography color='text.secondary'>
                            {definition.meanings[0].partOfSpeech}
                        </Mui.Typography>
                        <Mui.Typography>
                            {definition.meanings[0].definitions[0].definition}
                        </Mui.Typography>
                    </Mui.Stack>
                </Mui.CardContent>
            </Mui.Card>
        </ThemeProvider>
    )

}