import * as Mui from '@mui/material'

export default function PlayHangMan(props) {

    const randomWord = props.randomWord
    const randomWordArray = randomWord.split('')

    const placeBlanks = randomWordArray.map((letter, index) => {
        return (
            <Mui.Box key={index}>
                <Mui.Typography>
                    {letter.toUpperCase()}
                </Mui.Typography>
            </Mui.Box>
        )
    })

    return (
        <Mui.Box sx={{ margin: 2, padding: 2, border: 'solid 1px white', borderRadius: 3, display: 'flex', justifyContent: 'center' }}>
            <Mui.Stack>
                <Mui.Stack direction='row' spacing={2}>
                    {placeBlanks}
                </Mui.Stack>
                {randomWord}
            </Mui.Stack>
        </Mui.Box>
    )
}