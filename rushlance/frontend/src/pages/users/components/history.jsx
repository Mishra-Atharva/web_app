import Card from "../components/Card.jsx";
import { useState, useEffect } from "react";
import { bookings } from "../client/utils/bookings.js";

function History()
{
    const [book, setBook] = useState([]);
    
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await bookings();
                if (data) {
                    setBook(JSON.parse(data));
                }
            } catch (err) {
                console.error("Error fetching bookings:", err);
            }
        };

        fetchBookings();
    }, []);


    return (
        <div className="p-5 w-[100%] h-[71.8%] shadow-[box-shadow:_rgba(0,_0,_0,_0.4)_0px_2px_4px,_rgba(0,_0,_0,_0.3)_0px_7px_13px_-3px,_rgba(0,_0,_0,_0.2)_0px_-3px_0px_inset] bg-[#ffffff] rounded-2xl">
            <h1 className="font-bold text-2xl">History</h1>
            <br />
            <div className="w-[100%] h-[80%] p-5 grid grid-cols-3 justify-center gap-10 overflow-y-scroll">            
                {book.map((booking) => (
                    <Card 
                        key={booking.booking_id || booking.id} 
                        title={booking.service_title || booking.title || "Untitled Booking"}
                        status={booking.status}
                        date={booking.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default History;