const WebSelect = () => {
  return (
    <a
      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
        tab !== 1
          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
          : "bg-gray-200 border-transparent"
      }`}
      href="#0"
    >
      <div className="flex-1">
        <div className="font-bold leading-snug tracking-tight mb-1">
          Alien Raffles iOS
        </div>
        <div className="text-gray-600">The first iOS Based Raffle Bot.</div>
      </div>
      <div className="flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
        <img
          className="rounded-full"
          src={require("../images/portfolio/logos/alienRaffles.png")}
          alt="Alien Raffles"
        />
      </div>
    </a>
  );
};

export default WebSelect;
