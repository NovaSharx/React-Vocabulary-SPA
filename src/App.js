import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import * as Mui from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import Dictionary from './components/Dictionary';
import Thesaurus from './components/Thesaurus';
import HangMan from './components/HangMan';

function App() {
  return (
    <div className="App">
      <Router>
        <Mui.AppBar position='static'>
          <Mui.Toolbar>
            <Mui.IconButton size="large" color='inherit' edge='start' aria-label='app logo'>
              <AutoStoriesIcon />
            </Mui.IconButton>
            <Mui.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VOCABULARY APP
            </Mui.Typography>
            <Mui.Stack direction="row" spacing={2}>
              <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Mui.Button color='inherit'>Dictionary</Mui.Button>
              </Link>
              <Link to='/thesaurus' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Mui.Button color='inherit'>Thesaurus</Mui.Button>
              </Link>
              <Link to='/hangman' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Mui.Button color='inherit'>HangMan</Mui.Button>
              </Link>
            </Mui.Stack>
          </Mui.Toolbar>
        </Mui.AppBar>

        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/thesaurus" element={<Thesaurus />} />
          <Route path="/hangman" element={<HangMan />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;
