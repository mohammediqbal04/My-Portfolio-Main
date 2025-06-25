import React from 'react'

const Education = () => {
  return (
    <div id='education' className='flex flex-col gap-5 border border-neutral-200 dark:border-neutral-700 rounded-2xl py-4 px-6 text-center md:max-w-5xl mx-auto mt-20'>
      <h1 className='text-center text-[45px] font-bold mt-10'style={{ fontFamily: 'Michroma, sans-serif' }}>
        Education & Experience
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-5 mt-5'>
        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Masters of Computer Applications</h1>
          <p className='text-[#A3A3A3]'>Kalasalingam Academy Of Research and Education.</p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>⌛ 2023 - 2025</span>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>📌 Krishnan Koil</span>
          </div>
        </div>

        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Pinnacle Labs</h1>
          <p className='text-[#A3A3A3]'>Web Developer Intern.</p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>⌛ May 2025 - june 2025</span>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>📌 India</span>
          </div>
        </div>

        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Bachelors of Computer Applications</h1>
          <p className='text-[#A3A3A3]'>The American College.</p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>⌛ 2018 - 2021</span>
            <span className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>📌 Krishnan Koil</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education