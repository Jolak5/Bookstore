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
      { (books ?? []).filter((b) => b.item_Id).map((book) => (
        <li key={book.item_Id} id={book.item_Id}>
          {book.author}
          {' '}
          {book.title}
          {' '}
          <button type="button" onClick={() => dispatch(deleteBook(book.item_Id))}>REMOVE</button>
        </li>

      ))}
      <Form />
    </div>

  );
}
