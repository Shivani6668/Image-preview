import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  <div>
    <Helmet>
      <title>Home Page Title</title>
      <meta name="description" content="Description for the home page" />
      <meta property="og:title" content="Home Page Title" />
      <meta property="og:description" content="Description for the home page" />
      <meta property="og:image" content="https://example.com/home-page-image.jpg" />
      <meta property="og:url" content="https://example.com/home" />
    </Helmet>
    <h1>Welcome to the Home Page</h1>
  </div>
);

export default Home;
