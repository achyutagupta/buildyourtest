import React, { useState } from 'react';
import OpenAI from "openai";
import Navbar from '../Components/Navbar';
import axios from "axios";

const Createtest = () => {
  const [prompt , setprompt] = useState('');
  const [json_res , setjson_res] = useState('');
  const openai = new OpenAI({
    // apiKey: "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",
    dangerouslyAllowBrowser: true ,
  });

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

  async function sendgptresponse(){
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You will be provided with a paragrapgh, and your task is to generate a multiple correct question with 4 one word options where only one must be correct and rest 3 must be incorrect. You have return it in form of json '{question:`generated question`, option_1:`generated option 1`,option_2:`generated option 2`,option_3:`generated option 3`,option_4:`generated option 4`,correct_option:`correct option`}'"
          },
          {
            "role": "user",
            "content": prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
      });
      console.log(response.choices[0].message.content)
      setjson_res(JSON.parse(response.choices[0].message.content));
      console.log(json_res)
  }

  return (
    <div>
      <Navbar/>
      <div className="flex absolute ">
      <div>
        <h1>Create Test Platform.</h1>
        <textarea className='border-black border-1' id='input_prompt' onChange={(event)=>{setprompt(event.target.value)}} placeholder='Write a paragraph' rows={6} cols={50} />
        <button className='border-black border-2 bg-gray-100' onClick={sendgptresponse}>Find Response</button>
        <div>{json_res.question}</div>
        <div>{json_res.option_1}</div>
        <div>{json_res.option_2}</div>
        <div>{json_res.option_3}</div>
        <div>{json_res.option_4}</div>
        <div>Correct Answer:{json_res.correct_option}</div>
        <button className='border-black border-2 bg-gray-100' onClick={handlecreateQuestion}>Set Question</button>
      </div>
      </div>
    </div>
  )
}

export default Createtest;
