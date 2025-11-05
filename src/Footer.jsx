import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaTiktok, FaDiscord, FaTwitch, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative min-h-screen w-full font-sans">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/footer.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-80"></div>
            </div>

            <div className="relative z-10 text-white flex flex-col items-center justify-end min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">

                <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-8 md:gap-10 lg:gap-16 w-full max-w-7xl">
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
                        <img
                            src="/rockstar.png"
                            alt="Rockstar Games Logo"
                            className="w-24 sm:w-28 md:w-32 lg:w-40"
                        />
                        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                            Rockstar Games is a leading developer and publisher of interactive entertainment,
                            known for creating immersive open-world games with stunning visuals and captivating stories.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl">Corporate</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                            <a href="#" className="hover:text-white transition-colors">Careers</a>
                            <a href="#" className="hover:text-white transition-colors">Community Resources</a>
                            <a href="#" className="hover:text-white transition-colors">Subscribe</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Legal</a>
                        </div>
                    </div>


                    <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl">Follow Us</h3>
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl text-white">
                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rockstargames" className="hover:text-pink-500 transition-colors">
                                <FaInstagram />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://x.com/rockstargames" className="hover:text-blue-400 transition-colors">
                                <FaTwitter />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/rockstargames" className="hover:text-red-500 transition-colors">
                                <FaYoutube />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rockstargames" className="hover:text-blue-600 transition-colors">
                                <FaFacebookF />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@rockstargames" className="hover:text-pink-400 transition-colors">
                                <FaTiktok />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/rockstargames" className="hover:text-indigo-500 transition-colors">
                                <FaDiscord />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/rockstargames" className="hover:text-purple-500 transition-colors">
                                <FaTwitch />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 mt-8 md:mt-10 w-full">
                    <div className="text-center text-gray-400 text-xs sm:text-sm">
                        &copy; {new Date().getFullYear()} Rockstar Games. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;