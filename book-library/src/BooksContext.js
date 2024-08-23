import React, {useState,useEffect,createContext} from 'react'

export const BooksContext=createContext();

export const BooksProvider=({children})=>{

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('/books.json').then(res=>{return res.json()}).then(data=>setBooks(data)).catch(err=>console.log(err));
    },[]);

    return (
        <BooksContext.Provider value={books}>
            {children}
        </BooksContext.Provider>
    )
};
