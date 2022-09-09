import { motion } from "framer-motion";
import Image from "next/image"
import Link from 'next/link';
import { GithubLogo, GoogleLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "phosphor-react"
import { Header } from "../components/Header"
import { Limits } from "../components/Layouts/Limits"
import MetaData from "../components/MetaData";

const About = () => {
    return(
        <>
            <MetaData metaData={{
                title: 'Vénus | Sobre',
                description: 'Sobre Jeffer Marcelino',
                author: 'Jeffer Marcelino',
                keywords: ['adolscente', 'blog', 'jeffer marcelino', 'programador'],
            }} />
            <Header />
            <Limits>
                <div className="flex mt-16 justify-center items-center">
                    <div className="flex flex-wrap items-center justify-center gap-7">
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative">
                                <Image
                                src="https://avatars.githubusercontent.com/u/77571208?v=4"
                                width={200}
                                height={200}
                                alt="Me"
                                className='rounded-full relative z-10'
                                />
                                <motion.div
                                className="w-full h-full top-0 right-0 z-0 absolute bg-link rounded-md flex items-center justify-center"
                                animate={{
                                    scale: [1, 1.4, 1.4, 1, 1],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                    rotate: [0, 0, 270, 270, 0]
                                }}
                                transition={{
                                    yoyo: Infinity,
                                    duration: 2
                                }}>
                                </motion.div>
                            </div>
                            <div className="text-center relative z-10">
                                <p className="text-2xl">Jeffer Marcelino</p>
                                <span className='text-zinc-600'>Web Developer</span>
                            </div>
                            <div className='flex flex-wrap gap-4 my-4'>
                                <Link href="https://github.com/JefferMarcelino">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <GithubLogo size={40} />
                                    </a>
                                </Link>
                                <Link href="https://twitter.com/JefferMarcelin">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <TwitterLogo size={40} />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/-94422a22b/">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <LinkedinLogo size={40} />
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/jeffer_marcelin/">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <InstagramLogo size={40} />
                                    </a>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCXBFKr-rZ787IhXAzsnrw-Q">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <YoutubeLogo size={40} />
                                    </a>
                                </Link>
                                <Link href="mailto:jeffersunde72@gmail.com">
                                    <a target="_blank" rel="noreferrer" className='hover:-translate-y-2 transition-transform'>
                                        <GoogleLogo size={40} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[300px] leading-relaxed">
                            <p>Meu nome é <strong>Jeffer Marcelino</strong>, e eu sou um adolescente moçambicano apaixonado por programação e tecnologia. Neste blog vou falar sobre a minha vida, dificuldades que encontrei na minha vida pessoal e profissional, e toda minha jornada no mundo do desenvolvimento de software.</p>
                        </div>
                    </div>
                </div>
            </Limits>
        </>
    )
}

export default About