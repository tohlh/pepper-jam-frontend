import React from "react";
import { FlipWords } from "./ui/FlipWords";

const words = ["Communication", "Connections", "Understanding"];

const FancySlogan = () => {
    return (
        <div className="p-5 text-2xl flex flex-col space-y-4 relative">
            <div className="text-3xl mx-auto font-medium text-neutral-600">
                Empowering Global
                <FlipWords words={words} />
            </div>
        </div>
    );
};

export default FancySlogan;
