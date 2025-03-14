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
    </div>
  );
};

export default AddressPage;
