function Card()
{
    return (
        <div className="w-[250px] h-[150px] bg-gray-300 rounded-2xl">
            <div>
                <img src="" alt="" />
            </div>
            <div className="p-5">
                <p className="float-left">Title</p>
                <p className="float-right">Price: $100</p>
            </div>
        </div>
    );
}

export default Card;