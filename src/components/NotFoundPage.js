import React from 'react';
import { Link } from 'react-router-dom';

// Link doesn't require a fullpage reload
const NotFoundPage = () => (
  <div>
    404! <Link to='/'>Go home</Link>
  </div>
);

export default NotFoundPage;
