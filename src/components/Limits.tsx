import { ScroolToTop } from "./ScroolToTop"

interface LimitsProps {
    children: React.ReactNode
}

export const Limits:React.FC<LimitsProps> = ({ children }) => {
    return(
        <div className="w-full h-full min-h-screen text-blue dark:text-white dark:bg-darkBg text-lg p-5">
            <div className='max-w-4xl mx-auto flex flex-col gap-10'>
                { children }
                <footer className="mx-auto text-center">@Jeffer Marcelino</footer>
                <ScroolToTop />
            </div>
        </div>
    )
}