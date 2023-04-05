import { useState } from 'react';
import AddBookButton from './AddBookButton';

const INITIAL_FORM_STATE = {
  author: '',
  title: '',
  item_Id: '',
};

export default function Form() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();

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
