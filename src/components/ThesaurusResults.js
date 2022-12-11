import * as Mui from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material';

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
                    <Mui.Divider />
                    <Mui.ListItem component="div" disablePadding>
                        <Mui.ListItemButton>
                            <Mui.ListItemText primary={`${index + 1}: ${word}`} />
                        </Mui.ListItemButton>
                        <Mui.Divider variant='middle' />
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
                    <Mui.Typography variant='h2'>
                        {results.word}
                    </Mui.Typography>
                    <Mui.Stack direction='row'>
                        <Mui.Box sx={{ flexGrow: 1, width: '100%' }}>
                            <Mui.Typography variant='h5'>SYNONYMS</Mui.Typography>
                            {renderResultList(results.synonyms)}
                        </Mui.Box>
                        <Mui.Divider orientation="vertical" variant='middle' flexItem />
                        <Mui.Box sx={{ flexGrow: 1, width: '100%' }}>
                            <Mui.Typography variant='h5'>ANTONYMS</Mui.Typography>
                            {renderResultList(results.antonyms)}
                        </Mui.Box>
                    </Mui.Stack>
                </Mui.CardContent>
            </Mui.Card>
        </ThemeProvider>
    )

}