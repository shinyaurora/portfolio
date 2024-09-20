import { PORTFOLIO_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className="container mx-auto pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 rounded-lg px-4">
                {
                    PORTFOLIO_DATA.map(item => {
                        return (
                            <Link href={item.url} target="_blank" key={item.url}>
                                <div className="port-item col-span-1 overflow-hidden relative rounded-lg border-2 cursor-pointer" key={item.url} >
                                    <div className="img">
                                        <Image src={item.img} alt={item.description} className="rounded-lg hover:scale-125 transition-all duration-500" />
                                    </div>
                                    <div className="description absolute -bottom-full bg-black/95 p-4 text-white w-full transition-all duration-500 border-t-2">
                                        <p className="text-sm lg:text-base">{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio;