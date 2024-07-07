import React from "react";

const BorderButton = ({
    title,
    icon,
    position,
    handleClick,
    type,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: (event: React.FormEvent) => void;
    otherClasses?: string;
    type?: "submit" | "button";
}) => {
    return (
        <button
            className="p-[1.5px] relative px-2 py-1 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            type={type}
            onClick={handleClick}
        >
            <div className="absolute rounded-lg" />
            <div className="px-2 inline-flex justify-center items-center gap-2">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </div>
        </button>
    );
};
export default BorderButton;
