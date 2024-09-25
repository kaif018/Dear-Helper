// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // No need for .js, but it works

test('renders learn react link', () => {
  render(<App />);
  
  // Replace the following line with the actual text you expect to find in your App component
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument();
});

