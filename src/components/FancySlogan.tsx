import React from "react";
import { GridGlobe } from "./ui/GridGlobe";
import exp from "constants";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";

const FancySlogan = () => {
    return (
        <div className="p-10 text-2xl flex flex-col space-y-4 relative">
            <div>
                Empowering Communication
                <Highlight className="text-black dark:text-white">
                    Across Boundaries
                </Highlight>
            </div>
            <GridGlobe></GridGlobe>
        </div>
    );
};

export default FancySlogan;
