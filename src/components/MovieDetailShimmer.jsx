const MovieDetailShimmer = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto animate-[fadeIn_0.3s_ease-out,scaleIn_0.3s_ease-out]">

      {/* HERO SHIMMER */}
      <div className="relative h-[50vh] sm:h-[70vh] mx-2 sm:mx-0 animate-pulse">

        {/* Backdrop */}
        <div className="w-full h-full bg-gray-800 blur-sm" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-6 sm:bottom-16 left-4 sm:left-12 right-4 flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-5xl">

          {/* Poster */}
          <div className="w-28 sm:w-40 md:w-48 h-40 sm:h-60 md:h-72 bg-gray-700 rounded-xl blur-sm" />

          {/* Info */}
          <div className="flex-1 space-y-3">
            <div className="h-6 sm:h-8 w-2/3 bg-gray-600 rounded" />
            <div className="h-4 w-full bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
            <div className="h-4 w-4/6 bg-gray-700 rounded" />

            {/* Play button shimmer */}
            <div className="mt-4 w-32 h-10 bg-gray-600 rounded-lg" />
          </div>
        </div>
      </div>

      {/* CONTENT SHIMMER */}
      <div className="bg-black pt-10 pb-14 animate-pulse">

        {/* Cast Title */}
        <div className="h-6 w-32 bg-gray-700 rounded mb-4 mx-4 sm:mx-12" />

        {/* Cast Row */}
        <div className="flex gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12 no-scrollbar mb-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-24 flex-shrink-0 space-y-2">
              <div className="w-26 h-32 bg-gray-700 rounded-lg blur-sm" />
            </div>
          ))}
        </div>

        {/* Similar Title */}
        <div className="h-6 w-40 bg-gray-700 rounded mb-4 mx-4 sm:mx-10" />

        {/* Similar Movies Row */}
        <div className="flex gap-4 overflow-x-scroll no-scrollbar mx-4 sm:mx-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-[150px] sm:h-[200px] md:h-[240px] bg-gray-700 rounded-lg blur-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailShimmer;