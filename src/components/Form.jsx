import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import AddBookButton from './AddBookButton';
import { postBookDetails } from './redux/books/booksSlice';
import '../styles/form.css';

const INITIAL_FORM_STATE = {
  author: '',
  title: '',
  item_Id: '',
};

export default function Form() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      item_Id: '22',
    });
    dispatch(postBookDetails(formState));
  };

  useEffect(() => {
    dispatch(postBookDetails(formState));
  }, [dispatch, formState]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      item_Id: uuid(),
    });
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author..."
          value={formState.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book title..."
          value={formState.title}
          onChange={handleChange}
          required
        />

        {/* TODO fix hack */}

        <AddBookButton book={formState} />

      </form>
    </div>

  );
}
