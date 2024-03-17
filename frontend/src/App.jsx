import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Create an array with three elements to repeat the sampleDataForPhotoListItem
  const photos = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div className="app">
      {/* Map over the array of photos and render PhotoListItem component with sampleDataForPhotoListItem */}
      {photos.map((_, index) => (
        <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />
      ))}
    </div>
  );
};

export default App;
