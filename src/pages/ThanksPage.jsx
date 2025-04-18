import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useEffect } from "react";

const ThanksPage = () => {
    const navigate = useNavigate();

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
      
        if (!user) {
          if (!sessionStorage.getItem('redirected')) {
            navigate('/');
            alert('Please click on "Start Decorating" and sign in first.');
            sessionStorage.setItem('redirected', 'true');
          }
        }
      }, [user, loading, navigate]);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <p className="max-w-3xl text-center mt-4 mx-auto text-md text-gray-600 italic">
                thanks for filling the form! &lt;3
            </p>
            <button 
            className="h-10 bg-[#ff8fab] text-white font-bold py-2 px-4 rounded-4xl hover:bg-[#ffc2d1] transition cursor-pointer"
            onClick={() => navigate("/")}>
                Order Again
            </button>
        </div>
    )
}

export default ThanksPage;