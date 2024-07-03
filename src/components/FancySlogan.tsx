import React from "react";
import { GridGlobe } from "./ui/GridGlobe";
import exp from "constants";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/FlipWords";

const words = ["Communication", "Connections", "Understanding"];

const FancySlogan = () => {
    return (
        <div className="p-10 text-2xl flex flex-col space-y-4 relative">
            <div className="text-3xl mx-auto font-medium text-neutral-600">
                Empowering Global
                <FlipWords words={words} />
            </div>
        </div>
    );
};

export default FancySlogan;
