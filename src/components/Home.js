import React, { useState } from 'react'

const Home = (props) => {
    const [content, setContent] = useState('');
    const handleUpperCase = ()=>{
       if(content.length === 0)
        return props.ShowAlert(`plese enter text to apply`,`warning`);
      let textUpper = content.toUpperCase();
      setContent(textUpper);
      props.ShowAlert(`Text is converted into uppercase`,`success`);
    }
    const handleLowerCase = ()=>{
        if(content.length===0)
        return props.ShowAlert(`Please enter text to apply`,`warning`);
        let lowercase = content.toLowerCase();
        setContent(lowercase);
        props.ShowAlert(`Text is converted into lowercase`,`success`);
    }
    const handleClearArea = ()=>{
       if(content.length===0)
       return props.ShowAlert(`Please enter text to apply`,`warning`);
       setContent('');
       props.ShowAlert(`Text area is clear`,`success`);
    }
    const handleUpCopyText =()=>{
      if(content.length===0){
        return props.ShowAlert(`Please enter text to apply`,`warning`);
      }
      let copyText = document.getElementById('myBox');
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.ShowAlert(`Text is copied to clipbord`,`succecss`);
    }
    const handleReamoveExtraScpace=()=>{
     if(content.length===0)
     return props.ShowAlert(`Please enter to apply`, `warning`);
     let removeSpace = content.split(/[ ]+/);
     setContent(removeSpace.join(" "));
     props.ShowAlert(`Extra spaces are removed`, 'success');
    }
    const handleChange=(e)=>{
     setContent(e.target.value);
    }

  return (
    <>
     <div className='container my-3'>
        <div className='mb-3'>
            <h1 className='text-center'>{props.heading}</h1>
            <textarea onChange={handleChange} className={`form-control-outline-none bg-${props.mode} w-100 text-${props.mode==='dark'?'light':'dark'} p-3`} id="myBox" rows="8" value={content} placeholder='Enter Your Text Here...'/>
        </div>
        <div className='btn-div'>
            <button className='btn btn-primary m-2' onClick={handleUpperCase}>Convert to uppercase</button>
            <button className='btn btn-primary m-2' onClick={handleLowerCase}>Convert to lowercase</button>
            <button className='btn btn-primary m-2' onClick={handleClearArea}>Clear area</button>
            <button className='btn btn-primary m-2' onClick={handleReamoveExtraScpace}>Remove extra space</button>
            <button className='btn btn-primary m-2' onClick={handleUpCopyText}>Copy text</button>
        </div>
     </div>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-6 my-2 p-3'>
            <h1>Text Summary</h1>
            <p><b>{content.length>0?content.split(" ").length:0} words</b> and <b> {content.length} characters </b></p>
            <p>Atleast <b> {0.008 * content.split(" ").length} Minutes</b> is required to read</p>
            </div>
            <div className='col-lg-6 my-2 p-3'>
            <h2>Preview</h2>
            <p>{content.length >0 ?content:"Please write somthing in above box to preview content here :)"}</p>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Home
