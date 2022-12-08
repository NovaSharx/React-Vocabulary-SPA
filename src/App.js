import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import * as Mui from '@mui/material';

function App() {
  return (
    <div className="App">
      <Mui.Tabs centered>
  <Mui.Tab label="Item One" />
  <Mui.Tab label="Item Two" />
  <Mui.Tab label="Item Three" />
</Mui.Tabs>
    </div>
  )
}

export default App;
