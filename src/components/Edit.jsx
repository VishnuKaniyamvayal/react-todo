import React from 'react'

function Edit() {
  return (
    <div>
        <div className={`flex flex-col px-10 border-[2px] m-4 rounded-lg shadow-xl max-w-[465px] mx-auto z-100 `}>
            <p className='mx-auto m-2 'color>Edit the text</p>
            <input type="text" className={`border rounded-md mb-6 mt-12 h-16 pl-4 border-gray-400 text-xl`} />
            <div className='flex flex-row'>
                <button className='mb-4 bg-[#00FFAB] w-20 h-10 justify-center mx-auto rounded-md hover:bg-[#0df2a6] duration-300 focus:bg-[#14C38E] font-medium z-10'>EDIT</button>
            </div>
        </div>
    </div>
  )
}

export default Edit