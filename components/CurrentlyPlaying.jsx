import { useLastFM } from "use-last-fm";

import { BsSpotify } from "react-icons/bs";

const CurrentlyPlaying = () => {
  const lastFM = useLastFM("ihildy", "1c8684edcefd11701a8b2d38018506bc");

  if (lastFM.status !== "playing") {
    return (
      <div className="mb-6 flex items-center justify-center space-x-2 text-lg font-medium text-[#1DB954]">
        <BsSpotify className="text-2xl" />
        <p>Not listening to anything right now</p>
      </div>
    );
  }

  return (
    <div className="mb-6 flex items-center justify-center space-x-2 text-sm sm:text-lg font-medium text-[#1DB954]">
      <BsSpotify className="text-2xl hidden sm:block" />
      <p>
        Listening to {lastFM.song.name} by {lastFM.song.artist}
      </p>
    </div>
  );
};

export default CurrentlyPlaying;
