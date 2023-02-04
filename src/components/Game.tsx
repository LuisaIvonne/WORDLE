import { FC, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { ReadFileContext } from '../contexts/readfile-context';
import Words from './Words/Words';
import Statistics from './Modals/Statistics';

interface IGame{
    showStaticts: boolean
}

const Game = ({showStaticts}: IGame)  => {   
    const { listwords } = useContext(ReadFileContext); 
    const [aleatorio, setAleatorio] = useState('');
    const [intentos, setIntentos] = useState(1);
    const [plays, setPlays] = useState(1);
    const [win, setWin] = useState(0);
    const [isWinner, setIsWinner] = useState(false);
    const [time, setTime] = useState(300000);
    const [showStat, setShowStat] = useState(showStaticts);
    let interval: any = null;

    const handleShowModal = (start: boolean) => {
        if(start && !showStat){
            setIntentos(1);
            setIsWinner(false);
            clearInterval(interval);
            setTime(300000);
            setAleatorio(normalizeWord(listwords[Math.floor(Math.random() * listwords.length)]));
            setShowStat(!start);
        }
    }

    const normalizeWord = (str: string) => {
        return str.normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
        .normalize();
    }

    useEffect(() => {
        if (listwords && listwords.length > 0) {
            setAleatorio(normalizeWord(listwords[Math.floor(Math.random() * listwords.length)]));
        }
    }, [listwords]);

    

    useEffect(() => {
        if (time == 0) {
            if (!isWinner ) setPlays(plays + 1);
        } else if (!isWinner && intentos < 6) {
            interval = setTimeout(() => {
                setTime(time - 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
    }, [time]);

    useEffect(() => {
        setShowStat(showStaticts);
    }, [showStaticts])

    return (
        <>   
            <div className='w-1/2 max-w-xs mt-12'>
              {intentos >= 1 && aleatorio != '' && <Words word={aleatorio} defWord='' setIntentos={() => setIntentos(intentos + 1)} setPlays={() => setPlays(plays + 1)} setWins={() => { setWin(win + 1); setIsWinner(true);}}/> }
              {intentos >= 2 && <Words word={aleatorio} defWord='' setIntentos={() => setIntentos(intentos + 1)} setPlays={() => setPlays(plays + 1)} setWins={() => { setWin(win + 1); setIsWinner(true);}}/> }
              {intentos >= 3 && <Words word={aleatorio} defWord='' setIntentos={() => setIntentos(intentos + 1)} setPlays={() => setPlays(plays + 1)} setWins={() => { setWin(win + 1); setIsWinner(true);}}/> }
              {intentos >= 4 && <Words word={aleatorio} defWord='' setIntentos={() => setIntentos(intentos + 1)} setPlays={() => setPlays(plays + 1)} setWins={() => { setWin(win + 1); setIsWinner(true);}}/> }
              {intentos >= 5 && <Words word={aleatorio} defWord='' setIntentos={() => setIntentos(intentos + 1)} setPlays={() => setPlays(plays + 1)} setWins={() => { setWin(win + 1); setIsWinner(true);}}/> }         
              {(intentos == 6 || isWinner || time == 0 || showStat) &&  <Statistics closeModal={(start) => handleShowModal(start)} plays={plays} wins={win} word={(showStaticts) ? "" : aleatorio} time={time}/> }
            </div>
        </>
    )
}


export default Game;