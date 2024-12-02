const Loader = () => {
  const letters = "MIGRATE".split("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-64 relative">
        {/* Progress bar container */}
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          {/* Animated progress bar */}
          <div className="h-full bg-secondary animate-progress-bar" />
        </div>

        {/* Letters container */}
        <div className="mt-6 flex justify-center">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-2xl font-bold text-secondary animate-letter-fade-up"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;