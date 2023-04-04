import PropTypes from 'prop-types';


export default function Book({ title, author }) {

  return (
    <div>
      <ul>
        <li className="listItem">
          {title}
          {' '}
          :
          {' '}
          <span className="author">
            {' '}
            {author}
          </span>
        </li>
      </ul>
      
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
