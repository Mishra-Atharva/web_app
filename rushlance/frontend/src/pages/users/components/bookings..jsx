import { useState, useEffect } from "react";
import { bookings } from "../client/utils/bookings";
import Card from "./Card";

export default function Bookings()
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
        <div className="flex w-[100%] h-[100%] bg-[#ffffff] rounded-2xl">
            {book.map((booking) => (
                <Card 
                    key={booking.booking_id || booking.id} 
                    title={booking.service_title || booking.title || "Untitled Booking"}
                    status={booking.status}
                    date={booking.date}
                />
            ))}

        </div>
    );
}