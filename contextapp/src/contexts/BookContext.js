import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContectProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Book', id: 1 },
        { title: 'Book1', id: 2 },
        { title: 'Book2', id: 3 },
        { title: 'Book3', id: 4 },
    ]);
    return ( 
        <BookContext.Provider value={{...books}}>
            {props.children}
        </BookContext.Provider>     
    );
}

export default BookContectProvider;