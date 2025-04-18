import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase";

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      navigate("/home-page");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <button 
        className="bg-[#ff8fab] rounded-4xl p-3 w-45 text-white font-bold cursor-pointer hover:bg-[#ffc2d1]"
        onClick={handleGoogleSignIn}
        >
            Start Decorating
        </button>
    </div>
  );
};

export default GoogleSignIn;