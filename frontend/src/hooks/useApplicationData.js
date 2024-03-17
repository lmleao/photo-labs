import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prevFavouritePhotos) => {
      if (prevFavouritePhotos.includes(photoId)) {
        return prevFavouritePhotos.filter((id) => id !== photoId);
      } else {
        return [...prevFavouritePhotos, photoId];
      }
    });
  };

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    const similarPhotosArray = photoData.similar_photos ? Object.values(photoData.similar_photos) : [];
    setSimilarPhotos(similarPhotosArray);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSimilarPhotos([]);
    setIsModalOpen(false);
  };

  return {
    state: {
      photos,
      topics,
      favouritePhotos,
      isModalOpen,
      selectedPhoto,
      similarPhotos,
    },
    updateToFavPhotoIds: toggleFavourite,
    setPhotoSelected: openModal,
    onClosePhotoDetailsModal: closeModal,
  };
};

export default useApplicationData;