import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <div>GO TO HOME PAGE</div>
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
