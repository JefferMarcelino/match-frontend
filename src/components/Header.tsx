import Link from "next/link";
import { List, ToggleLeft, ToggleRight } from "phosphor-react"
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
        <header className="flex items-center justify-center">
            <div className='flex gap-3 items-center'>
                <Link href="/">
                    <a className="flex items-center gap-2">
                        <div>
                            <p className='uppercase leading-tight text-4xl text-link dark:text-darkLink'>Venus</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="group absolute top-0 left-0 z-50">
                <button
                className="relative top-2 left-2 text-darkBg dark:text-white">
                    <List size={32} /> 
                </button>
                <div
                className={`flex flex-col gap-4 items-center w-28 relative left-0 top-2 dark:bg-white dark:text-black bg-darkBg text-white duration-300 rounded-lg p-4 -translate-x-[100%] group-focus-within:translate-x-0`}>
                    <Link href="/">
                        <a className="underline">Blog</a>
                    </Link>
                    <Link href="/About">
                        <a className="underline">Sobre</a>
                    </Link>
                    <button
                    className="text-white dark:text-black"
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
                            isDarkMode ? <ToggleRight size={32} /> : <ToggleLeft size={32} />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}