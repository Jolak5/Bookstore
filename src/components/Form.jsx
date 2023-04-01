import { useState } from 'react';
import AddBookButton from './AddBookButton';


export default function Form(divBlock) {
  const [state, setState] = useState({
    fname: '',
    lname: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="Book title..."
          value={state.fname}
          onChange={handleChange}
        />
        <select className="category">
          <option>Category</option>
          <option>Fiction</option>
          <option>Science Fiction</option>
          <option>Fantasy</option>
          <option>Mystery</option>
          <option>Fan Fiction</option>
        </select>
        <AddBookButton />
      </form>
    </div>

  );
}
