import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Assuming you have multiple pages

  const imageData = [
    {
      image: 'https://th.bing.com/th/id/OIP.IxYxqsFErHah_8lZs2pUnwHaFj?rs=1&pid=ImgDetMain',
      title: 'Image 1',
      description: 'Description for Image 1',
      pageTitle: 'Page 1 - Image Gallery',
      pageDescription: 'A collection of beautiful images on Page 1.'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.9GJ7G6GV2aTgBr_pY1W44gHaFj?pid=ImgDet&rs=1',
      title: 'Image 2',
      description: 'Description for Image 2',
      pageTitle: 'Page 2 - Image Gallery',
      pageDescription: 'A collection of beautiful images on Page 2.'
    }
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      setImages(imageData);
    };

    fetchData();
  }, []);

  const currentImage = images[currentPage];

  return (
    <div>
      {currentImage && (
        <Helmet>
          <title>{currentImage.pageTitle}</title>
          <meta name="description" content={currentImage.pageDescription} />
          <meta property="og:title" content={currentImage.pageTitle} />
          <meta property="og:description" content={currentImage.pageDescription} />
          <meta property="og:image" content={currentImage.image} />
          <meta property="og:url" content="https://your-website.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentImage.pageTitle} />
          <meta name="twitter:description" content={currentImage.pageDescription} />
          <meta name="twitter:image" content={currentImage.image} />
        </Helmet>
      )}
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
      <div>
        <button onClick={() => setCurrentPage(0)}>Page 1</button>
        <button onClick={() => setCurrentPage(1)}>Page 2</button>
      </div>
    </div>
  );
}

export default Blog;
