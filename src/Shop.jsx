import React from 'react';

const Shop = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col w-full items-center justify-center min-h-screen py-10 px-4 sm:px-8 md:px-12 lg:px-[10%] xl:px-[16%]'>

                <div className='flex w-full items-center justify-end mb-6 md:mb-0'>
                    <a 
                        className='animate-pulse text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center justify-center hover:text-yellow-400 transition-colors duration-300' 
                        href="https://store.rockstargames.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View all<i className="text-lg sm:text-xl md:text-2xl ml-1 ri-arrow-right-up-line"></i>
                    </a>
                </div>
                
                <div className='mt-6 md:mt-10 flex flex-col lg:flex-row w-full h-fit gap-4 md:gap-5'>
                
                    <div
                        className='rounded-lg flex w-full lg:w-[40%] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[60vh] flex-col items-start justify-end gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 bg-cover bg-center relative overflow-hidden'
                        style={{ backgroundImage: "url('/shop-img-1.jpg')" }}
                    >
                        <div className='absolute inset-0 bg-linear-to-t from-purple-900 via-purple-900/50 to-transparent'></div>
                        <p className='font-sans font-bold text-sm sm:text-base md:text-lg bg-yellow-500 px-2 sm:px-3 py-1 rounded-sm h-fit w-fit z-10'>NEW</p>
                        <h4 className='font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold z-10 leading-tight'>Essentials collection Now Available</h4>
                        <a 
                            className='font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' 
                            href="https://store.rockstargames.com/rockstar-collection" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Shop Now<i className="text-sm sm:text-base md:text-lg lg:text-xl ml-2 ri-arrow-right-up-line"></i>
                        </a>
                    </div>
                    

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full lg:w-[60%] h-fit lg:h-[60vh]'>
                        
            
                        <div
                            className='rounded-lg sm:col-span-2 flex flex-col items-end justify-end p-4 sm:p-5 md:p-6 h-[30vh] sm:h-[35vh] lg:h-auto bg-cover bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-2.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-yellow-600 via-yellow-600/50 to-transparent'></div>
                            <a 
                                className='font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-black/40 backdrop-blur-md text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 z-10' 
                                href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=collectible&categories%5Ball%5D=merch" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Shop Now<i className="text-sm sm:text-base md:text-lg lg:text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        

                        <div
                            className='rounded-lg flex flex-col items-end justify-end bg-cover p-4 sm:p-5 md:p-6 h-[30vh] sm:h-[35vh] lg:h-auto bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-3.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-blue-900 via-blue-900/50 to-transparent'></div>
                            <a 
                                className='font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' 
                                href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=caps&title=Caps" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Shop Now<i className="text-sm sm:text-base md:text-lg lg:text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        

                        <div
                            className='rounded-lg flex flex-col items-end justify-end bg-cover p-4 sm:p-5 md:p-6 h-[30vh] sm:h-[35vh] lg:h-auto bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-4.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-rose-900 via-rose-900/50 to-transparent'></div>
                            <a 
                                className='font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' 
                                href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=apparel&title=Apparel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Shop Now<i className="text-sm sm:text-base md:text-lg lg:text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;