import { BrowserRouter } from 'react-router-dom'
import RoutesWrapper from './Routes/Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css'


function App() {
  return (
    <BrowserRouter>
        <RoutesWrapper />
    </BrowserRouter>
  )
}
export default App
