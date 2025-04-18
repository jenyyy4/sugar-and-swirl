import React from "react";
import { useBakery } from "../context/BakeryContext.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useEffect } from "react";

const categories = [
    { key: "cupcakes", label: "cupcake" },
    { key: "cookies", label: "cookie" },
    { key: "cakes", label: "cake" },
    { key: "donuts", label: "donut" },
    { key: "macaroons", label: "macaroon" },
];

const SummaryPage = () => {
    const { selections } = useBakery();
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

    const handleSave = () => {
        const summary = categories.map(({ key, label }) => {
            const item = selections[key];
            return item ? `${label}: \`\`\`${item.name}\`\`\`` : `~No ${label} selected~`;
        }).join('\n');
    
        const message = `Hey! Here's my _order summary_ from *Sugar & Swirl*:\n\n${summary}`;
        const phoneNumber = "918509441630";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="min-h-screen p-2">
        <div className="mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-[#ef476f] mb-15 mt-10 drop-shadow-lg">
            Yayyy, here are your <span className="text-[#ff8fab]" style={{fontFamily: "'Margarine'"}}>choices</span> !
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-16 mb-16">
            {categories.map(({ key, label }) => (
                selections[key] ? (
                <div key={key} className="text-center">
                    <img
                    src={selections[key].image}
                    alt={selections[key].name}
                    className="w-50 p-5 object-cover rounded-xl mx-auto mb-2 shadow-xl hover:shadow-[#ffc2d1]"
                    />
                    <p className="text-xl font-semibold text-[#dd2d4a] mb-3 mt-5">{selections[key].name}</p>
                </div>
                ) : (
                <div key={key} className="text-center text-gray-400 italic">
                    <p>No {label.toLowerCase()} selected</p>
                </div>
                )
            ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
                <button
                className="w-30 bg-[#dd2d4a] text-lg text-white font-bold px-6 py-3 rounded-full hover:bg-[#ffc2d1] transition"
                onClick={() => navigate("/main-page")}
                >
                    Edit
                </button>
                <button
                className="w-30 bg-[#dd2d4a] text-lg text-white font-bold px-6 py-3 rounded-full hover:bg-[#ffc2d1] transition"
                onClick={() => {
                    handleSave();
                    setTimeout(() => navigate("/options-form"), 1000);
                }}
                >
                    Order
                </button>
            </div>

        </div>
        </div>
    );
}

export default SummaryPage;
