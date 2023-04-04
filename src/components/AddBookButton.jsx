import React from 'react'
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';

export default function AddBookButton({book}, key) {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(addBooks(book, key))}>ADD A BOOK!!!</button>
    </div>
  )
}
