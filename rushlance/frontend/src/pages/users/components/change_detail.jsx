import {useState, useEffect} from "react";

export default function ChangeDetails()
{
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        dob: '',
        phone: ''
    });
    const inputStyle = {
        border: "1px solid black",
        width: "250px",
        padding: 10,
    }

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
            setUser(user);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
        };
        loadUserData();
    }, []);

    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="rounded-2xl bg-[#ffffff] w-[80%] h-[80%] flex flex-col justify-center items-center gap-5">
                <input style = {inputStyle} type="text" value={user.fname} />
                <input style = {inputStyle} type="text" value={user.lname} />
                <input style = {inputStyle} type="text" value={user.email} />
                <input style = {inputStyle} type="date" value={user.dob}/>
                <input style = {inputStyle} type="text" value={user.phone} />
                <button className="border-1 border-black rounded-2xl p-2 w-[150px]">Change</button>
            </div>
        </div>
    );
}