import React, { useState } from 'react'

export default function TextForm({heading, mode}) {
  const handleup = () => {
    //console.log('You have change to uppercase')
    let newtext = text.toUpperCase()
    setText(newtext)
  }

  const handlelow = () => {
    //console.log('You have change to Lowercase')
    let newtext = text.toLowerCase()
    setText(newtext)
  }
 
  const handleclear = () => {
    let newtext = ' '
    setText(newtext)
  }

  const handlecapital = () => {
    const arr = text.split(' ')

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const newtext = arr.join(' ')
    setText(newtext)
  }
  const handlecopy = () => {
    var copy1 = document.getElementById('myBox')
    copy1.select()
    navigator.clipboard.writeText(copy1.value)
  }

  const handleextraspace = () => {
    let newtext1 = text.split(/[ ]+/)
    setText(newtext1.join(' '))
  }

  const changetextarea = (event) => {
    //console.log('on change')
    setText(event.target.value)
  }
  const mystyle1 = {
    color: mode === 'dark' ? 'white' : 'black',
  }

  const mystyle2 ={
    backgroundColor: mode === 'dark' ? '#0c2056' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
  }

  const [text, setText] = useState('Enter Text Here')

  return (
    <>
      <div className="container" style={mystyle1}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="myBox"
            rows="8"
            value={text}
            onChange={changetextarea}
            style={mystyle2}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleup}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelow}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclear}>
          Clear all the Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecapital}>
          Capitalize case
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleextraspace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={mystyle1}>
        <h1>Your Text summary</h1>
        <p>
          {text.split(' ').length} Words and {text.length} Chracters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes To Read This Text</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
