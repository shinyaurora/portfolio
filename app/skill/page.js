"use client"

import { SKILL_DATA } from "@/lib/data";
import Image from "next/image";

const Skill = () => {
    return (
        <div className="container mx-auto text-center">
            <h1 className="text-white text-center text-3xl font-black">🛠️ Skills</h1>
            <div className="flex justify-center w-full">
                <div className="border-2 border-white w-72 mt-4" />
            </div>
            <div className="flex items-center justify-center flex-wrap my-4">
                {
                    SKILL_DATA.LANG_LIST.map(item => {
                        return (
                            <div key={item.name} className="border border-white p-3 h-32 w-32 flex bg-black/80 rounded-lg m-1 flex-col items-center justify-between">
                                <img src={item.icon} alt={item.name} width={70} height={70} />
                                <span className="text-white pt-1 font-black text-sm">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-center flex-wrap my-4">
                {
                    SKILL_DATA.BACKEND_LIST.map(item => {
                        return (
                            <div key={item.name} className="border border-white p-3 h-32 w-32 flex bg-black/80 rounded-lg m-1 flex-col items-center justify-between">
                                <img src={item.icon} alt={item.name} width={70} height={70} />
                                <span className="text-white pt-1 font-black text-sm">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-center flex-wrap my-4">
                {
                    SKILL_DATA.FRONTEND_LIST.map(item => {
                        return (
                            <div key={item.name} className="border border-white p-3 h-32 w-32 flex bg-black/80 rounded-lg m-1 flex-col items-center justify-between">
                                <img src={item.icon} alt={item.name} width={70} height={70} />
                                <span className="text-white pt-1 font-black text-sm">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-center flex-wrap my-4">
                {
                    SKILL_DATA.DATABASE_LIST.map(item => {
                        return (
                            <div key={item.name} className="border border-white p-3 h-32 w-32 flex bg-black/80 rounded-lg m-1 flex-col items-center justify-between">
                                <img src={item.icon} alt={item.name} width={70} height={70} />
                                <span className="text-white pt-1 font-black text-sm">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill;