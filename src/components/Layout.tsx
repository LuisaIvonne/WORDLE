import {FC, ReactNode, useState, useEffect, useContext} from 'react';
import Header from './Header';
import { ReadFileContext } from '../contexts/readfile-context';
import Instruction from './Modals/Instruction';
import Game from './Game';

interface ILayoutProps{
    children: ReactNode,
    closeModal: (start: boolean, show:boolean) => void
}

const Layout = ({children, closeModal}: ILayoutProps) => {
    const { setListWords } = useContext(ReadFileContext); 
    const [startGame, setStartGame] = useState(false);
    const [showmodal, setShowModal] = useState(false);
    const [showStatistics, setShowStaticts] = useState(false);

    const URL_FILE = 'http://localhost:5173/words.txt'

    const ReadFile = async () => {
        const data: any = [];
       await fetch(URL_FILE)
        .then(res => res.text())
        .then(content => {
            let lines = content.split('\n');
            lines.forEach(line => { 
                if (line.length === 5) data.push(line); 
            });
        })

        setListWords(data);
    }

    const handleShowModal = (start: boolean, show: boolean) => {
        setShowModal(show);
        setStartGame(start);
    }

    useEffect(() => {
        ReadFile();
        setShowModal(true);
    }, [])

    return(
        <div className='container w-1/2 p-4'>
            <div>
                <Header showmodal={true} setShowModal={(start, show) => handleShowModal(start, show)} setShowStaticts={(show) => {setShowStaticts(show)}}/>
                {(showmodal) && (<Instruction closeModal={(start, show) => handleShowModal(start, show)}/>)}
                {(startGame) && (<Game showStaticts={showStatistics}/>)}
            </div>
        </div>
    );
}

export default Layout;