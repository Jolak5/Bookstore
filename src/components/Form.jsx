import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBookDetails, addBooks } from './redux/books/booksSlice';

import '../styles/form.css';

export default function Form() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      item_id: uuid(),
      title,
      author,
      category,
    };
    dispatch(postBookDetails(bookData));
    dispatch(addBooks(bookData));

    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option>Category</option>
          <option>Fiction</option>
          <option>Science Fiction</option>
          <option>Fantasy</option>
          <option>Mystery</option>
          <option>Fan Fiction</option>
        </select>

        {/* TODO fix hack */}

        <button type="submit">ADD A BOOK!!</button>
      </form>
    </div>

  );
}
