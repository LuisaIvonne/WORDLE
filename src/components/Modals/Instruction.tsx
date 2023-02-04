import { FC, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Letter from '../Words/Letter';
import Words from '../Words/Words';

interface InstructionProps {
    closeModal: (start: boolean, show:boolean) => void
}

const Instruction = ({ closeModal }: InstructionProps) => {
    const { theme } = useContext(ThemeContext);

    const bgTheme = (theme === "dark") ? "dark:bg-gray-700" : "bg-white"
    const textTheme = (theme === "dark") ? "dark:text-white" : "text-gray-900"

    return (
        <>
            <div id="small-modal" className="fixed top-0 left-0 right-0 z-50 visible w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className={`relative bg-white rounded-lg shadow ${bgTheme}`} >
                        <div className="p-6 space-y-6">
                            <h3 className="text-xl font-medium  ">
                                Como jugar
                            </h3>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                Adivina la palabra oculta en cinco intentos.
                            </p>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                Cada intento bebe ser una palabra válida de 5 letra
                            </p>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
                            </p>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                Ejemplos
                            </p>
                            <div className='grid grid-cols-5 gap-5 text-gray-800'>
                                {['G','A','T','O','S'].map((value, index) => (
                                    <Letter 
                                    color={index == 0 ? 'bg-green-500' : 'bg-white'} 
                                    value={value}
                                    disabled={true}/>
                                ))}
                            </div>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                La letra G está en la palabra y en posición correcta
                            </p>
                            <div className='grid grid-cols-5 gap-5 text-gray-800'>
                                {['V','O','C','A','L'].map((value, index) => (
                                    <Letter 
                                    color={index == 2 ? 'bg-yellow-500' : 'bg-white'} 
                                    value={value}
                                    disabled={true}/>
                                ))}
                            </div>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                La letra C está en la palabra pero en la posicón incorrecta
                            </p>
                            <div className='grid grid-cols-5 gap-5 text-gray-800'>
                                {['C','A','N','T','O'].map((value, index) => (
                                    <Letter 
                                    color={index == 4 ? 'bg-gray-500' : 'bg-white'} 
                                    value={value}
                                    disabled={true}/>
                                ))}
                            </div>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                La letra 0 no está en la palabra
                            </p>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                Puede haber letras repetidas. Las pistas son
                                independientes para cada letra.
                            </p>
                            <p className={`text-base leading-relaxed ${textTheme}`}>
                                ¡Una palabra nueva cada 5 minutos!
                            </p>
                            <p>
                            <button
                                data-modal-hide="small-modal"
                                type="button"
                                className="text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-green-200 text-sm font-medium px-7 py-2.5 focus:z-10"
                                onClick={() => closeModal(true, false)}>!JUGAR¡</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instruction;