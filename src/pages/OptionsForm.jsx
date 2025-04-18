import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useEffect } from "react";

const OptionsForm = () => {
    const form = useRef();
    const [result, setResult] = useState("");
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_txv5dp4', 'template_1qlqq5i', form.current, {
            publicKey: 'z0Vjw7ceZuRqahLwe',
        })
        .then(
            () => {
                navigate("/thanks-page");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setResult("Something went wrong. ☹️ Try again!");
            }
        );
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center p-5">
                <h2 className="text-4xl font-bold text-[#ef476f] drop-shadow-md mb-6 mt-5 text-center">
                    💌 Suggest a New <span className="text-[#ff8fab]" style={{fontFamily: "'Margarine"}}>Flavour</span> ! 💌
                </h2>

                <form className="flex flex-col gap-4 mt-10" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name*"
                        required
                        className="p-3 border border-[#ef476f] rounded"
                    />
                    <input
                        type="text"
                        name="dessert_name"
                        placeholder="e.g. Strawberry Cake*"
                        required
                        className="p-3 border border-[#ef476f] rounded"
                    />
                    <input
                        type="url"
                        name="image_url"
                        placeholder="Optional image link"
                        className="p-3 border border-[#ef476f] rounded"
                    />
                    <textarea
                        name="notes"
                        placeholder="Anything else you'd like to add?"
                        rows="3"
                        className="p-3 border border-[#ef476f] rounded"
                    />

                    <button
                        type="submit"
                        className="bg-[#ff8fab] text-white font-bold py-2 px-4 rounded hover:bg-[#ffc2d1] transition cursor-pointer"
                    >
                        Submit Suggestion
                    </button>
                </form>

                <span className="text-green-600 mt-4">{result}</span>

                <div className="flex h-[10vh] items-end">
                <p className="max-w-3xl text-center mt-4 mx-auto text-md text-gray-600 italic">
                    Designed with love, pink frosting, and sprinkles &lt;3
                </p>
                </div>
            </div>

            {/* <div className="flex h-[20vh] items-end">
                <p className="max-w-3xl text-center mt-4 mx-auto text-md text-gray-600 italic">
                    Designed with love, pink frosting, and sprinkles &lt;3
                </p>
            </div> */}
        </>
    );
};

export default OptionsForm;
