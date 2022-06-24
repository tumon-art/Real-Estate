import Image from "next/image"
import Link from "next/link"

import houseImg from '../assets/images/real3.webp'
import { Navbar } from "./Navbar"

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName }) => (
    <div className=" w-full relative"> 
        

    <div className="block w-full h-[400px] relative items-center justify-center gap-5">
        <div className=" w-full absolute z-10">
            <Navbar />
        </div>
        <Image src={houseImg} width={600} height={200} alt='img' 
        layout='fill'
         className=" object-cover w-full" />
    </div>

    </div>

)


export default Banner