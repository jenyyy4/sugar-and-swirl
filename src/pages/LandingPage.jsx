import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import GoogleSignIn from "../GoogleSignIn";

const LandingPage = () => {
    const navigate = useNavigate();

    const auth = getAuth();
    const [user] = useAuthState(auth);

    console.log(user);
    return(
        <>
            <div className="">
                {user ? ( <h1 className="mt-5 font-bold text-[#ff8fab] text-xl sm:text-3xl text-center">Welcome, {user.displayName}! Click on the cupcake to choose your desserts!</h1> ) : ( <GoogleSignIn /> )}
            </div>
            <div className="flex flex-col h-[90vh] justify-center items-center">
                <img src="logo.png" className="w-100 cursor-pointer" onClick={() => navigate("/home-page")}/>
                <h1 
                className="text-5xl sm:text-8xl text-[#ff8fab] font-bold mt-7"
                style={{
                    fontFamily: "'Margarine'"
                }}
                >
                    Sugar & Swirl
                </h1>
            </div>
        </>
    )
}

export default LandingPage;