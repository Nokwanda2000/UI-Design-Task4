import { useState } from 'react'
import Counter from './components/counter';
import Nav from './components/nav';
import Pictures from './components/pictures';
import Sodas from './components/sodas';
import Text from './components/text';
import './index.css'



function App() {
    return[

        <div id="main" style={{
          backgroundColor:"lightgrey",
            border: "solid 1px ",
            display: "flex", 
            flexDirection:"column",
            justifyContent:"center", 
            alignItems:"center",
            height:"100vh"}}>



        
        
        {/* <section><Counter/></section>, */}
        <section><Nav/></section>,
        <section><Pictures/></section>,
        <section><Sodas/></section>,
        <section><Text/></section>
        </div>
    ]
        
    
    
  
}

export default App
