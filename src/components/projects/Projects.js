import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree, ekartProjectImage, filmyVerseImage } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {

    const projects = [
        {
            title: 'Epic Store',
            des: '',
            liveUrl: 'https://epic-cart-stripe.vercel.app/',
            githubUrl: '',
            image: ekartProjectImage
        },
        {
            title: 'Filmy verse',
            des: 'A huge collection of movies and tv series. A website where you can track trending and top rated movies.',
            liveUrl: 'https://filmy-verse.netlify.app/',
            githubUrl: '',
            image: filmyVerseImage
        }
    ]

    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="SHOPIFY"
                    des="A E-commerce website where you can buy Cocaine, Ammunition, Heroins, Drugs, ...etc in discounted price and its also good to be seller here. The world is yours `burn it`."
                    src={ekartProjectImage}
                />
                <ProjectsCard
                    title="Copy Assignment"
                    des="Facing problems in sharing assignemnts in lab? No worries we are giving you a flexible way to float assignemnts among your friends."
                    src={projectTwo}
                />
                <ProjectsCard
                    title="Filmy-verse"
                    des="Don't watch those boring movies again and again, get yourself updated around trending movies and tv-shows with Filmy-verse!"
                    src={projectThree}
                />
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectThree}
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectOne}
                />
                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectTwo}
                />
            </div>
        </section>
    );
};

export default Projects;
