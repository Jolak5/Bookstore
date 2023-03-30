import Book from '../components/Book';
import Form from '../components/form';
import './books.css';

const items = [
  {
    id: 1,
    title: 'How to be blessed',
    author: 'Kayode Olatunji',
  },
  {
    id: 2,
    title: 'How to be a pretty Lady',
    author: 'Christianah Oke',
  },
  {
    id: 3,
    title: 'The richest man in Africa',
    author: 'Kayode Olatunji',
  },
];

export default function Books() {
  return (
    <div className="bookList">
      {items.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>

  );
}
