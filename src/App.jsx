import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import 'remixicon/fonts/remixicon.css';
import About from "./About";
import Shop from "./Shop";
import PlayNow from "./PlayNow";
import Characters from "./Characters";
import Footer from "./Footer";

const App = () => {

    const aboutRef = useRef(null);
    const shopRef = useRef(null);
    const playRef = useRef(null);
    const charactersRef = useRef(null);
    const footerRef = useRef(null);


    const audioRef = useRef(null);

    const handleAudioPlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log("Audio autoplay prevented:", error);
            });
        }
    };

    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [volume, setVolume] = useState(0.3);

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

    let [showContent, setShowContent] = useState(false);

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
                        document.querySelector(".svg").remove();
                        setShowContent(true);
                        this.kill();
                    }
                }
            })
    });

    useGSAP(() => {
        const main = document.querySelector(".main");

        main?.addEventListener("mousemove", function (e) {
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

        })
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
            {
                showContent && <div className="main overflow-hidden w-full">
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

                    {showContent && (
                        <div className="fixed bottom-5 left-5 z-50 flex items-center gap-3">
                            <button
                                onClick={toggleMute}
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
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
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
                                    />
                                    <span className="text-white text-xs min-w-8">{Math.round(volume * 100)}%</span>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="landing overflow-hidden w-full h-screen">
                        <div className="navbar fixed z-50 flex items-center justify-around px-20 py-10 w-full h-10 top-0 left-0 bg-linear-to-b from-black/80 to-transparent">
                            <div className="logo">
                                <h1 className="text-4xl text-white"><a href="https://www.rockstargames.com/" target="_blank">Rockstar</a></h1>
                            </div>
                            <div className="flex text-xl gap-8 text-white">
                                <span
                                    onClick={() => window.location.reload()}
                                    className="cursor-pointer"
                                >
                                    Home
                                </span>

                                <span
                                    onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    className="cursor-pointer"
                                >
                                    About
                                </span>

                                <span
                                    onClick={() => shopRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    className="cursor-pointer"
                                >
                                    Shop
                                </span>

                                <span
                                    onClick={() => playRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    className="cursor-pointer"
                                >
                                    Play Now
                                </span>

                                <span
                                    onClick={() => charactersRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    className="cursor-pointer"
                                >
                                    Characters
                                </span>
                            </div>

                        </div>
                        <div className="imagesdiv relative w-full h-screen">
                            <img
                                className="sky scale-[1.2] absolute top-0 left-0 w-full h-full object-cover z-10"
                                src="/sky.png"
                                alt="" />
                            <img
                                className="absolute scale-[1.1] bg top-0 left-0 w-full h-full object-cover z-10"
                                src="/bg.png"
                                alt="" />
                            <img
                                className="mainImg absolute z-20 bottom-0 left-1/2 -translate-x-1/2 h-auto max-h-full w-auto scale-[0.90] origin-bottom"
                                src="/mainImg.png"
                                alt=""
                            />
                            <img
                                className="Img18 absolute z-20 right-[38%] top-[50%] w-20 origin-bottom"
                                src="/logo18.png"
                                alt=""
                            />
                            <div className="text text-[160px] flex flex-col gap-40 z-10 leading-0 text-white absolute left-1/2 top-40 -translate-x-1/2">
                                <h1 className="-ml-20">grand</h1>
                                <h1 className="ml-30">theft</h1>
                                <h1 className="ml-2">auto</h1>
                            </div>
                        </div>
                        <div className="btmbar z-20 items-end justify-end flex flex-col absolute bottom-0 h-50 w-full px-10 py-4 bg-linear-to-t from-black to-transparent">
                            <div
                                className="flex hover:cursor-pointer animate-bounce gap-1 items-center text-white text-2xl"
                                onClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
                            >
                                <i className="ri-arrow-down-double-fill"></i>
                                <h3 className="text-lg">Scroll Down</h3>
                            </div>

                            <a className="" href="https://www.playstation.com/en-gb/ps5/" target="_blank"><img className="animate-pulse duration-500 absolute h-16 bottom-5 left-1/2 -translate-x-1/2" src="ps5.png" alt="" /></a>
                        </div>
                    </div>
                    <div ref={aboutRef} className="min-h-screen">
                        <About />
                    </div>

                    <div ref={shopRef} className="min-h-screen">
                        <Shop />
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
            }

        </div>
    );
};

export default App;