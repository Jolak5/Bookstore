import { useSelector } from "react-redux";
import Form from "../components/Form";
import "./home.css";

// Import the initialState and display
export default function Home() {
  const books = useSelector((state) => state.book.books);

  return (
    <div className="bookList">
      { (books ?? []).filter(b=>b.id).map((book) => (
        <li key={book.id}>
          {book.title}
          {" "}
          {book.author}
          {" "}
        </li>
      ))}
      <Form />
    </div>

  );
}
