import React from "react";
import BorderButton from "./ui/BorderButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center relative my-8 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Red Hot Pepper Jam 🥵
                    </p>
                    <h2 className="tracking-widest text-sm text-center text-black-100 w-full">
                        Our project enhances multimedia accessibility by
                        translating spoken content into different languages
                        using the original speaker's voice. We integrate
                        American Sign Language (ASL) into videos to ensure
                        inclusivity and accessibility for diverse audiences.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
