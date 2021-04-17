import React from "react";

const WebSelect = ({ title, description, image, alt }) => {
  return (
    <>
      <div className="flex-1">
        <div className="font-bold leading-snug tracking-tight mb-1">
          {title}
        </div>
        <div className="text-gray-600">{description}</div>
      </div>
      <div className="flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
        <img className="rounded-full" src={image} draggable='false' alt={alt} />
      </div>
    </>
  );
};

export default WebSelect;
