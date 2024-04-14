import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from "axios";

const Createtest = () => {
  const [prompt , setprompt] = useState('');
  const [json_res , setjson_res] = useState('');
  
  function generatequestion(){
    console.log('Post Request Send');
    axios.post('http://localhost:11434/api/generate' , {
        "model": "codellama",
        "prompt": `Write a json object having the following keys : question , option_1 , option_2 , option_3 , option_4 , correct_option(value must be one of the four 'option_1 , option_2 , option_3 , option_4'). Using this paragraph :${prompt}`,
        "stream": false
      }).then((response)=>{
        setjson_res(JSON.parse(response.data.response))
        console.log('POST request successful:', response.data.response)
      }).catch((error)=>{
        console.error('There was a problem with the POST request:', error);
      })
  }
  const handlecreateQuestion = ()=>{
    axios.post('http://localhost:5000/question',{
      question_no:"1",
      question:json_res
    }).then(
      setjson_res('')
    ).catch((error) => {
      console.error('Error Setting Question', error);
    })
  }

  return (
    <div>
      <Navbar/>
      <div className="flex absolute ">
      <div>
        <h1>Create Test Platform.</h1>
        <textarea className='border-black border-1' id='input_prompt' onChange={(event)=>{setprompt(event.target.value)}} placeholder='Write a paragraph' rows={6} cols={50} />
        <button className='border-black border-2 bg-gray-100' onClick={generatequestion}>Find Response</button>
        {json_res && <div><div>{json_res.question}</div>
        <div>{json_res.option_1}</div>
        <div>{json_res.option_2}</div>
        <div>{json_res.option_3}</div>
        <div>{json_res.option_4}</div>
        <div>Correct Answer:{json_res.correct_option}</div></div>}
        <button className='border-black border-2 bg-gray-100' onClick={handlecreateQuestion}>Set Question</button>
      </div>
      </div>
    </div>
  )
}

export default Createtest;
