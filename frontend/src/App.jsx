import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
