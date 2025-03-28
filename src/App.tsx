import { useState } from 'react'
import imagefile from '/src/assets/새싹_03.png';


function App() {

	return (
		<section className='
			min-h-screen 
			flex 
			items-center justify-center 
			font-mono 
			bg-gradient-to-r from-cyan-500 from-10%
			via-indigo-500 via-50% to-sky-500 to-100%
		'>
			<div className='flex shadow-2xl rounded-2xl'>
				<div className='flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl xl:rounded-tr-none xl:rounded-br-none'>
					<h1 className='text-5xl font-bold'> Welcome </h1>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col text-2xl text-left gap-1'>
							<span>Username</span>
							<input type='text' className='ps-3 rounded-md p-1 border-2 border-gray-300 outline-none focus:border-cyan-400 focus:bg-slate-50'/>
						</div>
						<div className='flex flex-col text-2xl text-left gap-1'>
							<span>Password</span>
							<input type='password' className='ps-3 rounded-md p-1 border-2 border-gray-300 outline-none focus:border-cyan-400 focus:bg-slate-50'/>
						</div>
						<div className='flex items-center gap-2 -mt-4'>
							<input type='checkbox' className='w-4 h-4'/>
							<span className='text-gray-400'>Remember Password</span>
						</div>
					</div>
					<button className='w-full text-2xl rounded-md text-white bg-indigo-500 py-3 cursor-pointer hover:bg-indigo-600'>Login</button>
					<span className='font-semibold text-gray-700'>
						Don't have an account?
						<a href='#' className='text-blue-400 hover:underline ms-2'>Register</a>
					</span>
				</div>
				<img src={imagefile} alt='' className='w-[550px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl hidden xl:block bg-white'/>
			</div>
		</section>
	)
}

export default App
