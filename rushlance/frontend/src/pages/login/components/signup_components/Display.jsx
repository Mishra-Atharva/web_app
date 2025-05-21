// Importing
import {motion} from "framer-motion";

export default function RightView({image, signup})
{
    // HTML
    return (
        <motion.div initial={{x:0}} animate={{ backgroundColor: (signup == "login") ? "#f4e9d7" : "white", x: (signup == "login") ? "-150%" : "0%" }} transition={{duration: 0.8}} className="z-10 w-[40%] h-[100%] p-[20px] font-['Kumar One Outline'] rounded-2xl flex flex-col gap-5 items-center justify-center">
            <h1 className="text-4xl font-['Kumar_One_Outline']">RushLance</h1>
            <img src={image} alt=""/>
        </motion.div>
    );
}