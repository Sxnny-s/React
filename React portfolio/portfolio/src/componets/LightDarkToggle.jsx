import { useState, useEffect } from "react";

// import React from 'react'

const Toggle = ({mode,onClick}) => {
    return <button onClick={onClick}>Toggle to {mode}</button>
}

const LightDarkToggle = () => {
    const [mode, setMode] = useState('light')

    useEffect(() => {
        document.body.className = mode;
      }, [mode]);
    
    const switchMode = () => {
        setMode((oldMode) => (oldMode === 'light' ? 'dark' : 'light'))
    }


  return (
    <>
    <div>
        <Toggle onClick={switchMode} mode={mode === 'light' ? 'Dark' : 'Light'}/>
    </div>
    </>
  )
}

export default LightDarkToggle