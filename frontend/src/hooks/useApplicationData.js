import { useReducer } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

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
  photos,
  topics,
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
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const toggleFavourite = (photoId, isFavorited) => {
    dispatch({
      type: TOGGLE_FAVOURITE,
      payload: { photoId, isFavorited },
    });
  };

  const openModal = (selectedPhoto, similarPhotos) => {
    dispatch({
      type: OPEN_MODAL,
      payload: { selectedPhoto, similarPhotos },
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