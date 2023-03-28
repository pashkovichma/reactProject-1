import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <BrowserRouter>
      <div>
        <h1>404</h1>
        <li>
          <Link to="/">GO TO HOME PAGE</Link>
        </li>
      </div>
    </BrowserRouter>
  );
}

export default NotFoundPage;
