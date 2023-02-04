import { FC, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Letter from './Letter';

interface WordsProps{
    word: string,
    defWord: string,
    setIntentos: () => void,
    setWins: () => void,
    setPlays: () => void
}

const Words= ({word, defWord, setIntentos, setWins, setPlays}: WordsProps) => {
    const [userInput, setUserInput] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const color = {
        success: 'bg-green-500',
        found: 'bg-yellow-500',
        notFound: 'bg-gray-300',
        def: 'bg-white'
    };

    const handleChange = (value: string) => {
        if(value.length > 1) return;

        let copy = [...userInput];
        copy[currentIndex] = value;
        setUserInput(copy.join(''));
        setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        if (currentIndex == 5) {
            if (word.toLowerCase() === userInput.toLowerCase()) {
                setWins();
            } else {
                setIntentos();
            }
            setPlays();
        }
    }, [currentIndex]);

    useEffect(() => {
        setUserInput("");
        setCurrentIndex(0);
    }, [word]);

    return (
        <>
            <div className='grid grid-cols-5 gap-5 mb-5'>
                {word && Array.from(word).map((value, index) => 
                (
                    <Letter 
                    color={
                        (value == [...userInput][index]) ? color.success : [...word].includes(userInput[index]) ? color.found : color.notFound 
                    } 
                    isFocused={(index == userInput.length)}
                    value={userInput != '' ? userInput[index] : ''}
                    disabled={(defWord || (defWord && defWord.length === 0)) ? true: currentIndex < index ? true :  false}
                    handleChange={(value) => handleChange(value)}/>
                ))
                }
            </div>
        </>
    )
}


export default Words;