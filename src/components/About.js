// import React, { useState } from 'react'

export default function About() {

    // const [myStyle, setMyStyle] = useState ({

    //     color: 'white',
    //     backgroundColor : 'black'
    // })

    // const [btnText, setBtnText] = useState ('Enable Light Mode')

       

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white' ){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
              
    //     }
    // }


  return (
    <div className='container' >
        <h2 className='my-5'><span className='bg-info rounded-3'>About</span></h2>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Conver To Upper Case
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body">
        ConvertToUppercase is a versatile function or feature commonly employed in programming to transform a given string into its uppercase equivalent. This operation is particularly useful when working with text data, as it ensures uniformity and consistency.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Convert To Lower Case
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body">
        This function efficiently transforms all characters within a given string to their lowercase counterparts. The utility of ConvertToLowerCase extends across diverse applications, such as data normalization, input validation, and text formatting. By employing this function, developers ensure consistency and ease of comparison in textual data, fostering a standardized approach to handling strings. 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Delete Text
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body">
        The delete text function is a valuable feature in programming that enables the removal of specific portions of text within a given context. Whether implemented through methods like DeleteText or other equivalent mechanisms, this function plays a crucial role in manipulating and refining textual data.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Copy Text
        </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body">
        The copy text function is a fundamental capability in programming that allows the duplication of specific text content within a given context. Whether implemented through methods like CopyText or similar mechanisms, this function serves a crucial role in handling textual data.
        </div>
        </div>
    </div>
</div>
{/* <div className='container my-3'>
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>

</div> */}
 
 </div>
  )
}
