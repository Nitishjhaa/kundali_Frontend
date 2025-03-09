import React, { useEffect, useState } from 'react';

const PopUp_Page = () => {
    const [showPopup, setShowPopup] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowPopup(false);
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
        <div>
            {showPopup && (
                <div className='h-screen w-full bg-[#000000]/30'>
                    <div className='fixed top-[50%] left-[50%] bg-white/30 z-[1000] p-40 rounded-2xl shadow-lg translate-x-[-50%] translate-y-[-50%]'>
                        <button
                            onClick={() => setShowPopup(false)}
                            className='absolute top-2.5 right-2.5 bg-transparent cursor-pointer'
                        >
                            ✖
                        </button>
                        <h1>
                           Welcome to <strong> Know Your Unknown...</strong>

                        </h1>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default PopUp_Page;
