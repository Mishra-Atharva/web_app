import ProfilePic from "../assets/profile.jpg";
// import { user_data } from "../client/utils/user_data.js";
import { useState, useEffect } from "react";

function AccountDetails()
{
    const [userData, setUserData] = useState({
        fname: '',
        lname: '',
        email: '',
        dob: '',
        phone: ''
    });

    useEffect(() => {
        const loadUserData = () => {
        try {
            const user = {
                fname: localStorage.getItem('fname') || '',
                lname: localStorage.getItem('lname') || '',
                email: localStorage.getItem('email') || '',
                dob: localStorage.getItem('dob') || '',
                phone: localStorage.getItem('phone') || ''
            };
            setUserData(user);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
        };
        loadUserData();
    }, []);

    return(
        <div className="flex flex-row justify-center items-center w-[40%] h-[25%] p-2 rounded-2xl bg-[#ffffff] shadow-[box-shadow:_rgba(0,_0,_0,_0.4)_0px_2px_4px,_rgba(0,_0,_0,_0.3)_0px_7px_13px_-3px,_rgba(0,_0,_0,_0.2)_0px_-3px_0px_inset]">
            <div className="w-[45%] h-[90%] bg-[#ECE2D0] rounded-2xl m-5 flex justify-center items-center">
                <div className="rounded-full overflow-hidden w-[65%] h-[70%] bg-gray-300">
                    <img src=""/>
                </div>
            </div>

            <div className="w-[90%] h-[90%] rounded-2xl m-1 p-5">
                <p className="font-bold">{userData.fname + " " + userData.lname}</p>
                <p>{userData.email}</p>
                <p>{userData.dob}</p>
                <p>{userData.phone}</p>

            </div>

        </div>
    );
}

export default AccountDetails;