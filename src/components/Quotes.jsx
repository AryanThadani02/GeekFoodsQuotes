import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <p className="text-xl font-semibold mb-2">{quote}</p>
      <p className="text-gray-600">- {author}</p>
    </div>
  );
};

export default Quote;
