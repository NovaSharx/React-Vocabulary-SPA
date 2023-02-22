import * as Mui from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'

export default function ThesaurusResults(props) {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    const results = props.data

    const renderResultList = (array) => {
        const output = array.map((word, index) => {
            return (
                <div key={index}>
                    <Mui.ListItem component="div" disablePadding>
                        <Mui.ListItemText primary={`${index + 1}: ${word}`} />
                    </Mui.ListItem>
                </div>
            )
        })
        return output
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Mui.Card sx={{ minWidth: 300, minHeight: 300, margin: 5, padding: 5 }}>
                <Mui.CardContent>
                    <Mui.Stack spacing={3}>
                        <Mui.Typography variant='h2'>
                            {results.word}
                        </Mui.Typography>
                        <Mui.Stack direction='row' spacing={5}>
                            <Mui.Stack sx={{ flexGrow: 1, width: '100%' }} spacing={2}>
                                <Mui.Typography variant='h5'>SYNONYMS</Mui.Typography>
                                <Mui.Divider />
                                {renderResultList(results.synonyms)}
                            </Mui.Stack>
                            <Mui.Divider orientation="vertical" variant='middle' flexItem />
                            <Mui.Stack sx={{ flexGrow: 1, width: '100%' }} spacing={2}>
                                <Mui.Typography variant='h5'>ANTONYMS</Mui.Typography>
                                <Mui.Divider />
                                {renderResultList(results.antonyms)}
                            </Mui.Stack>
                        </Mui.Stack>
                    </Mui.Stack>
                </Mui.CardContent>
            </Mui.Card>
        </ThemeProvider>
    )

}