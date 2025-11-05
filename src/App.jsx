import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import 'remixicon/fonts/remixicon.css';
import About from "./About";
import Shop from "./Shop";
import Gallery from "./Gallery";
import PlayNow from "./PlayNow";
import Characters from "./Characters";
import Footer from "./Footer";

const App = () => {
    const aboutRef = useRef(null);
    const shopRef = useRef(null);
    const galleryRef = useRef(null);
    const playRef = useRef(null);
    const charactersRef = useRef(null);
    const footerRef = useRef(null);
    const audioRef = useRef(null);

    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [showContent, setShowContent] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleAudioPlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log("Audio autoplay prevented:", error);
            });
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const toggleMute = () => {
        setShowVolumeSlider(!showVolumeSlider);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        })
            .to(".vi-mask-group", {
                scale: 10,
                duration: 2,
                delay: -1.8,
                ease: "Expo.easeInOut",
                transformOrigin: "50% 50%",
                opacity: 0,
                onUpdate: function () {
                    if (this.progress() >= 0.9) {
                        document.querySelector(".svg")?.remove();
                        setShowContent(true);
                        this.kill();
                    }
                }
            })
    });

    useGSAP(() => {
        const main = document.querySelector(".main");

        const handleMouseMove = (e) => {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 50;

            gsap.to(".imagesdiv .text", {
                x: `${-xMove * 0.5}px`,
                duration: 0.6,
                ease: "power2.out"
            });
            gsap.to(".sky", {
                x: `${xMove * 0.3}px`,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(".bg", {
                x: `${-xMove * 0.2}px`,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(".mainImg", {
                x: `${xMove * 0.4}px`,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(".Img18", {
                x: `${xMove * 2}px`,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        main?.addEventListener("mousemove", handleMouseMove);

        return () => {
            main?.removeEventListener("mousemove", handleMouseMove);
        };
    }, [showContent]);

    return (
        <div>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-40 w-full h-screen overflow-hidden bg-black">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="24"
                                    fontWeight="900"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                    letterSpacing="2"
                                >
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>
            {showContent && (
                <div className="main overflow-hidden w-full">
                    <audio
                        ref={audioRef}
                        loop
                        autoPlay
                        onCanPlay={handleAudioPlay}
                        onLoadedMetadata={() => {
                            if (audioRef.current) {
                                audioRef.current.volume = volume;
                            }
                        }}
                    >
                        <source src="/bg-music.mp3" type="audio/mpeg" />
                    </audio>

                    <div className="fixed bottom-4 sm:bottom-5 left-4 sm:left-5 z-50 flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={toggleMute}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl transition-all duration-300 hover:scale-110"
                        >
                            {volume === 0 ? (
                                <i className="ri-volume-mute-fill"></i>
                            ) : volume < 0.5 ? (
                                <i className="ri-volume-down-fill"></i>
                            ) : (
                                <i className="ri-volume-up-fill"></i>
                            )}
                        </button>

                        {showVolumeSlider && (
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 flex items-center gap-2 transition-all duration-300">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-16 sm:w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                                <span className="text-white text-xs min-w-8">{Math.round(volume * 100)}%</span>
                            </div>
                        )}
                    </div>

                    <div className="landing overflow-hidden w-full h-screen">
                        <div className="navbar fixed z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 w-full top-0 left-0 bg-linear-to-b from-black/80 to-transparent">
                            <div className="logo">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white">
                                    <a href="https://www.rockstargames.com/" target="_blank" rel="noopener noreferrer">
                                        Rockstar
                                    </a>
                                </h1>
                            </div>

                            <div className="hidden lg:flex items-center text-base xl:text-xl gap-6 xl:gap-8 text-white">
                                <span onClick={() => window.location.reload()} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Home
                                </span>
                                <span onClick={() => scrollToSection(aboutRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    About
                                </span>
                                <span onClick={() => scrollToSection(shopRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Shop
                                </span>
                                <span onClick={() => scrollToSection(galleryRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Gallery
                                </span>
                                <span onClick={() => scrollToSection(playRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Play Now
                                </span>
                                <span onClick={() => scrollToSection(charactersRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Characters
                                </span>
                                <a href="https://github.com/refatalhasankaif" target="blank" className="items-center flex cursor-pointer hover:text-yellow-400 transition-colors">
                                    <i className="text-5xl ri-github-line"></i>
                                </a>
                            </div>

                            <button
                                onClick={toggleMenu}
                                className="lg:hidden text-white text-3xl sm:text-4xl z-50 transition-transform duration-300 hover:scale-110"
                            >
                                {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
                            </button>
                        </div>

                        {isMenuOpen && (
                            <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 sm:gap-8 text-white text-xl sm:text-2xl md:text-3xl">
                                <span onClick={() => { window.location.reload(); setIsMenuOpen(false); }} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Home
                                </span>
                                <span onClick={() => scrollToSection(aboutRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    About
                                </span>
                                <span onClick={() => scrollToSection(shopRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Shop
                                </span>
                                <span onClick={() => scrollToSection(galleryRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Gallery
                                </span>
                                <span onClick={() => scrollToSection(playRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Play Now
                                </span>
                                <span onClick={() => scrollToSection(charactersRef)} className="cursor-pointer hover:text-yellow-400 transition-colors">
                                    Characters
                                </span>
                                <a href="https://github.com/refatalhasankaif" target="blank" className="items-center flex cursor-pointer hover:text-yellow-400 transition-colors">
                                    <i className="text-5xl ri-github-line"></i>
                                </a>
                            </div>
                        )}

                        <div className="imagesdiv relative w-full h-screen">
                            <img
                                className="sky scale-[1.2] absolute top-0 left-0 w-full h-full object-cover z-10"
                                src="/sky.png"
                                alt=""
                            />
                            <img
                                className="absolute scale-[1.1] bg top-0 left-0 w-full h-full object-cover z-10"
                                src="/bg.png"
                                alt=""
                            />
                            <img
                                className="mainImg absolute z-20 bottom-0 left-1/2 -translate-x-1/2 h-auto max-h-full w-auto scale-[0.70] sm:scale-[0.80] md:scale-[0.85] lg:scale-[0.90] origin-bottom"
                                src="/mainImg.png"
                                alt=""
                            />
                            <img
                                className="Img18 absolute z-20 right-[30%] sm:right-[35%] md:right-[38%] top-[45%] sm:top-[48%] md:top-[50%] w-12 sm:w-16 md:w-20 origin-bottom"
                                src="/logo18.png"
                                alt=""
                            />
                            <div className="text text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[160px] flex flex-col gap-5 z-10 leading-none text-white absolute left-1/2 top-20 sm:top-50 md:top-32 lg:top-40 -translate-x-1/2">
                                <h1 className="-ml-4 sm:-ml-8 md:-ml-12 lg:-ml-20">grand</h1>
                                <h1 className="ml-6 sm:ml-12 md:ml-20 lg:ml-30">theft</h1>
                                <h1 className="ml-1 sm:ml-2">auto</h1>
                            </div>
                        </div>

                        <div className="btmbar z-20 items-end justify-end flex flex-col absolute bottom-0 h-32 sm:h-40 md:h-44 lg:h-50 w-full px-4 sm:px-6 md:px-10 py-3 sm:py-4 bg-linear-to-t from-black to-transparent">
                            <div
                                className="flex hover:cursor-pointer animate-bounce gap-1 items-center text-white text-base sm:text-lg md:text-xl lg:text-2xl"
                                onClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
                            >
                                <i className="text-lg sm:text-xl md:text-2xl ri-arrow-down-double-fill"></i>
                                <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg">Scroll Down</h3>
                            </div>

                            <a href="https://www.playstation.com/en-gb/ps5/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="animate-pulse duration-500 absolute h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2"
                                    src="ps5.png"
                                    alt="PlayStation 5"
                                />
                            </a>
                        </div>
                    </div>

                    <div ref={aboutRef} className="min-h-screen">
                        <About />
                    </div>

                    <div ref={shopRef} className="min-h-screen">
                        <Shop />
                    </div>

                    <div ref={galleryRef} className="min-h-screen">
                        <Gallery />
                    </div>

                    <div ref={playRef} className="min-h-screen">
                        <PlayNow />
                    </div>

                    <div ref={charactersRef} className="min-h-screen">
                        <Characters />
                    </div>

                    <div ref={footerRef}>
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;