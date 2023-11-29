'use client'
import React, { useState } from 'react'

function MyState() {
    const [state, setState] = useState('fran')

  return (
    <button onClick={()=> setState('hola')}>{state}</button>
  )
}

export default MyState