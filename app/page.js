"use client"

import { TypeAnimation } from "react-type-animation";
import { Fragment } from "react";
import Link from "next/link";
import { CONTACTS_DATA } from "@/lib/data";

export default function Home() {
  return (
    <Fragment>
      <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <div className="text-[24px] md:text-[36px] font-bold ">I am a </div>
        <TypeAnimation
          sequence={[
            1000,
            'Full-Stack Developer', // Types 'One'
            3000, // Waits 1s
            'Passionate Developer', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            'Talented Developer', // Types 'Three' without deleting 'Two'
            3000,
            () => {
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block', fontWeight: 900, borderBottom: '4px solid white' }}
        />
      </div>
      <div className="flex justify-center px-4 items-center w-full my-8 absolute bottom-0 text-white">
        {
          CONTACTS_DATA.map((item, key) => {
            return (
              <Link href={item.url} key={key}>
                <div key={item.url} className={`mx-2 ${item.color} rounded-full w-10 h-10 bg-black transition duration-300 flex items-center justify-center cursor-pointer hover:bg-red-600`}>
                  {item.icon}
                </div>
              </Link>
            )
          })
        }
      </div>
    </Fragment>
  );
}
