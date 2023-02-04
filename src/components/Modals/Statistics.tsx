import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Game from '../Game';

interface IInstructionProps {
    plays: number,
    wins: number,
    word: string,
    time: number,
    closeModal: (start: boolean) => void
}

const Instruction = ({ plays, wins, closeModal, word, time }: IInstructionProps) => {
    const { theme } = useContext(ThemeContext);

    const bgTheme = (theme === "dark") ? "dark:bg-gray-700" : "bg-white"
    const textTheme = (theme === "dark") ? "dark:text-white" : "text-gray-900"

    return (
        <>
            <div id="small-modal" className="fixed mt-12 top-0 left-0 right-0 z-50 visible w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className={`relative bg-white rounded-lg shadow ${bgTheme}`} >
                        <div className="p-6 space-y-6">
                            <h3 className="text-xl font-medium  ">
                                Estadísticas
                            </h3>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className={`text-base leading-relaxed ${textTheme}`}>
                                        {plays}
                                    </p>
                                    <p className={`text-base leading-relaxed ${textTheme}`}>
                                        Jugadas
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-base leading-relaxed ${textTheme}`}>
                                        {wins}
                                    </p>
                                    <p className={`text-base leading-relaxed ${textTheme}`}>
                                        Victorias
                                    </p>
                                </div>
                            </div>
                            <p className={`${(word === "") ? "hidden" : "visible"}`}>
                                La palabra era: {word.toUpperCase()}
                            </p>
                            <p>
                                SIGUIENTE PALABRA
                            </p>
                            <div className="timer">
                                <span className="digits">
                                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                                </span>
                                <span className="digits">
                                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                                </span>
                            </div>
                            <p>
                                <button
                                    data-modal-hide="small-modal"
                                    type="button"
                                    className="text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-green-200 text-sm font-medium px-7 py-2.5 focus:z-10"
                                    onClick={() => closeModal(true)}>ACEPTAR</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instruction;