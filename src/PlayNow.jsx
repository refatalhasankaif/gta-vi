import React from 'react';
import Video from './Video';

const PlayNow = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Video />
            </div>
            <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-10 md:bottom-16 md:right-16 lg:bottom-20 lg:right-32 xl:bottom-30 xl:right-50 z-50 animate-bounce">
                <a 
                    href='https://www.rockstargames.com/VI' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300'
                >
                    <span>Play Now</span>
                    <i className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ri-arrow-right-up-line"></i>
                </a>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-screen w-screen text-white px-4">

                <div className="text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] uppercase leading-none font-bold">
                    Grand
                </div>

                <div className="flex justify-center items-center text-[14vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] uppercase leading-none font-bold">
                    <span>Theft</span>
                    <div className="h-[12vw] sm:h-[10vw] md:h-[9vw] lg:h-[8vw] w-[20vw] sm:w-[18vw] md:w-[16vw] lg:w-[15vw] rounded-2xl sm:rounded-3xl overflow-hidden mx-2 sm:mx-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                        <Video />
                    </div>
                </div>
                <div className="text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] uppercase leading-none font-bold">
                    Auto VI
                </div>
            </div>
        </div>
    );
};

export default PlayNow;