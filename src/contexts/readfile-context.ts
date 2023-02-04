import {createContext} from 'react';

export const ReadFileContext = createContext({
    listwords: [],
    setListWords: (words: []) => {}
});
