import React, { useEffect, useState } from "react";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/charactersData.json")
            .then((res) => res.json())
            .then((data) => setCharacters(data))
            .catch((err) => {
                console.log("Your JSON decided to die:", err);
            });
    }, []);

    return (
        <div className="text-white w-full px-4 sm:px-6 md:px-8 lg:px-[10%] py-12 sm:py-16 md:py-24 lg:py-32 xl:py-50">
            <h2 className="animate-pulse uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center tracking-wide">
                Characters
            </h2>

            <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {characters.map((c) => (
                    <div
                        key={c.id}
                        className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 rounded-lg bg-neutral-900 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-800"
                    >
                        {c.image ? (
                            <img
                                src={c.image}
                                alt={c.name}
                                className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-pink-400 shadow-lg transition-all duration-300 hover:rotate-3"
                            />
                        ) : (
                            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-neutral-300 border-2 border-neutral-600">
                                no image
                            </div>
                        )}

                        <div className="flex flex-col text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-1 sm:mb-2">{c.name}</h3>
                            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;