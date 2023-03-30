import { useState } from 'react';

export default function Form() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book title..."
          value={state}
          onChange={handleChange}
        />
        <input />
        <button type="button" className="button">Add Book</button>
      </form>
    </div>
  );
}
