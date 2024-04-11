import React , {useState} from 'react';
import Navbar from '../Components/Navbar';
import Panel from './Components/Panel';
import Subjects from './Components/Subjects';
import Question from './Components/Question';

const Platform = () => {
  const [qnindex , setqnindex]  = useState(1);

  const handleChange = (data) => {
    setqnindex(data);
  };

  const checkedidx = 3;

  return (
    <div className='max-w-screen relative select-none'>
      <Navbar/>
      <div className="flex absolute right-0 left-0">
        <Subjects onChangeQnindex={handleChange}/>
        <Question onChangeQnindex={handleChange} qnindex={qnindex}/>
        <Panel onChangeQnindex={handleChange} qnindex={qnindex} checkedidx={checkedidx}/>
      </div>
    </div>
  )
}

export default Platform;
