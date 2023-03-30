import { useState } from 'react';

export default function Books() {
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
    const list = 'hkhkhh';
    const inputDiv = document.querySelector('.bookList');
    inputDiv.innerHTML = list;
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
        <input
          type="text"
          name="lname"
          placeholder="Book Author..."
          value={state.lname}
          onChange={handleChange}
        />
        <button type="button" className="button">Add Book</button>
      </form>
      <div className="bookList">jpw</div>
    </div>
  );
}
