import React from 'react';

const AllCard = () => {
  return (
    <div className='bg-purple-100 w-full min-h-screen flex flex-col items-center py-10 px-4'>
      {/* Header Section */}
      <div className='flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center'>
        <h1>Hello World</h1>
      </div>
      
      {/* Cards Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl'>
        {[
          { title: "ALL GOV. CARDS", items: ["Adhar Card", "Pan Card", "Voting Id", "Sharm Id", "Ayushman Card", "Abha Card", "Passport", "All Types of Smart Cards"] },
          { title: "ALL BUSINESS DOCS", items: ["GST Certificate", "Udyog Aadhar", "Shop License", "Import Export Code", "FSSAI License", "Trademark Registration", "Company Incorporation", "MSME Registration"] },
          { title: "ALL GOV. DOCS", items: ["Birth Certificate", "Ration Card", "Domicile Certificate", "Caste Certificate", "Income Certificate", "Driving License", "Passport", "Marriage Certificate"] }
        ].map((card, index) => (
          <div key={index} className='snap-center p-6 border rounded-3xl drop-shadow-lg bg-white w-full max-w-[400px] mx-auto'>
            <h2 className='text-lg font-semibold mb-4 text-center bg-slate-300 w-full p-4 rounded-3xl'>{card.title}</h2>
            <ul className='list-disc pl-5 space-y-2 text-gray-700'>
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
