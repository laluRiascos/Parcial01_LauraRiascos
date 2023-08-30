import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Comp1 from './Comp1.jsx'
import Comp2 from './Comp2.jsx'
import Comp3 from './Comp3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Comp1/>
    <Comp2/>
    <Comp3/>
  </React.StrictMode>,
)
