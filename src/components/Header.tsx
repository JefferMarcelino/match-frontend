import Link from "next/link";
import { List, ToggleLeft, ToggleRight } from "phosphor-react"
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

export const Header = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.querySelector("html")?.classList.add("dark")
            /*if (localStorage.getItem("theme")) {
                setIsDarkMode(false)
            }*/
        }
    }, [])

    return(
        <header className="bg-[#242942] overflow-hidden px-5">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <div className='flex gap-3 items-center'>
                    <Link href="/">
                        <a className="flex items-center gap-2">
                            <div>
                                <p className='uppercase leading-tight text-4xl text-link dark:text-darkLink'>Venus</p>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center gap-4 h-full">
                    <ActiveLink href="/" exact className="text-white relative w-full h-full font-bold">
                        Blog
                    </ActiveLink>
                    <ActiveLink href="/About" exact className="text-white relative w-full h-full font-bold">
                        Sobre
                    </ActiveLink>
                </div>
            </div>
        </header>
    )
}