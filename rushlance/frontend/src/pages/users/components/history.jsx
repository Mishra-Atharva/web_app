/*  simple scrollable bookings list for the client dashboard  */

import Card from "./Card.jsx";
import { bookingData } from "../client/utils/bookings.js";
import { useState, useEffect } from "react";

/* demo data */
const items = [
  {
    id: 1,
    title: "Window cleaning",
    date: "2024-06-17",
    status: "Pending"
  },
  {
    id: 2,
    title: "Gutter cleaning and maintenance",
    date: "2025-02-13",
    status: "Completed"
  },
  {
    id: 3,
    title: "House cleaning",
    date: "2025-05-25",
    status: "Pending"
  }
];

export default function History() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await bookingData();
        if (data) {
          try {
            const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
            console.log(parsedData);
            setBookings(parsedData);
          } catch (parseError) {
            console.error("Error parsing user data:", parseError);
            setError("Failed to parse user data");
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  console.log(bookings);

  return (
    <section className="p-5 w-full h-[71.8%] shadow rounded-2xl bg-white">
      <h1 className="font-bold text-2xl mb-6">History</h1>

      <div className="w-full h-[80%] grid grid-cols-4 gap-10 overflow-y-auto pr-2">
        {bookings.map(i => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </section>
  );
}
