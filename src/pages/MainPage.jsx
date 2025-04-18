import React, { useEffect, useState } from "react";
import { useBakery } from "../context/BakeryContext.jsx";
import { getBakeryItems } from "../api/BakeryService";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

function MainPage() {
    const { selections, setSelections } = useBakery();
    const [items, setItems] = useState({ cupcakes: [], cookies: [], cakes: [], donuts: [], macaroons: [] });

    const navigate = useNavigate();

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

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

    const [clicked, setClicked] = useState({
        cupcakes: null,
        cookies: null,
        cakes: null,
        donuts: null,
        macaroons: null
    });

    useEffect(() => {
        getBakeryItems().then((data) => {
        setItems(data);
        });
    }, []);

    const handleSelect = (category, item) => {
        setSelections((prev) => ({ ...prev, [category]: item }));
        setClicked((prev) => ({ ...prev, [category]: item.id }));
    };

    const categories = [
        { key: "cupcakes", label: "pick your cupcake ~" },
        { key: "cookies", label: "pick your cookie ~" },
        { key: "cakes", label: "pick your cake ~" },
        { key: "donuts", label: "pick your donut ~" },
        { key: "macaroons", label: "pick your macaroon ~" }
    ];

    return (
        <div className="min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
            <h2 
            className="text-6xl font-extrabold text-[#ef476f] mb-8 text-center drop-shadow-lg">
            Choose Your <span className="text-[#ff8fab]" style={{fontFamily: "'Margarine"}}>Dream Desserts</span> &lt;3
            </h2>

            {categories.map(({ key, label }) => (
            <div key={key} className="mb-10">
                <h3 className="text-2xl font-semibold text-[#dd2d4a] mb-4">{label}</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                {items[key]?.map((item) => (
                    <div
                    key={item.id}
                    className={`w-28 p-2 rounded-xl cursor-pointer text-center shadow-xl transition-all hover:scale-110 hover:shadow-[#ffe5ec] hover:border-2
                        ${
                        selections[key]?.id === item.id
                            ? "border border-[#ff8fab]"
                            : "border border-gray-200"
                        }
                        ${
                        clicked[key] === item.id
                            ? "opacity-30"
                            : ""
                        }`}
                    onClick={() => handleSelect(key, item)}
                    >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-25 object-cover rounded-lg mx-auto mb-1"
                    />
                    <p className="text-sm text-gray-700">{item.name}</p>
                    </div>
                ))}
                </div>
            </div>
            ))}

            <hr className="my-6 border-t-4 opacity-20 border-[#dd2d4a]" />

            <div className="mt-12 text-center">
            <h3 className="text-5xl font-extrabold text-[#ef476f] text-center drop-shadow-lg mb-10">Your Picks:</h3>
            <div className="flex flex-wrap gap-10 justify-center">
                {categories.map(({ key }) =>
                selections[key] ? (
                    <div key={key} className="text-center mb-5">
                    <img
                        src={selections[key].image}
                        alt={selections[key].name}
                        className="h-40 object-cover mx-auto mb-1"
                    />
                    <p className="text-sm text-gray-600">{selections[key].name}</p>
                    </div>
                ) : null
                )}
            </div>

            <button
            className="bg-[#dd2d4a] rounded-4xl p-3 w-35 text-white font-bold cursor-pointer hover:bg-[#ffc2d1]"
            onClick={() => navigate("/summary-page")}
            >
                Next
            </button>
            </div>
        </div>
        </div>
    );
}

export default MainPage;
