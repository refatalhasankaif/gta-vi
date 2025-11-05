import React, { useEffect, useState, useRef } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        fetch("/galleryData.json")
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((err) => {
                console.log("Gallery JSON failed to load:", err);
            });
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        const container = scrollContainerRef.current;
        const cardWidth = container.offsetWidth;
        container.scrollTo({
            left: cardWidth * index,
            behavior: "smooth"
        });
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollLeft;
            const cardWidth = container.offsetWidth;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setCurrentIndex(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="text-white w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-linear-to-br from-gray-900 via-black to-purple-950 relative overflow-hidden">

            <div className="absolute inset-0 bg-linear-to-b from-purple-900/30 via-transparent to-pink-900/30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="animate-pulse uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide bg-linear-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                        Gallery
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400">
                        Witness the next evolution of Grand Theft Auto
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        GTA VI - Coming 2025
                    </p>
                </div>

                <div className="relative">

                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full items-center justify-center text-white text-2xl lg:text-3xl transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full items-center justify-center text-white text-2xl lg:text-3xl transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                        <i className="ri-arrow-right-s-line"></i>
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing scroll-smooth"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className="shrink-0 w-full snap-center px-2 sm:px-4 md:px-6"
                            >
                                <div className="relative group w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-xl overflow-hidden">
                                  
                                    <div className="absolute -inset-2 bg-linear-to-r from-purple-600 via-pink-500 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-90 blur-2xl transition-all duration-700"></div>
                                    <div className="absolute -inset-1 bg-linear-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"></div>
                                    
                                    <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-purple-500/20 group-hover:border-pink-400/50 transition-all duration-500 shadow-2xl group-hover:shadow-pink-500/50">
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                            draggable="false"
                                        />
                                        
                                      
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        

                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white drop-shadow-2xl">
                                                {image.title}
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow-xl">
                                                {image.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-linear-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg shadow-pink-500/50'
                                        : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-linear-to-r hover:from-purple-400 hover:to-pink-400 hover:w-6'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 font-bold text-lg sm:text-xl">{currentIndex + 1}</span>
                        <span className="text-gray-500 mx-2">/</span>
                        <span className="text-gray-400">{images.length}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;