import { useSelector } from "react-redux";
import Form from "../components/Form";
import "./home.css";

// Import the initialState and display
export default function Books() {
  const books = useSelector((state) => state.book.books);
  const state = useSelector((s) => s);
  console.log("🚀 ~ file: books.js:9 ~ Books ~ state:", state)
  console.log("🚀 ~ file: books.js:8 ~ Books ~ books:", books)
  return (
    <div className="bookList">
      { (books ?? []).map((book) => (
        <li key={book.item_id}>
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
