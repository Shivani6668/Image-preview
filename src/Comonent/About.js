import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div>
    <Helmet>
      <title>About Page Title</title>
      <meta name="description" content="Description for the about page" />
      <meta property="og:title" content="About Page Title" />
      <meta property="og:description" content="Description for the about page" />
      <meta property="og:image" content="https://example.com/about-page-image.jpg" />
      <meta property="og:url" content="https://example.com/about" />
    </Helmet>
    <h1>About Us</h1>
  </div>
);

export default About;
