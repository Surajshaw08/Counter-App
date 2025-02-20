import React, { useEffect, useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(() =>{
        const savedCount = localStorage.getItem('counterValue');
        return savedCount !== null ? Number(savedCount) : 0;
    });

    useEffect(()=>{
        localStorage.setItem('counterValue', count);
    },[count]);
    return (
        <div className="flex flex-col items-center h-screen bg-gray-500 p-4">
            <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold">{count}</h1>
        </div>
        {/* Counter Display */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold">Counter</h1>
        </div>
  
        {/* Button Section */}
        <div className="flex flex-col items-center w-full mb-8">
        <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full absolute bottom-50"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          </div>
          <div className='flex flex-col items-center w-full mb-8'>
          <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-4xl absolute bottom-8"
          onClick={() => setCount(count + 1)}
        >
         +
        </button>
          </div>
          
        
      </div>
  );
};

export default Counter
