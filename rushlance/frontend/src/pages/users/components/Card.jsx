function Card({ title, status, date, imageUrl})
{
    return (
        <div className="w-[350px] h-[250px] rounded-2xl flex flex-col justify-between items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300 m-2">
            {/* Image container with fallback */}
            <div className="w-[95%] h-[70%] border border-gray-200 rounded-2xl overflow-hidden mt-2">
                <img 
                    src={imageUrl || "https://placehold.co/600x400"} 
                    alt={title || "Service image"}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                        e.target.src = "https://placehold.co/600x400";
                    }}
                />
            </div>
            
            {/* Content section */}
            <div className="w-[90%] p-2">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800 truncate w-[70%]">
                        {title || "Untitled Service"}
                    </p>
                    {status && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                            status === 'Completed' ? 'bg-green-100 text-green-800' :
                            status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                        }`}>
                            {status}
                        </span>
                    )}
                </div>
                {date && (
                    <p className="text-sm text-gray-500 mt-1">
                        {new Date(date).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Card;