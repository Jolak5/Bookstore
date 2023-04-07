import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useState } from 'react';
import Form from '../components/Form';
import 'react-circular-progressbar/dist/styles.css';
import './home.css';
import { deleteBook, deleteAPIBook } from '../components/redux/books/booksSlice';

// Import the initialState and display
export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const [percentage, newPercentage] = useState(65);

  const handlePercentage = (e) => {
    e.preventDefault();
    newPercentage(Math.floor(Math.random() * 100));
  };
  return (
    <div className="bookList">
      { (books ?? []).filter((b) => b.item_id).map((book) => (
        <div className="eachBook" key={book.item_id} id={book.item_id}>
          <div className="left-pan">
            <h4>{book.category}</h4>
            {' '}
            <h1>{book.title}</h1>
            {' '}
            <p className="booktitle">{book.author}</p>
            {' '}
            <div className="buttonDiv">
              {' '}
              <button type="button">Comments</button>
              <button className="remove" type="button" onClick={() => { dispatch(deleteBook(book.item_id)); dispatch(deleteAPIBook(book.item_id)); }}>REMOVE</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="middle-pan">
            <div style={{ width: '100px', height: '100px' }}>
              <CircularProgressbar
                value={percentage}
                strokeWidth={8}
                styles={{
                  path: {
                    stroke: '#3f51b5',
                    strokeLinecap: 'butt',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                  },
                  trail: {
                    stroke: '#d6d6d6',
                    strokeLinecap: 'butt',
                  },
                }}
              />
            </div>
            <div>
              <h1 className="percentage">
                {percentage}
                %
              </h1>
              <p>Completed</p>
            </div>
          </div>
          <div className="right-pan">
            <p>CURRENT CHAPTER</p>
            <h5>Chapter 17</h5>
            <button type="button" className="updateProgress" onClick={handlePercentage}>UPDATE PROGRESS</button>
          </div>
        </div>

      ))}
      <Form />
    </div>

  );
}
