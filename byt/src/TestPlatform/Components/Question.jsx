import React,{useState} from 'react';
// import { json_res } from '../../gpt_model/gpt_model';

const Question = ({onChangeQnindex , qnindex}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handlePrev = () =>{
        if (qnindex === 1){
            console.log('No More Questions');
        }
        else{
            onChangeQnindex(qnindex-1);
        }
        setSelectedOption(null);
    }
    const handleNext = () =>{
        if (qnindex === 25){
            console.log('No More Questions');
        }
        else{
            onChangeQnindex(qnindex+1);
        }
        setSelectedOption(null);
    }
    const handleSave = () =>{
      //add checked index.
      handleNext();
    }
    return (
      <div className="w-[80rem] max-w-full h-[90vh] bg-slate-300 relative">
        <div className="h-16 p-4 text-2xl font-bold">
          <h1>Question {qnindex}:</h1>
        </div>
        <div className="p-4 pt-0">
          <div>
            {/* <p className="text-xl">
              A boat is moving with a velocity 3𝑖 + 4𝑗 with respect to ground.
              The water in the river is moving with a velocity −3𝑖 − 4𝑗 with
              respect to ground. The relative velocity of the boat with respect
              to water is
            </p> */}
            <p className="text-xl">...</p>
          </div>
          <div>
            <div className="flex">
              <input type="radio" value="Option A" checked={selectedOption === 'Option A'}onChange={() => handleOptionChange('Option A')}/>
              <label className="text-xl p-2 ml-2">....</label>
            </div>
            <div className="flex">
              <input type="radio" className="" value="Option B" checked={selectedOption === 'Option B'}onChange={() => handleOptionChange('Option B')}/>
              <label className="text-xl p-2 ml-2">....</label>
            </div>
            <div className="flex">
              <input type="radio" className="" value="Option C" checked={selectedOption === 'Option C'}onChange={() => handleOptionChange('Option C')} />
              <label className="text-xl p-2 ml-2">....</label>
            </div>
            <div className="flex">
              <input type="radio" className="" value="Option D" checked={selectedOption === 'Option D'}onChange={() => handleOptionChange('Option D')} />
              <label className="text-xl p-2 ml-2">....</label>
            </div>
          </div>
        </div>
        <div className="h-14 p-2 w-[100%] absolute bottom-0 flex align-items-center">
          <div className="h-[100%] flex items-center">
            <button
              type="button"
              className="w-[120px] focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2"
              onClick={() => handlePrev()}
            >
              <i className="mr-2 fas fa-chevron-left"></i>
              Previous
            </button>
            <button
              type="button"
              className="w-[120px] focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2"
              onClick={() => handleNext()}>
              Next
              <i className="ml-2 fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="ml-auto mr-4">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2"
              onClick={() => handleSave()}
            >
              Save Answer
            </button>
          </div>
        </div>
      </div>
    );
}

export default Question
