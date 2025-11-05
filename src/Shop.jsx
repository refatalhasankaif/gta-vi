import React from 'react';

const Shop = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col w-full items-center justify-center h-screen px-[16%]'>
                <div className='flex w-full items-center justify-end'>
                    <a className='animate-pulse text-4xl flex items-center justify-center' href="https://store.rockstargames.com/" target="_blank" rel="noopener noreferrer">View all<i className="text-2xl ri-arrow-right-up-line"></i></a>
                </div>
                <div className='mt-10 flex w-full h-fit gap-5'>
                    <div
                        className='rounded-lg flex w-[40%] h-[60vh] flex-col items-start justify-end gap-3 p-6 bg-cover bg-center relative overflow-hidden'
                        style={{ backgroundImage: "url('/shop-img-1.jpg')" }}
                    >
                        <div className='absolute inset-0 bg-linear-to-t from-purple-900 via-purple-900/50 to-transparent'></div>
                        <p className='font-sans font-bold text-lg bg-yellow-500 px-3 py-1 rounded-sm h-fit w-fit z-10'>NEW</p>
                        <h4 className='font-sans text-6xl font-extrabold z-10'>Essentials collection Now Available</h4>
                        <a className='font-sans text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' href="https://store.rockstargames.com/rockstar-collection" target="_blank" rel="noopener noreferrer">
                            Shop Now<i className="text-xl ml-2 ri-arrow-right-up-line"></i>
                        </a>
                    </div>
                    <div className='grid-cols-2 gap-5 grid w-[60%] h-[60vh]'>
                        <div
                            className='rounded-lg col-span-2 flex flex-col items-end justify-end p-6 bg-cover bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-2.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-yellow-600 via-yellow-600/50 to-transparent'></div>
                            <a className='font-sans text-xl font-semibold bg-black/40 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 z-10' href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=collectible&categories%5Ball%5D=merch" target="_blank" rel="noopener noreferrer">
                                Shop Now<i className="text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div
                            className='rounded-lg flex flex-col items-end justify-end bg-cover p-6 bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-3.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-blue-900 via-blue-900/50 to-transparent'></div>
                            <a className='font-sans text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=caps&title=Caps" target="_blank" rel="noopener noreferrer">
                                Shop Now<i className="text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div
                            className='rounded-lg flex flex-col items-end justify-end bg-cover p-6 bg-center relative overflow-hidden'
                            style={{ backgroundImage: "url('/shop-img-4.jpg')" }}
                        >
                            <div className='absolute inset-0 bg-linear-to-t from-rose-900 via-rose-900/50 to-transparent'></div>
                            <a className='font-sans text-xl font-semibold bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10' href="https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=apparel&title=Apparel" target="_blank" rel="noopener noreferrer">
                                Shop Now<i className="text-xl ml-2 ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;