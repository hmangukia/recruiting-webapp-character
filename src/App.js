import { useState } from 'react'
import './App.css'
import Skills from './Skills.js'
import Attributes from './Attributes.js'
import Classes from './Classes.js'

function App() {
  const [attributes, setAttributes] = useState({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  })

  return (
    <div className="App">
      <div className='container'>
        <Attributes attributes={attributes} setAttributes={setAttributes} />
        <Classes attributes={attributes} />
        <Skills attributes={attributes}/>
      </div>
    </div>
  )}

export default App
