import React from 'react'

const AllCard = () => {
  return (
    <div className='bg-purple-100 w-full h-screen'>
        <div className='flex items-center justify-center p-30 text-5xl font-bold'>
            <h1>Hellow World</h1>
        </div>
        <div className='items-center justify-between mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div className="snap-center p-4 border rounded-4xl drop-shadow-lg bg-white w-[400px]">
                    <h2 className="text-lg font-semibold mb-2 text-center bg-slate-300 w-full p-5 rounded-4xl">ALL GOV. CARDS</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Adhar Card</li>
                            <li>Pan Card</li>
                            <li>Voting Id</li>
                            <li>Sharm Id</li>
                            <li>Ayushman Card</li>
                            <li>Abha Card</li>
                            <li>Passport</li>
                            <li>All Types of Smart Cards</li>
                        </ul>
                </div>

                <div className="snap-center p-4 border rounded-4xl drop-shadow-lg bg-white w-[400px]">
                    <h2 className="text-lg font-semibold mb-2 text-center bg-slate-300 w-full p-5 rounded-4xl">ALL BUSINESS DOCS</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Adhar Card</li>
                            <li>Pan Card</li>
                            <li>Voting Id</li>
                            <li>Sharm Id</li>
                            <li>Ayushman Card</li>
                            <li>Abha Card</li>
                            <li>Passport</li>
                            <li>All Types of Smart Cards</li>
                        </ul>
                </div>

                <div className="snap-center p-4 border rounded-4xl drop-shadow-lg bg-white w-[400px]">
                    <h2 className="text-lg font-semibold mb-2 text-center bg-slate-300 w-full p-5 rounded-4xl">ALL GOV. DOCS</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Adhar Card</li>
                            <li>Pan Card</li>
                            <li>Voting Id</li>
                            <li>Sharm Id</li>
                            <li>Ayushman Card</li>
                            <li>Abha Card</li>
                            <li>Passport</li>
                            <li>All Types of Smart Cards</li>
                        </ul>
                </div>

        </div>
    </div>
  )
}

export default AllCard