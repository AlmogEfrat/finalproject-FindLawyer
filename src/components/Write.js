import React, { useState } from 'react'
import axios from 'axios'
import React from 'react'

function Write() {
  let [inputValue, setInputValue] = useState('')
  const saveData = async () => {
    try {
      await axios.post('http://localhost:3000/writetodatabase', {
        content: inputValue,
      })
      console.log('Data:', inputValue)
      alert('Data saved:', inputValue)
      const dataFromServer = response.data.message
      setServerData(dataFromServer)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }
  return (
    <div>
      <input
        type='string'
        placeholder='enter something'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={saveData}> save data to mongodb</button>
    </div>
  )
}

export default Write
