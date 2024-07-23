import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [images, setImages] = useState([]);

  const imageData = [
    {
      image: 'https://th.bing.com/th/id/OIP.IxYxqsFErHah_8lZs2pUnwHaFj?rs=1&pid=ImgDetMain',
      title: 'Image 1',
      description: 'Description for Image 1'
    },
   
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      setImages(imageData);
    };

    fetchData();
  }, []);

  const ogImage = "https://th.bing.com/th/id/OIP.IxYxqsFErHah_8lZs2pUnwHaFj?rs=1&pid=ImgDetMain"

  return (
    <div>
      <Helmet>
        <title>Image Gallery</title>
        <meta name="description" content="A collection of beautiful images." />
        <meta property="og:title" content="Image Gallery" />
        <meta property="og:description" content="A collection of beautiful images." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://your-website.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Image Gallery" />
        <meta name="twitter:description" content="A collection of beautiful images." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <div key={index} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={img.image} alt={img.title} style={{ width: '100px', height: '100px' }} />
            <h2>{img.title}</h2>
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
