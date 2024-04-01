import React from "react";
import { createContext, useState } from "react";

export const BookContext = createContext<BookContextProps|null>(null);

const BookContextProvider = ({children}:React.PropsWithChildren<{}>)=> {
    const [book, setBook] = useState("📙");
    const changeBook = ()=> setBook("📘");
    return (
        <BookContext.Provider value = {{book, changeBook}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;