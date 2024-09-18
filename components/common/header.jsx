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
        },
        {
            url: "/testtominal",
            title: "Testominal"
        },
        {
            url: "/contact",
            title: "Contact"
        }
    ]

    return (
        <header>
            <div className="flex items-center px-8 py-4">
                <Link href="/">
                    <Image src={Logo} width={50} height={50} />
                </Link>
                <div className="grow" />
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
        </header>
    );
}