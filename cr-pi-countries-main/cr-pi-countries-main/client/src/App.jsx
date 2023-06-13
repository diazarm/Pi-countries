//import './App.css'
import { Route, Routes } from "react-router-dom"
import {Home, Landing, Form, Detail} from "./main"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/detail" element={<Detail/>}/>
     </Routes>
    </div>
    )
}

export default App
