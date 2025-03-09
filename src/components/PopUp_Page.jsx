import React, { useEffect, useState } from 'react';

const PopUp_Page = () => {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <>
            <div>
                {showPopup && (
                    <div className='fixed inset-0 bg-black/30 flex items-center justify-center w-full'>
                        <div className='relative bg-white/30 z-50 h-120 w-[90%] rounded-2xl shadow-lg max-md:-mt-20 text-lg max-md:text-sm'>
                            <button
                                onClick={() => setShowPopup(false)}
                                className='absolute top-3 right-3 bg-transparent cursor-pointer text-xl'
                            >
                                ✖
                            </button>
                            <h1 className='text-3xl font-bold mb-4 text-center mt-5 max-md:mt-15 max-lg'>
                                Welcome to Website Name
                            </h1>
                            <p className='mb-2 font-thin ml-20 mt-10 mr-20 max-md:ml-5 max-md:mr-5 max-md:mb-0 max-lg:mt-5'>
                                Greetings from our <strong>Astrology Team</strong> and <strong>Development Team</strong>! We are delighted to have you here.
                            </p>
                            <p className='mb-2 font-thin ml-20 mt-10 mr-20 max-md:ml-5 max-md:mr-5 max-md:mb-0 max-lg:mt-5'>
                                Astrology is a vast and intricate science, but it's important to understand that predicting the future and past comes with uncertainties. While our calculations are based on ancient wisdom and precise algorithms, no one can fully know a person or their destiny with absolute certainty.
                            </p>
                            <p className='font-thin ml-20 mt-10 mr-20 max-md:ml-5 max-md:mr-5 max-md:mb-0 max-lg:mt-5'>
                                Our predictions have an estimated accuracy of <strong>70-80%</strong>. Various factors can influence outcomes, and interpretations may vary. We encourage you to use this guidance as a reference rather than an absolute truth.
                            </p>
                            <p className=' font-thin ml-20 mt-10 max-md:ml-5 max-md:mr-5 max-md:mb-0'>
                                Enjoy exploring your Kundali, and may this journey bring you insight and clarity!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default PopUp_Page;