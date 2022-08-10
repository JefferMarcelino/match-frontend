import Image from "next/image"
import Link from "next/link";
import icon from '../public/images/icon.png';
import { ToggleLeft, ToggleRight } from "phosphor-react"
import { useEffect, useState } from "react";

export const Header = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("theme")) {
                setIsDarkMode(true)
                document.querySelector("html")?.classList.add("dark")
                console.log(localStorage.getItem("theme"))
            }
        }
    }, [])

    return(
        <header className="flex items-center justify-between">
            <div className='flex gap-3 items-center'>
                <Link href="/">
                    <a className="flex items-center gap-2">
                        <Image 
                        src={ icon }
                        width={65}
                        height={65}
                        alt="Me"
                        className='rounded-full'
                        />
                        <div>
                            <p className='hidden uppercase leading-tight text-3xl text-link dark:text-darkLink sm:inline-block'>Venus</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="/">
                    <a className="underline">Blog</a>
                </Link>

                <Link href="/About">
                    <a className="underline">Sobre</a>
                </Link>

                <button
                onClick={ () => {
                    setIsDarkMode(!isDarkMode)
                    document.querySelector("html")?.classList.toggle("dark")
                    if (isDarkMode) {
                        localStorage.removeItem("theme")
                    } else {
                        localStorage.setItem("theme", "dark")
                    }
                } }
                >
                    {
                        isDarkMode ? <ToggleRight size={32} /> : <ToggleLeft color="black" size={32} />
                    }
                </button>
            </div>
        </header>
    )
}