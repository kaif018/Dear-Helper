import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log('Uppercase the element: ' + text);
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert('Text into Uppsercase',"sucsse")
     };
     const handleClick = () => {
        // console.log('Uppercase the element: ' + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert('Text into lowercase',"sucsse")
     };
     const handleclearClick = () => {
        // console.log('Uppercase the element: ' + text);
         let newText = "";
         setText(newText);
         props.showAlert('Text Clear',"sucsse")
     };
    const handleOnChange = (event) => {
        //console.log('on change');
        setText(event.target.value);
    };
    const handleCopyClick=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copy',"sucsse")
    }
    const handleSpaceClick = () => {
        // Assuming text is part of the component state
        let newText = text.split(/[ ]+/); // Use regex to split by one or more spaces
        setText(newText.join(" ")); // Join the text without spaces
        props.showAlert('Space',"sucsse")
    };
    
    return (
      <><>  <div>
            <h1 style={{color:props.mode==="dark"?'white':'#011533'}}>My fisrt Text </h1>
            <div className="mb-3" style={{color:props.mode==="dark"?'white':'#011533'}}>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#010b1a':'white', color:props.mode==="dark"?'white':'#010b1a'}}></textarea>
                <button className='btn btn-primary mx-2 'onClick={handleUpClick}> Convert to Uppercase</button>
                <button className='btn btn-primary mx-2'onClick={handleClick}> Convert to Lowercase</button>
                <button className='btn btn-primary mx-2'onClick={handleclearClick}>Clear</button>
                <button className='btn btn-primary mx-2'onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-2'onClick={handleSpaceClick} >Space</button>
            </div>
        </div>
        </><div className='container' style={{color:props.mode==="dark"?'white':'#011533'}}>
                <h1>Count The Number</h1>
                <p> The words {text.split(" ").length} The Alpabate {text.length}</p>
                <p>{0.008* text.split(" ").length} The Munite are taken </p><h2>Previwe</h2>
                <p>{text.length >0?text:"Enter the text in text Box"}</p>
            </div></>
    );
}
