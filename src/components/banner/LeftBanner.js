import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

import resumePdf from "./Jayant_Gupta_Resume.pdf";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Competitive Coder", "Full Stack Developer", "CSE Scholar"],
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
                    <span className="text-designColor capitalize">Jayant</span>
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
                    Greetings! I'm Jayant Kumar Gupta, a dedicated Computer
                    Science student. Currently pursuing my Bachelor's. I'm a
                    proficient web developer, skilled on Next.js, React.js,
                    MySQL, Node.js and MongoDB. With a track record of excelling
                    on coding platforms like LeetCode, Codeforces, and Codechef,
                    I'm a skilled problem solver. My proficiency spans
                    languages, frameworks, and databases, allowing me to create
                    comprehensive solutions. Explore my portfolio to witness my
                    coding journey turning concepts into reality.
                </p>
                <a
                    href={resumePdf}
                    rel="noreferrer"
                    download="Jayant Gupta Resume.pdf"
                    target="_blank"
                    title="My Resume"
                    className="cursor-pointer text-red-500 w-fit font-bold"
                >
                    My Resume
                </a>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
};

export default LeftBanner;
