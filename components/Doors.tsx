import React, { useState, useEffect } from 'react';
import Image from "next/image";
import mypic from "../img/1.png";

import {createCalendar, HatchType, hatchArray} from "./helpers";
import {timingSafeEqual} from "crypto";


const Doors = (): JSX.Element  =>{

    if (typeof window !== 'undefined') {
        console.log('You are on the browser')

        // 👉️ can use localStorage here
    } else {
        console.log('You are on the server')
        // 👉️ can't use localStorage
    }

    const [hatches, setHatches] = useState(hatchArray)
    // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
    // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
    useEffect(() => setHatches(createCalendar), [])





   // const [doors, setDoors] = useState(createCalendar);

    const [mintingPage, setMintingPage] = useState(false);



    //useEffect(() => { createCalendar() });


    const changeToMintingPage = () => {
        setMintingPage(!mintingPage);
        console.log(mintingPage);
    }


    




    return <>{

        hatches.map((item: HatchType) =>

            <div key = {item.nr} className = "flex flex-col justify-center m-4">

                        <div className = " flex justify-center">
                            <span className={"h-10 w-10 bg-red-700 rounded-full text-white flex items-center justify-center"}>{item.nr}</span>
                        </div>


                <Image
                    className = ""
                    src= {item.img}
                    width = {224}
                    height = {224}
                    title = "Ho Ho Ho Procon"
                >

                </Image>
                <div className = "absolute translate-y-5 text-white text-center hover:bg-[url('../img/hatch_backdrop.jpg')] h-56 w-56 opacity-0 hover:opacity-100 duration-300 flex items-center justify-center" onClick={changeToMintingPage}>
                    {item.text}</div>


            </div>

        )


    }</>
};

export default Doors;