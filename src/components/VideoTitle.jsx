import React, { useEffect, useState } from 'react'

function VideoTitle({ description, title }) {
    const [showinfo, setShowInfo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowInfo(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    if (!showinfo) return null;

    return (
        <div className="absolute inset-0  bg-gradient-to-r from-black  flex items-center">

    
            <div className="w-full  px-6 sm:px-12 pb-20 pt-30 md:pt-40">

                <h1
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                    {title}
                </h1>

                <p className="text-white text-sm sm:text-lg md:text-xl  mt-4 w-full sm:w-3/4 md:w-1/2">
                    {description}
                </p>

                <div className="flex gap-5 mt-6">
                    <button className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-300">
                        ▶ Play
                    </button>

                    <button className="bg-gray-500 bg-opacity-70 text-white px-6 py-3 rounded-md hover:bg-gray-600">
                        ℹ More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoTitle;
