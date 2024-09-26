"use client"
import React, { useState, useEffect } from 'react';
import HiddenAudioPlayer from "@/components/HiddenAudioPlayer/HiddenAudioPlayer";


const ButtonPausePlay: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
  }, [play]);

  const togglePlayPause = () => {
    setPlay(play);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative w-20 h-20 sm:w-48 sm:h-48 rounded-full bg-sky-500 p-2 ${isPressed
            ? 'shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_0_5px_rgba(255,255,255,0.1)]'
            : ''
          } transition-all duration-150 ease-in-out`}
      >
        <button
          onClick={handlePlay}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          aria-label={play ? "Pause the story" : "Play the story"}
          className={`w-full h-full rounded-full bg-gradient-to-b from-gray-200 to-gray-100 text-sky-500 transition-all duration-150 ease-in-out transform hover:scale-105 ${isPressed ? 'scale-95' : ''
            } focus:outline-none focus:ring-4 focus:ring-sky-500 shadow-[inset_0_-8px_8px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] border-4 sm:border-8 border-gray-300 overflow-hidden`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white via-transparent to-gray-300 opacity-50"></div>
          <div
            className={`relative z-10 flex items-center justify-center w-full h-full rounded-full ${isPressed ? 'translate-y-2' : ''
              } transition-transform duration-150 ease-in-out`}
          >
            {play ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 sm:w-24 sm:h-24"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 sm:w-24 sm:h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            )}
          </div>
          <span className="sr-only">{play ? "Pause" : "Play"}</span>
        </button>
      </div>
      <HiddenAudioPlayer play={play} setPlay={handlePlay} />
    </div>

  );
};

export default ButtonPausePlay;
