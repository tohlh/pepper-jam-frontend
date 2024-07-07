import { cn } from "@/utils/cn";
import exp from "constants";
import React from "react";
import { FaSpinner } from "react-icons/fa";

const BorderButton = ({
    title,
    icon,
    position,
    handleClick,
    type,
    loading,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: (event: React.FormEvent) => void;
    otherClasses?: string;
    type?: "submit" | "button";
    loading: boolean;
}) => {

    const btnIcon = loading ? <FaSpinner className="animate-spin" /> : icon;
    return (
        <button
            className={cn(
                "p-[1.5px] relative px-2 py-1 rounded-md border border-black bg-white text-black text-sm transition duration-200",
                !loading ? "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]" : "opacity-50 cursor-not-allowed",
            )}

            type={type}
            disabled={loading}
            onClick={handleClick}
        >
            <div className="absolute rounded-lg" />
            <div className="px-2 inline-flex justify-center items-center gap-2">

                {position === "left" && btnIcon}
                {title}
                {position === "right" && btnIcon}
            </div>
        </button>
    );
};
export default BorderButton;
