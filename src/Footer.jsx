import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaTiktok, FaDiscord, FaTwitch, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative h-screen w-full font-sans">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/footer.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-80"></div>
            </div>
            <a
                href="https://github.com/refatalhasankaif"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[pricedown] z-50 absolute top-70 right-30 flex items-center gap-2 text-white font-bold text-5xl animate-bounce hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
                <FaGithub className="text-9xl" />GitHub
            </a>

            <div className="relative z-10 text-white flex flex-col items-center justify-end h-full p-10">

                <div className="ml-60 flex flex-col md:flex-row items-end md:justify-between gap-10 md:gap-0 w-full">
                    <div className="md:w-1/3 flex flex-col gap-4">
                        <img
                            src="/rockstar.png"
                            alt="Rockstar Games Logo"
                            className="w-32 md:w-40"
                        />
                        <p className="text-sm md:text-base text-gray-300">
                            Rockstar Games is a leading developer and publisher of interactive entertainment,
                            known for creating immersive open-world games with stunning visuals and captivating stories.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Corporate</h3>
                        <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm md:text-base">
                            <span>Contact</span>
                            <span>Careers</span>
                            <span>Community Resources</span>
                            <span>Subscribe</span>
                            <span>Privacy</span>
                            <span>Cookie Settings</span>
                            <span>Cookie Policy</span>
                            <span>Legal</span>
                        </div>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <div className="flex flex-wrap gap-4 text-2xl text-white">
                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rockstargames"><FaInstagram /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://x.com/rockstargames"><FaTwitter /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/rockstargames"><FaYoutube /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rockstargames"><FaFacebookF /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@rockstargames"><FaTiktok /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/rockstargames"><FaDiscord /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/rockstargames"><FaTwitch /></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 mt-10">
                    <div className="text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Rockstar Games. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
