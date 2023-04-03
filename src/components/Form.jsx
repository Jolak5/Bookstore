import { useState } from 'react';
import AddBookButton from './AddBookButton';

function getRandId() {
  return String(Math.round(Math.random() * 10 ** 16));
}
const INITIAL_FORM_STATE = {
  author: '',
  title: '',
  id: '',
};

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formState, setFormState] = useState({ ...INITIAL_FORM_STATE, id: getRandId() });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = ()=>{
  //     // ? validate the book form state, prevent submitting invalid data
  // const isValid = true
  // if(!isValid){
  //   // ? set form error state
  //   return
  // }
  //  dispatchEvent(addBook(formState))

  //   }
  // function handleClear(){
  //   setFormState({author:"",
  //   title:"",
  //   id:""})
  // }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author..."
          value={formState.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Book title..."
          value={formState.title}
          onChange={handleChange}
        />

        {/* TODO fix hack */}

        <AddBookButton book={formState} />

      </form>
    </div>

  );
}
