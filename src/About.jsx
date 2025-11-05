import React from 'react';

const About = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center px-[20%] w-full h-fit'>
                <div className='border-2  w-[40%]'>
                    <img className='animate-pulse' src="/girlCard.png" alt="" />
                </div>
                <div className='text-white w-[60%] flex flex-col p-10 h-full'>
                    <h1 className='text-5xl '>Grand Theft Auto VI</h1>
                    <p className='mt-10 font-sans text-[#e4e4e4]' >Grand Theft Auto VI is an open-world action-adventure experience set in a modern reimagining of Vice City and its surrounding regions. It follows two main protagonists as they navigate criminal networks, personal conflicts, and the consequences of their choices. The game blends a large, dynamic map with dense urban environments, coastal towns, and wild backcountry areas filled with side activities, emergent events, and interactive characters. Players can pursue story missions, explore freely, participate in heists, customize vehicles, and engage with an evolving online ecosystem. With cutting-edge visuals, lifelike physics, and a narrative shaped by player decisions, GTA VI aims to deliver a richly detailed world that feels vibrant, dangerous, and constantly in motion.</p>
                    <a href="https://www.rockstargames.com/VI" target="blank" className='cursor-pointer w-fit mt-5 flex items-center justify-center hover:bg-white transition-all duration-700 hover:text-black text-white text-2xl border-b-2 pl-0 p-2'>Learn more<i className="text-2xl ri-arrow-right-up-line"></i></a>
                </div>
            </div>
        </div>
    );
};

export default About;