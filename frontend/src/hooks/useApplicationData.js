import { useReducer, useEffect } from 'react';

// Define action types
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Define initial state
const initialState = {
  favouritePhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  photoData: [],
  topicData: []
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        favouritePhotos: action.payload.isFavorited
          ? [...state.favouritePhotos, action.payload.photoId]
          : state.favouritePhotos.filter(id => id !== action.payload.photoId),
      };
    case OPEN_MODAL:
      return {
        ...state,
        selectedPhoto: action.payload.selectedPhoto,
        similarPhotos: action.payload.similarPhotos,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
        similarPhotos: [],
        isModalOpen: false,
      };
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
    }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }));

    fetch("/api/topics")
      .then(response => response.json())
      .then(data => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);

  // Action creators
  const toggleFavourite = (photoId) => {
    // Check if the photo is already favorited
    const isFavorited = state.favouritePhotos.includes(photoId);
    
    dispatch({
      type: TOGGLE_FAVOURITE,
      payload: { photoId, isFavorited: !isFavorited },
    });
  };

  const openModal = (selectedPhotoId) => {
    const selectedPhoto = state.photos.find(photo => photo.id === selectedPhotoId);
    const similarPhotosArray = selectedPhoto && selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [];
    
    dispatch({
      type: OPEN_MODAL,
      payload: { selectedPhoto, similarPhotos: similarPhotosArray },
    });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return {
    state,
    toggleFavourite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;