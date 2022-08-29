import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowUp } from "phosphor-react"
import { motion } from "framer-motion"

export const ScroolToTop = () => {
    const [ showButton, setShowButton ] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowButton(window.scrollY >= 10)
        })
    }, [])

    return(
        <motion.button 
        className={`bg-link rounded-full inline-block p-2 bottom-2 right-4 ${ showButton ? "fixed" : "none hidden" }`}
        onClick={() => {
            window.scrollTo(0, 0)
        }}
        animate={{
            y: [5, -5]
        }}
        transition={{
            y: {
                yoyo: Infinity,
                duration: 0.30
            }
        }}
        >
            <ArrowUp size={24} weight="bold" />
        </motion.button>
    )
}
