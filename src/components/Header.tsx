import { FC, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/theme-context';

interface IHeaderProps {
    showmodal: boolean,
    setShowModal: (start: boolean, show: boolean) => void,
    setShowStaticts: (show: boolean) => void,
}

const Header = ({ showmodal, setShowModal, setShowStaticts }: IHeaderProps) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [show, setShow] = useState(false);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    return (
        <header>
            <div className={`flex justify-center items-center rounded-lg grid grid-cols-3 header-${theme}`}>
                <div>
                    <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
                        <button onClick={() => setShowModal(false, true)} type="button" className="px-6
                                py-2.5
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                transition
                                duration-150
                                ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <span>WORDLE</span>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 justify-end">
                            <button onClick={() => {setShow(!show); setShowStaticts(!show);}} type="button" className="px-6
                                py-2.5
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                transition
                                duration-150
                                ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-4 justify-self-start self-center'>
                            <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onChange={handleThemeChange} checked={theme === 'light'} />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;