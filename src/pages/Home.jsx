import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import "./home.css";
import { deleteBook } from "../components/redux/books/booksSlice";


// Import the initialState and display
export default function Home(id) {
  const dispatch = useDispatch()
  const {books} = useSelector((state) => state.book);

  return (
    <div className="bookList">
      { (books ?? []).filter(b=>b.id).map((book) => (
        <li key={book.id} {...book}>
          {book.title}
          {" "}
          {book.author}
          {" "}
          <button type='button' onClick={() => dispatch(deleteBook({id}))}>Delete</button>
        </li>
        
      ))}
      <Form />
    </div>

  );
}
