import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Competitive Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm{" "}
                    <span className="text-designColor capitalize">
                        Jayant
                    </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span className="text-[#155b29]">{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores quas voluptatibus id. Laborum at laudantium iste
                    molestias, sunt officia ullam tempore, perspiciatis dolores
                    architecto porro, asperiores explicabo distinctio magni
                    odit!
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
};

export default LeftBanner;
