import ProfilePic from "../assets/profile.jpg";
import { user_data } from "../client/utils/user_data.js";
import { useState, useEffect } from "react";

function AccountDetails()
{
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await user_data();
                if (data) {
                    // Assuming the data is JSON (you might need to parse it)
                    const parsedData = JSON.parse(data);
                    setUserData(parsedData);
                } else {
                    setError("Failed to fetch user data");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>No user data found</div>;

    console.log(userData);


    return(
        <div className="flex flex-row justify-center items-center w-[40%] h-[25%] p-2 rounded-2xl bg-[#ffffff] shadow-[box-shadow:_rgba(0,_0,_0,_0.4)_0px_2px_4px,_rgba(0,_0,_0,_0.3)_0px_7px_13px_-3px,_rgba(0,_0,_0,_0.2)_0px_-3px_0px_inset]">
            <div className="w-[45%] h-[90%] bg-[#ECE2D0] rounded-2xl m-5 flex justify-center items-center">
                <div className="rounded-full overflow-hidden w-[65%] h-[70%] bg-gray-300">
                    <img src=""/>
                </div>
            </div>

            <div className="w-[90%] h-[90%] rounded-2xl m-1 p-5">
                <p className="font-bold">{userData.first_name + " " + userData.last_name}</p>
                <p>{userData.email}</p>
                <p>{userData.date_of_birth}</p>
                <p>{userData.phone}</p>

            </div>

        </div>
    );
}

export default AccountDetails;