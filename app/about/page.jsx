"use client"

import Image from "next/image";
import { ImLocation, ImPhone, ImAddressBook, ImCalendar } from "react-icons/im";
import Logo from "../../assets/avatar.png";
import Test1 from "../../assets/test1.jpg";
import Test2 from "../../assets/test2.jpg";
import Test3 from "../../assets/test3.jpg";

const About = () => {
    const testominols = [
        {
            avatar: Test1,
            letter: "I thought it was impossible to make a website as beautiful as our product, but Hao Ming proved me wrong.",
            name: "Rajesh Venugopal",
            company: "Direct of Engineering @ Ingram Micro"
        },
        {
            avatar: Test2,
            letter: "I've never met a web developer who truly cares about their clients' success like Hao Ming does.",
            name: "Chris Brown",
            company: "Project Manager @ Dapper Labs"
        },
        {
            avatar: Test3,
            letter: "After Hao Ming optimized our website, our traffic increased by 50%. We can't thank them enough!",
            name: "Alexei Gura",
            company: "CTO @ America's Frontline Doctors"
        }
    ]

    return (
        <div className="container px-8 mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="p-8 w-full md:w-96 rounded-md bg-[#22272c] flex flex-col items-center">
                    <div className="rounded-full h-[140px] bg-white">
                        <Image width={140} height={140} src={Logo} alt="logo" className="rounded-full" />
                    </div>
                    <div className="mt-2 mb-4">
                        <span className="text-xl font-black text-white">Hao Ming</span>
                    </div>
                    <div className="mt-3 w-full text-white flex items-center">
                        <ImAddressBook className="mr-2" />
                        <span className="text-sm font-bold">cupid.jack505@gmail.com</span>
                    </div>
                    <div className="mt-3 w-full text-white flex items-center">
                        <ImLocation className="mr-2" />
                        <span className="text-sm font-bold">Orchard Road, Singapore 238863</span>
                    </div>
                    <div className="mt-3 w-full text-white flex items-center">
                        <ImCalendar className="mr-2" />
                        <span className="text-sm font-bold">July 28th 1999</span>
                    </div>
                    <div className="mt-3 w-full text-white flex items-center">
                        <ImPhone className="mr-2" />
                        <span className="text-sm font-bold">+1 (901) 213 8762</span>
                    </div>
                </div>
                <div className="p-8 flex-none md:flex-1 my-4 md:my-0 bg-[#22272c] rounded-md md:ml-4">
                    <div className="text-wrap mb-8">
                        <h4 className="text-white text-xl font-black border-b-2 w-max mb-2">About Me</h4>
                        <p className="text-white text-sm my-2 indent-4">
                            As a passionate and dedicated fullstack web developer, I bring a wealth of experience in designing and building high-quality, scalable web applications. With expertise in both frontend and backend development, I have a strong command of technologies like JavaScript, TypeScript, React, Next.js, Vue, Node.js, Express, FastAPI, and more. Over the years, I have developed a deep understanding of modern web development frameworks and have honed my ability to architect robust solutions for complex projects. I have experience working with various databases including MySQL, PostgreSQL, and MongoDB, ensuring data integrity and efficient management.
                        </p>
                        <p className="text-white text-sm my-2 indent-4">
                            Having worked on a variety of projects, from eCommerce platforms to enterprise-level applications, I am well-versed in managing the full software development lifecycle, from planning and designing to coding and deployment. My proficiency in frontend technologies like HTML5, CSS3, TailwindCSS, SASS, and Bootstrap allows me to create responsive, user-friendly interfaces, while my backend skills in PHP, Python, Laravel, Django, Flask, and more enable me to build secure and efficient systems.
                        </p>
                        <p className="text-white text-sm my-2 indent-4">
                            I am always eager to learn and stay updated with the latest advancements in web development, including Web3 technologies and cloud solutions like AWS. I take pride in writing clean, maintainable code and thrive in environments that foster collaboration, creativity, and innovation. As a fullstack developer with a commitment to delivering top-notch results, I strive to continuously expand my skill set and contribute to building impactful digital experiences.
                        </p>
                    </div>
                    <h4 className="text-white text-xl font-black border-b-2 w-max mb-4">Testominals</h4>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                        {
                            testominols.map(item => {
                                return (
                                    <div className="col-span-1 bg-[#050817] rounded-xl p-8 flex flex-col justify-between" key={item.name}>
                                        <p className="text-white indent-2 mb-4">
                                            {item.letter}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#2f80ed] mb-1">{item.name}</span>
                                                <span className="text-sm text-white/60">{item.company}</span>
                                            </div>
                                            <div className="rounded-full ml-4">
                                                <Image width={40} height={40} className="rounded-full" src={item.avatar} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 