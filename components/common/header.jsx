"use client"

import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/logo.png";

export default function Header() {

    const links = [
        {
            url: "/",
            title: "Home"
        },
        {
            url: "/about",
            title: "About Me"
        },
        {
            url: "/experience",
            title: "Experience"
        },
        {
            url: "/skill",
            title: "Skills"
        },
        {
            url: "/portfolio",
            title: "Portfolio"
        }
    ]

    return (
        <header>
            <div className="flex items-center flex-col sm:flex-row px-8 py-8 sm:py-4 min-w-max">
                <div className="mb-4 sm:md-0">
                    <Link href="/">
                        <Image src={Logo} width={50} height={"auto"} alt="Logo" />
                    </Link>
                </div>
                <div className="grow" />
                <div className="flex items-center">
                    {
                        links.map(item => {
                            return (
                                <Link href={item.url} className="text-white/70 hover:text-white px-4 cursor-pointer text-sm font-bold" key={item.url}>
                                    <span>{item.title}</span>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="grow block sm:hidden" />
            </div>
        </header>
    );
}