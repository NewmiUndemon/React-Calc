import { useState } from 'react'
import './App.css'
import Buttons from './Buttons.jsx'
import Inputs from './Inputs.jsx'

function App() {
    const [outputt, setOutputt] = useState(0)
    const changeInput = (event) => {
    }

    return (
        <>
            <Buttons />
            <Inputs />
            <input className='output' id='inputt' type="number">{outputt}</input>
        </>
    )
}

export default App
