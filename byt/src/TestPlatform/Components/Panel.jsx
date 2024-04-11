import React ,{useState , useEffect}  from 'react';

const Panel = ({onChangeQnindex , qnindex , checkedidx}) => {
    const [time, setTime] = useState({
        hours: 3,
        minutes: 0,
        seconds: 0,
    });

    const onNumClick = (clickindex) => {
        onChangeQnindex(clickindex);
    }

    useEffect(() => {
      const timer = setInterval(() => {
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
          clearInterval(timer);
          // Timer has reached 0, you can add your desired action here
          console.log('Timer expired!');
        } else {
          updateTime();
        }
      }, 1000);    
      return () => clearInterval(timer);    
    }, [time]);
  
    const updateTime = () => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
  
        if (newTime.minutes === 0 && newTime.seconds === 0) {
          newTime.hours -= 1;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (newTime.seconds === 0) {
          newTime.minutes -= 1;
          newTime.seconds = 59;
        } else {
          newTime.seconds -= 1;
        }
  
        return newTime;
      });
    };

    const formatTime = (value) => {
      return String(value).padStart(2, '0');
    };

    return (
        <>
            <div className="bg-yellow-100 h-[90vh] w-[380px] right-0 z-2 relative">
                <h3 className='text-xl mt-2 pl-2'>Timer:</h3>
                <div className="w-full flex justify-center items-center">
                    <button type="button" className="w-[140px] focus:outline-none text-white bg-red-700 hover:bg-red-800 flex justify-center items-center font-medium rounded-full text-lg px-5 py-1 me-2">{formatTime(time.hours)} : {formatTime(time.minutes)} : {formatTime(time.seconds)}</button>
                </div>
                <h3 className='text-xl mt-2 pl-2'>Instructions:</h3>
                <div>
                    <div className="flex">
                        <div className="p-2">
                            <button className='w-10 h-10 m-1 bg-neutral-300 border-2 border-black rounded-full'>7</button>
                            <span>Not Visited</span>
                        </div>
                        <div className="p-2">
                            <button className='w-10 h-10 m-1 bg-red-500 border-2 border-black rounded-full'>3</button>
                            <span>Not Attempted</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="p-2 pt-0">
                            <button className='w-10 h-10 m-1 bg-green-500 border-2 border-black rounded-full'>9</button>
                            <span>Attempted</span>
                        </div>
                        <div className="p-2 pt-0">
                            <button className='w-10 h-10 m-1 bg-blue-400 border-2 border-black rounded-full'>1</button>
                            <span>Marked Review</span>
                        </div>
                    </div>
                </div>
                <h3 className='text-xl pl-2'>Questions Panel:</h3>
                <div className='py-2 px-8'>
                    {Array.from({ length: 25 }, (_, index) => (
                        <button key={index + 1} className={`w-10 h-10 m-1 border-2 border-black rounded-full 
                              ${
                                (index+1) === qnindex?
                                'bg-red-500':
                                `${(index+1)=== checkedidx?'bg-green-500':'bg-neutral-300'}`
                              } `} 
                        onClick={()=>onNumClick(index+1)}>{index + 1}</button>
                    ))}
                </div>
                <div className="w-full absolute bottom-0 p-4">
                    <button type="button" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">Submit Test</button>
                </div>
            </div> 
        </>
    )
}

export default Panel
