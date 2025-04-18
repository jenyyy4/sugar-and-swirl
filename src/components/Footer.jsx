import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";

const Footer = () => {

    const navigate = useNavigate();

    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Logout failed: ", error.message);
        }
    };

  return (
    <div className="p-4 flex justify-end items-center fixed bottom-5 w-full z-50 h-[60px] pointer-events-none">
      <button 
            onClick={handleLogout}
            className="m-5 w-15 h-15 bg-[#ff8fab] text-white rounded-full hover:bg-gray-400 transition cursor-pointer pointer-events-auto"
        >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
        </button>
    </div>
  );
};

export default Footer;