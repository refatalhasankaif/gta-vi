import React from 'react';

const About = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center py-10 md:py-16 lg:py-20'>
            <div className='flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-[15%] xl:px-[20%] w-full gap-6 md:gap-8 lg:gap-0'>
                
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-[40%] flex items-center justify-center'>
                    <div className='border-2 border-white/20 rounded-lg overflow-hidden w-full'>
                        <img 
                            className='animate-pulse w-full h-auto' 
                            src="/girlCard.png" 
                            alt="GTA VI Character" 
                        />
                    </div>
                </div>
                
                <div className='text-white w-full lg:w-[60%] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 h-full'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                        Grand Theft Auto VI
                    </h1>
                    <p className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 font-sans text-sm sm:text-base md:text-lg text-[#e4e4e4] leading-relaxed'>
                        Grand Theft Auto VI is an open-world action-adventure experience set in a modern reimagining of Vice City and its surrounding regions. It follows two main protagonists as they navigate criminal networks, personal conflicts, and the consequences of their choices. The game blends a large, dynamic map with dense urban environments, coastal towns, and wild backcountry areas filled with side activities, emergent events, and interactive characters. Players can pursue story missions, explore freely, participate in heists, customize vehicles, and engage with an evolving online ecosystem. With cutting-edge visuals, lifelike physics, and a narrative shaped by player decisions, GTA VI aims to deliver a richly detailed world that feels vibrant, dangerous, and constantly in motion.
                    </p>
                    <a 
                        href="https://www.rockstargames.com/VI" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='cursor-pointer w-fit mt-4 sm:mt-5 md:mt-6 flex items-center justify-center hover:bg-white transition-all duration-700 hover:text-black text-white text-lg sm:text-xl md:text-2xl border-b-2 pl-0 p-2 gap-1'
                    >
                        Learn more<i className="text-lg sm:text-xl md:text-2xl ri-arrow-right-up-line"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;