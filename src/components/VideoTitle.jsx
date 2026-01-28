import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function VideoTitle({ description, title }) {
    const [showInfo, setShowInfo] = useState(true);

    const theme = useSelector((store) => store.Theme.mode);

    useEffect(() => {
        const timer = setTimeout(() => setShowInfo(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    if (!showInfo) return null;

    const isDark = theme === "dark";

    return (
        <div
            className={`absolute inset-0 flex items-center
            ${
                isDark
                    ? "bg-gradient-to-r from-black via-black/80 to-transparent"
                    : "bg-gradient-to-r from-white via-white/60 to-transparent"
            }`}
        >
            <div className="w-full px-6 sm:px-12 pb-20 pt-30 md:pt-40">
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold
                    ${isDark ? "text-white" : "text-black"}`}
                    style={{
                        textShadow: isDark
                            ? "2px 2px 6px rgba(0,0,0,0.8)"
                            : "2px 2px 6px rgba(255,255,255,0.8)",
                    }}
                >
                    {title}
                </h1>

                <p
                    className={`text-sm sm:text-lg md:text-xl mt-4 w-full sm:w-3/4 md:w-1/2
                    ${isDark ? "text-white" : "text-gray-800"}`}
                >
                    {description}
                </p>

                <div className="flex gap-5 mt-6">
                    <button
                        className={`px-6 py-3 rounded-md font-bold transition
                        ${
                            isDark
                                ? "bg-white text-black hover:bg-gray-300"
                                : "bg-black text-white hover:bg-gray-800"
                        }`}
                    >
                        ▶ Play
                    </button>

                    <button
                        className={`px-6 py-3 rounded-md transition
                        ${
                            isDark
                                ? "bg-gray-500 bg-opacity-70 text-white hover:bg-gray-600"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                        }`}
                    >
                        ℹ More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoTitle;
