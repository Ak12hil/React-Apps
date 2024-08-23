import React,{useContext,useEffect} from 'react'
import { BooksContext } from '../BooksContext'
import { useParams } from 'react-router-dom'

export default function BookDetail() {
    const {bookId}=useParams(); //as useParams return a object {bookId:"2"}
    const books=useContext(BooksContext);
    const book=books.find(b=>b.id===parseInt(bookId));

    useEffect(()=>{
        //console.log(books);
    });

    if(!book){
        return (<div>Book Not Found!!</div>)
    }else{
        return (
            <div>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>{book.description}</p>
            </div>
          )
    }

}
