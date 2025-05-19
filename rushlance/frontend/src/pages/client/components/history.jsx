import Card from "../components/Card.jsx";

function History()
{
    return (
        <div className="p-5 w-[50%] h-[71.8%] shadow-[box-shadow:_rgba(0,_0,_0,_0.4)_0px_2px_4px,_rgba(0,_0,_0,_0.3)_0px_7px_13px_-3px,_rgba(0,_0,_0,_0.2)_0px_-3px_0px_inset] bg-[#ffffff] rounded-2xl">
            <h1 className="font-bold text-2xl">History</h1>
            <br />
            <div className="w-[100%] h-[80%] p-5 grid grid-cols-2 grid-rows-2 justify-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    );
}

export default History;