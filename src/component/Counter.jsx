import React, { useEffect, useState } from 'react'
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';



const Counter = () => {
    const [count, setCount] = useState(() =>{
        const savedCount = localStorage.getItem('counterValue');
        return savedCount !== null ? Number(savedCount) : 0;
    });

    useEffect(()=>{
        localStorage.setItem('counterValue', count);
    },[count]);
    return (
        <div className="flex flex-col items-center h-screen bg-yellow-400 p-4">
            <div className=" flex items-center justify-center bg-yellow-400 shadow-lg rounded-[25px] border-8 border-white  w-auto px-4">
          <h1 className="text-4xl font-bold text-white">{count}</h1>
        </div>
        {/* Counter Display
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold">Counter</h1>
        </div> */}
  
        {/* Button Section */}
        <div className="flex flex-col items-center justify-center mt-15 mb-8  bg-white w-[90px] h-[50px] rounded-full">
        <button className='' onClick={() => setCount(0)}
          >
            <RestartAltTwoToneIcon/>
          </button>
          </div>
          <div className='flex flex-col items-center w-full mb-8'>
          <button
          className=" bg-yellow-400 hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full text-4xl absolute bottom-8 w-[149] border-8 border-white flex items-center justify-center"
          onClick={() => setCount(count + 1)}
        >
         Count
        </button>
          </div>
          
        
      </div>
  );
};

export default Counter
