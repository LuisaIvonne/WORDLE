import { FC, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

interface LetterProps{
    color: string,
    value: string,
    disabled: boolean,
    isFocused: boolean,
    handleChange: (value: string) => void
}

const Letter= ({color, value, disabled, isFocused, handleChange}: LetterProps) => {

    const inputReference: any = useRef(null);

    useEffect(() => {
        if (isFocused) inputReference?.current?.focus();
    }, [isFocused]);

    return (
        <>
            <input 
                type="text" 
                disabled={disabled}  
                className={`rounded uppercase text-gray font-bold text-center p-3 ${color && color.length > 0 ? color : 'bg-white'}`} 
                value={value}
                ref={inputReference}
                onChange={(e) => {handleChange(e.target.value)}}
            />
        </>
    )
}


export default Letter;