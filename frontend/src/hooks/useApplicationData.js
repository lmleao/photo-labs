import { useReducer, useEffect } from 'react';

// Define action types
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';

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
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
    }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photosResponse = await fetch("/api/photos");
        if (!photosResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const photosData = await photosResponse.json();
        dispatch({ type: SET_PHOTO_DATA, payload: photosData });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
  
      try {
        const topicsResponse = await fetch("/api/topics");
        if (!topicsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const topicsData = await topicsResponse.json();
        dispatch({ type: SET_TOPIC_DATA, payload: topicsData });
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };
  
    fetchData();
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

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };


  const openModal = (selectedPhotoId) => {
    const selectedPhoto = state.photoData.find(photo => photo.id === selectedPhotoId);
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
    fetchPhotosByTopic,
    openModal,
    closeModal,
  };
};

export default useApplicationData;