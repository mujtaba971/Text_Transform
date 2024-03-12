import React, {useState} from 'react'
// import PropTypes from 'prop-types';

export default function TextFrom(props) {
  const handleUpClick = () => {
    // eslint-disable-next-line
    // console.log("Uppercase was Clicked");
    setText("You have clicked on handleUpClick" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted To UpperCase","success");
  }
  const handleLoClick = () => {
    // console.log("Lowercase was Clicked");
    setText("You have clicked on handleLoClick" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted To LowerCase","success");
  }
  const handleClearClick = () => {
  //  console.log("Delete was Clicked");
    setText("You have clicked on Delete");
    let newText = " ";
    setText(newText);
    props.showAlert("Your Text is Deleted","success");
  }

  const handleCopyClick = () => {
    // console.log("Copy was Clicked");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your Text is Copy","success");
   }

  //  const handleSpaceClick = () => {
  //   console.log("Delete was Clicked");
  //   setText(prevText => prevText.trim()); // Remove extra spaces from the text
  // }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>

    <div className='container'>
        <h1><span className='bg-primary rounded-3'>{props.heading}</span></h1>

    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    <button type="button" className="btn btn-danger" onClick={handleClearClick}>Delete Text </button> 
    <button type="button" className="btn btn-danger mx-3" onClick={handleCopyClick}>Copy Text </button> 
    {/* <button type="button" className="btn btn-danger mx-3" onClick={handleSpaceClick}>Space </button> */}
    
      
    </div>

    <div className='container my-3' >
      <h1 ><span className="bg-info rounded-3">Your Text Summary</span></h1>
      <p style = {{backgroundColor: props.mode==='dark'?'grey':'white'}}>{text.split(" ").filter((element)=>{return-element.lenght!==0}).length} Total Words and {text.length} Total Characters</p>
      <p  style = {{backgroundColor: props.mode==='dark'?'grey':'white'}}>{0.008 * text.split(" ").length }  <span>Minutes Read</span></p>
      <h2><span className="bg-danger rounded-3" >Enter Text To Preview</span></h2>
      <p style = {{backgroundColor: props.mode==='dark'?'grey':'white'}}>{text}</p>
    </div>

    </>
  )
}
// TextFrom.PropTypes = {heading: propTypes.string.isRequired}
