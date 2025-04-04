import React from "react";

const AddressPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-xl font-bold mb-4">पता</h1>
        <p className="text-gray-700">
          Chavadi , हनुमान मंडल चौक, बालाजी मेडिकल के सामने,<br />
          मुकादम अली, कॉन्गांव, भिवंडी, ठाणे - 421311
        </p>
        <p className="mt-4 text-gray-800 font-semibold">
          ऑनलाइन के सभी काम किए जाते हैं |<br />
          सरकारी के सभी फॉर्म भरे जाते हैं
        </p>
      </div>

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/monkey-music.jpg" alt="" />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Raj</p>
              <p className="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              Message
            </button>
          </div>
      </div>

      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0 rounded-4xl" src="/images/dog.jpg" alt="ChitChat Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Raju</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>


    </div>
  );
};

export default AddressPage;
