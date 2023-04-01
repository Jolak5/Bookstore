import React from 'react'
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';



export default function AddBookButton() {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(addBooks( {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      }))}>ADD A BOOK!!!</button>
    </div>
  )
}
