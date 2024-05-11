'use client'
import Image from 'next/image';
import doubleDiamondIcon from "../../public/static/svg/doubleDiamondIcon.svg";
import minesIcon from "../../public/static/svg/minesIcon.svg";
import duckFlipIcon from "../../public/static/svg/duckFlipIcon.svg";
import pokerCardIcon from "../../public/static/svg/pokerCardIcon.svg";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = ({}) => {
    const pathname = usePathname()
    return (
        <aside id="default-sidebar" className=" z-40 w-18 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
                <li>
                <Link className={`link ${pathname === '/roulette' ? 'active ' : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`} href="/roulette">
                    <div className='bg-gradient-to-br from-green-400 to-green-900 bg-center bg-cover bg-no-repeat rounded-xl'>
                        <Image
                            priority
                            src={doubleDiamondIcon} alt={''}/>
                    </div>
                </Link>
                    
                </li>
                <li>
                    <Link className={`link ${pathname === '/boom' ? 'active ' : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`} href="/boom">
                        <div className='bg-gradient-to-br from-red-500 to-red-300  rounded-xl'>
                            <Image
                                priority
                                src={minesIcon} alt={''}/>
                        </div>
                    </Link>
                </li>
                <li>
                <Link className={`link ${pathname === '/duck' ? 'active ' : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`} href="/duck">
                    <div className='bg-gradient-to-br from-yellow-400 to-yellow-600   rounded-xl'>
                    <Image
                        priority
                        src={duckFlipIcon} alt={''}/>
                    </div>
                </Link>
                </li>
                <li>
                <Link className={`link ${pathname === '/pocker' ? 'active ' : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`} href="/pocker">
                    <div className='bg-gradient-to-br from-yellow-400 to-yellow-600   rounded-xl'>
                    <Image
                        priority
                        src={pokerCardIcon} alt={''}/>
                    </div>
                    
                </Link>
                </li>
            </ul>
            </div>
        </aside>
    );
}

export default SideBar;