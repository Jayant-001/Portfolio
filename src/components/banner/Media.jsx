import React from "react";
import { AiFillFile } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { MdRebaseEdit } from "react-icons/md";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import resumePdf from "./Jayant-Gupta-Resume.pdf";

const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me on
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Jayant-001"
                        rel="noreferrer"
                        target="_blank"
                        title="Github"
                    >
                        <span className="bannerIcon">
                            <FaGithub />
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jayant-cse/"
                        rel="noreferrer"
                        target="_blank"
                        title="LinkedIn"
                    >
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </a>
                    <a
                        href={resumePdf}
                        rel="noreferrer"
                        download="Jayant Gupta Resume.pdf"
                        target="_blank"
                        title="My Resume"
                    >
                        <span className="bannerIcon">
                            <AiFillFile />
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span
                        className="bannerIcon"
                        title="Data Structure and Algorithms"
                    >
                        <MdRebaseEdit />
                    </span>
                    <span className="bannerIcon" title="React JS">
                        <FaReact />
                    </span>
                    <span className="bannerIcon" title="Next JS">
                        <SiNextdotjs />
                    </span>
                    <span className="bannerIcon" title="Tailwind">
                        <SiTailwindcss />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;
