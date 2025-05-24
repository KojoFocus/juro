import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const StoryWorld = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const tryPlay = () => {
      if (audio && !muted) {
        audio.volume = 0.3;
        audio.loop = true;
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("click", tryPlay, { once: true });
    return () => document.removeEventListener("click", tryPlay);
  }, [muted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🎧 Background Audio */}
      <audio
        ref={audioRef}
        src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Chad_Crouch/Arps/Chad_Crouch_-_Arps_-_04_Snowfall.mp3"
        autoPlay
        loop
      />

      {/* Spider Web Animation Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full animate-spin-slow opacity-10 fill-none stroke-[0.3] stroke-indigo-500"
        >
          <g transform="translate(50,50)">
            {[...Array(6)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 60})`}>
                <path d="M0,0 L0,-50" />
              </g>
            ))}
            {[10, 20, 30, 40].map((r, i) => (
              <circle key={i} r={r} stroke="currentColor" strokeOpacity={0.4} />
            ))}
          </g>
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center max-w-2xl mx-auto">
        <h1
          className="glitch hover:animate-shake mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl"
          data-text="You’re caught in the JURO WEB"
        >
          You’re caught in the <span className="text-indigo-500">JURO WEB</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          There’s no turning back. The stories are watching. The code is
          mutating.
        </p>
        <p className="text-sm sm:text-base text-gray-400 italic mb-4">
          This world is still under construction... 👷🏾‍♀️✨ but the chaos is
          coming.
        </p>
        <p className="text-sm sm:text-base text-gray-500 mb-10">
          Wanna peek behind the curtain? Join the dev logs. See our madness in
          motion.
        </p>

        {/* Gradient Button */}
        <button
          onClick={() => navigate("/progress")}
          className="text-white px-6 py-3 rounded-xl font-medium transition bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-[length:200%_200%] animate-gradient-move hover:scale-[1.02]"
        >
          🧩 Get Into Our Progress
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="mt-6 text-sm text-gray-400 hover:text-gray-200 transition"
        >
          {muted ? "🔇 Unmute ambience" : "🔊 Mute ambience"}
        </button>
      </div>
    </div>
  );
};

export default StoryWorld;
