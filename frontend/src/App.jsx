import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList'; 
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="app">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList />
    <TopicList />
    </div>
  );
};

export default App;
