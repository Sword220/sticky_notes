import React from 'react';
import StickyForm from './StickyForm';
import StickyList from './StickyList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <StickyForm />
    <StickyList />
    <Footer />
  </div>
);

export default App;
