function Card()
{
    return (
        <div className="w-[350px] h-[250px] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-[95%] h-[70%] border-1 border-black rounded-2xl overflow-hidden">
                <img src="https://placehold.co/600x400" className="object-cover w-full h-full"/>
            </div>
            <br />
            <div className="mx-5 w-[90%]">
                <p className="float-left">Title</p>
                <p className="float-right">Price: $100</p>
            </div>
        </div>
    );
}

export default Card;