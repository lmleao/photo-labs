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

  return (
    <div className="app">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
