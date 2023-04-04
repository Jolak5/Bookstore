import React from 'react'
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';
import { DeleteBook } from './DeleteBook';

export default function AddBookButton({book}) {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(addBooks(book))}>ADD A BOOK!!!</button> 
    </div>
  )
}
