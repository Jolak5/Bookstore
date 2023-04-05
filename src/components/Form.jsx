import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddBookButton from './AddBookButton';
import { postBookDetails } from './redux/books/booksSlice';

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
    dispatch(postBookDetails(formState));
    setFormState({
      ...formState,
    });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>

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
