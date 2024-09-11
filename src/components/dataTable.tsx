import * as React from 'react';



export  function CollapsibleTable({data}) {
    console.log(data[0].headers);
    
  return (
    <div className='w-full flex flex-col items-center justify-between '>
     { 
     data.map((e , index)=>{
      return (<div key={index} className='w-5/12 rounded-[12px] py-2 px-4 bg-[#d9eee1] '>
      <h1 className='text-blue-700 font-bold'>{e.headers}</h1>
      <div className='flex flex-col'>

      <input type="search" />
      <label htmlFor="" className='text-blue-600 font-bold'>{e?.data[0].name}</label>
      </div>
    </div>)
     })}
    </div>
  );
}
