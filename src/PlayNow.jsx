import React from 'react';
import Video from './Video';

const PlayNow = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Video />
            </div>
            <div className="absolute bottom-30 right-50 z-50 animate-bounce">
                <a href='https://www.rockstargames.com/VI' target='blank' className='text-4xl cursor-pointer text-white '>play Now <i className="text-5xl ri-arrow-right-up-line"></i></a>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-screen w-screen text-white">
                <div className="text-[10vw] uppercase leading-none font-bold">grand</div>
                <div className="flex justify-center items-center text-[9vw] uppercase leading-none font-bold">
                    theft
                    <div className="h-[8vw] mt-10 w-[15vw] rounded-3xl overflow-hidden mx-3">
                        <Video />
                    </div>
                </div>
                <div className="text-[10vw] uppercase leading-none font-bold">auto vi</div>

            </div>
        </div>
    );
};

export default PlayNow;
