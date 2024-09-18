"use client"

import { TypeAnimation } from "react-type-animation";

export default function Home() {

  return (
    <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center border-b-4">
      <div className="text-[36px] font-bold">I am a </div>
      <TypeAnimation
        sequence={[
          1000,
          '" Full-Stack Developer "', // Types 'One'
          3000, // Waits 1s
          '" Passionate Developer "', // Deletes 'One' and types 'Two'
          3000, // Waits 2s
          '" Talented Developer "', // Types 'Three' without deleting 'Two'
          3000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '3em', display: 'inline-block', fontWeight: 900 }}
      />
    </div>
  );
}
