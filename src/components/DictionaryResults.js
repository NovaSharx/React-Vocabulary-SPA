import * as Mui from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'

export default function DictionaryResults(props) {

    const data = props.data[0]

    const renderDefinitions = data.meanings.map((meaning, index) => {
        return (
            <Mui.Stack spacing={2} key={index}>
                <Mui.Divider textAlign='left'>
                    <Mui.Typography variant='h5'>
                        {meaning.partOfSpeech.toUpperCase()}
                    </Mui.Typography>
                </Mui.Divider>
                <Mui.Stack spacing={3}>
                    {meaning.definitions.map((definition, index) => {
                        return (
                            <Mui.Box key={index}>
                                <Mui.Typography align='left'>{index + 1}: {definition.definition}</Mui.Typography>
                                <Mui.Typography align='left' color='text.secondary'>{definition.example ? `Example: "${definition.example}"` : ''}</Mui.Typography>
                            </Mui.Box>
                        )
                    })}
                </Mui.Stack>
            </Mui.Stack>
        )
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Mui.Card sx={{ minWidth: 300, minHeight: 300, margin: 5, padding: 5 }}>
                <Mui.CardContent>
                    <Mui.Typography variant='h2'>
                        {data.word}
                    </Mui.Typography>
                    <Mui.Typography color='text.secondary'>
                        {data.phonetic}
                    </Mui.Typography>
                    <Mui.Stack spacing={5}>
                        {renderDefinitions}
                    </Mui.Stack>
                </Mui.CardContent>
            </Mui.Card>
        </ThemeProvider>
    )

}