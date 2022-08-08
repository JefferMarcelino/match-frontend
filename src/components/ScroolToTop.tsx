import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowUp } from "phosphor-react"

export const ScroolToTop = () => {
    const [ showButton, setShowButton ] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowButton(window.scrollY >= 10)
        })
    }, [])

    return(
        <button 
        className={`bg-link dark:bg-darkLink rounded-full inline-block p-2 bottom-2 right-2 ${ showButton ? "fixed" : "none hidden" }`}
        onClick={() => {
            window.scrollTo(0, 0)
        }}
        >
            <ArrowUp size={35} />
        </button>
    )
}
