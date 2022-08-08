import Image from "next/image"
import Link from 'next/link';
import { ToggleLeft, ToggleRight } from "phosphor-react"
import { useState } from "react";

export const Header = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    return(
        <header className="flex items-center justify-between border-b-2 border-blue pb-2">
            <div className='flex gap-3 items-center'>
                <Image 
                src="https://avatars.githubusercontent.com/u/77571208?v=4" 
                width={75}
                height={75}
                alt="Me"
                className='rounded-full'
                />
                <div>
                    <p className='text-xl'>
                    Personal blog by <Link href="https://github.com/JefferMarcelino">
                        <a className='underline text-link dark:text-darkLink underline-offset-4' target="_blank">Jeffer Marcelino</a>
                    </Link>
                    </p>
                    <span className='text-zinc-600'>Web Developer</span>
                </div>
            </div>
            <button
            onClick={ () => {
                setIsDarkMode(!isDarkMode)
                document.querySelector("html")?.classList.toggle("dark")
            } }
            >
                {
                    isDarkMode ? <ToggleRight size={32} /> : <ToggleLeft color="black" size={32} />
                }
            </button>
        </header>
    )
}