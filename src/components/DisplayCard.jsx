import React from "react";

const DisplayCard = ({children,heading}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
        {children}
      </div>
    </>
  );
};

export default DisplayCard;
