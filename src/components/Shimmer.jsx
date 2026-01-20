const Shimmer = () => {
    return (
        <div className="px-6">

            {Array(3).fill("").map((_, rowIndex) => (
                <div key={rowIndex} className="mb-8">


                    <div className="h-6 w-48 bg-gray-700 rounded mb-4 animate-pulse"></div>


                    <div className="flex overflow-x-hidden">
                        {Array(8).fill("").map((_, index) => (
                            <div
                                key={index}
                                className="w-40 h-60 bg-gray-700 rounded-lg mr-4 animate-pulse"
                            ></div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Shimmer;
