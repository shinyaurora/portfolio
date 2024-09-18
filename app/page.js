"use client"

import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { ImTelegram, ImGithub, ImLinkedin } from "react-icons/im";

export default function Home() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log(width);

    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const contacts = [
    {
      url: "https://discord.com",
      icon: <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" class="">
        </path>
      </svg>,
      color: "bg-blue-600"
    },
    {
      url: "https://github.com",
      icon: <ImGithub />,
      color: "bg-pink-600"
    },
    {
      url: "https://web.telegram.com",
      icon: <ImTelegram />,
      color: "bg-purple-600"
    },
    {
      url: "https://web.linkedin.com",
      icon: <ImLinkedin />,
      color: "bg-blue-600"
    }
  ]

  return (
    <Fragment>
      <head>
        <title>Freelancer of NightSky</title>
      </head>
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
              console.log('Sequence completed');
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
          contacts.map(item => {
            return (
              <Link href={item.url}>
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
