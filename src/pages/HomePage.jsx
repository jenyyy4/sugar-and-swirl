import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const HomePage = () => {
    const navigate = useNavigate();

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-[#ff8fab] border-dashed rounded-full animate-spin border-t-transparent"></div>
                <div className="text-[#ff8fab] mt-4 text-lg font-semibold animate-pulse">
                    Mixing frosting...
                </div>
            </div>
        );
    }

    if(!user) {
        navigate('/');
        alert('Please click on "Start Decorating" and sign in first.');
        return;
    }

    return (
        <>
            <div className="flex justify-between items-center w-full p-5 cursor-pointer" onClick={() => navigate("/")}>
                <img src="logo.png" className="w-15 block ml-0 text-left"/>
            </div>

            <div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Craving a sweet treat? Order your *own* cozy little bakery spread right here! 🎀  <br/>
            </p><br/>

                <p className="max-w-3xl mx-auto text-lg text-gray-700">
                    Welcome to <span className="font-semibold text-[#ff8fab]">Sugar & Swirl</span> — a sweet little corner where you get to build your dream dessert plate!
                    Choose your favorite <span className="font-medium">cupcake, cookie, cake, donut</span> and <span className="font-medium">macaroon</span> from our magical menu and place your order with just a few clicks. <br/><br/> Whether you're satisfying a sweet craving, planning a party, or indulging in a treat for yourself — this app got you! It lets you mix and match sweet treats and see your perfect combo come to life!
                </p><br/>

                <p className="max-w-3xl mx-auto text-lg text-gray-700">
                    Your custom order is displayed on a summary page, where you can review your choices before placing your order.
                </p><br/>
                
                <p className="max-w-3xl text-center mx-auto text-md text-gray-600 italic">
                    Designed with love, pink frosting, and sprinkles &lt;3
                </p>
            </div>

            <div className="h-[20vh] flex justify-center items-end">
                <button 
                className="bg-[#ff8fab] rounded-full p-3 w-55 h-20 text-white text-5xl font-bold cursor-pointer hover:bg-[#ffc2d1]"
                onClick={() => navigate("/main-page")}
                >
                    Order
                </button>
            </div>
        </>
    )
}

export default HomePage;