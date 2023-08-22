import React, { useState } from 'react'

export default function Form(props) {
  // UPPERCASE CONVERTER-------------
  let Convertup = () => {
    let newtext = Text.toUpperCase()
    SetText(newtext);
    props.Showalert('Converted uppercase', 'success')
  }
  // LOWERCASE CONVERTER-------------
  let Convertuplow = () => {
    let newtext = Text.toLowerCase()
    SetText(newtext);
    props.Showalert('Converted Lowercase', 'success')
  }
  // REMOVE EXTRA SPACEES----------------
  let Removespaces = () => {
    let newtext=Text.split(/[ ]+/)
    SetText(newtext.join(' '))
    props.Showalert('Spaces Removed', 'success')
  }
   // CLEAR TEXT ----------------
  let Cleartext = () => {
    SetText('');
    props.Showalert('Clear Text', 'success')
  }
  // CAPITILIZE CONVERTER-------------
  let Convertcap = () => {
    let words = Text.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    SetText(words.join(' '));
    props.Showalert('Converted capitilze', 'success')
  }
  let handleOnChange = (event) => {
    SetText(event.target.value)
  }
  const [Text, SetText] = useState('');


  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
        <div className="mb-3">
          <h2>{props.title}</h2>
          <textarea className="form-control" rows="7" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <div className="container" style={{ display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',alignItems:'center'}}>
        <button disabled={Text.length===0} className={` btn text-white bg-primary`} style={{width:'140px'}} onClick={Convertup}>UpperCase</button>
        <button disabled={Text.length===0} className={` btn text-white bg-primary mx-2 my-1` }  onClick={Convertuplow} style={{width:'140px'}}>LowerCase</button>
        <button disabled={Text.length===0}className={`btn text-white bg-primary mx-2 my-1`} onClick={Convertcap}style={{width:'140px'}}>Capitilize Word</button>
        <button disabled={Text.length===0}className={`btn text-white bg-primary mx-2`} onClick={Removespaces}style={{width:'140px'}}>Remove Spaces</button>
        <button disabled={Text.length===0}className={`btn text-white bg-primary mx-2 my-1`} onClick={Cleartext}style={{width:'140px'}}>Clear ALL</button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Text Summary Here </h2>
        <p>{Text.split(/\s+/).filter(Text=>Text !=='').length} word and {Text.length} characters</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
     
    </>
  )
}

