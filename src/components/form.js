import { useState } from 'react';

export default function Form() {
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

  return (
    <div>

      <form>
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
        <button type="button" className="button">Add Book</button>
      </form>
    </div>

  );
}
