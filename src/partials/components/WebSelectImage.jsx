import React from "react";

const WebSelectImage = ({ image, alt, link }) => {
  return (
    <div className="relative inline-flex flex-col">
      <img
        className="md:max-w-none mx-auto rounded"
        src={image}
        draggable="false"
        width="500"
        height="462"
        alt={alt}
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
      >
        Visit
      </a>
    </div>
  );
};

export default WebSelectImage;
