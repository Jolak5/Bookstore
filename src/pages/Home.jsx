import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import './home.css';
import { deleteBook } from '../components/redux/books/booksSlice';

// Import the initialState and display
export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  return (
    <div className="bookList">
      { (books ?? []).filter((b) => b.id).map((book) => (
        <li key={book.id} id={book.id}>
          {book.author}
          {' '}
          {book.title}
          {' '}
          <button type="button" onClick={() => dispatch(deleteBook(book.id))}>REMOVE</button>
        </li>

      ))}
      <Form />
    </div>

  );
}
