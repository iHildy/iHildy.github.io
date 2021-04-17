import React from "react";

const SmallWebSelect = ({ title, image, alt }) => {
  return (
    <>
      <div className="text-center md:text-left flex-1 font-bold leading-snug tracking-tight mb-1">
        {title}
      </div>
      <div className="hidden md:block flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
        <img className="rounded-full" src={image} alt={alt} />
      </div>
    </>
  );
};

export default SmallWebSelect;
