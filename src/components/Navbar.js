import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import * as Mui from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


function Navbar() {
    return (
        <Mui.AppBar position='static'>
            <Mui.Toolbar>
                <Mui.IconButton size="large" color='inherit' edge='start' aria-label='app logo'>
                    <AutoStoriesIcon />
                </Mui.IconButton>
                <Mui.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    VOCABULARY APP
                </Mui.Typography>
                <Mui.Stack direction="row" spacing={2}>
                    <Link to='/'>
                        <Mui.Button color='inherit'>Dictionary</Mui.Button>
                    </Link>
                    <Link to='/thesaurus'>
                        <Mui.Button color='inherit'>Thesaurus</Mui.Button>
                    </Link>
                    <Mui.Button color='inherit'>HangMan</Mui.Button>
                </Mui.Stack>
            </Mui.Toolbar>
        </Mui.AppBar>
    )
}

export default Navbar;