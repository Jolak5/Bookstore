import { useDispatch } from 'react-redux';
import { deleteBook } from './redux/books/booksSlice';

export const DeleteBook = (id) => {
    const dispatch = useDispatch()
  return (
    <div><button type='button' onClick={() => dispatch(deleteBook(id))}>Delete</button></div>
  )
}