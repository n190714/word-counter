import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordToCount, setWordToCount] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [wordFrequency, setWordFrequency] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleWordToCountChange = (e) => {
    setWordToCount(e.target.value);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    setWordCount(words.filter(word => word).length);
  };

  const countSpaces = () => {
    const spaces = text.split(' ').length - 1;
    setSpaceCount(spaces);
  };

  const countCharacters = () => {
    setCharCount(text.length);
  };

  const countWordFrequency = () => {
    const words = text.trim().toLowerCase().split(/\s+/);
    const frequency = words.filter(word => word === wordToCount.toLowerCase()).length;
    setWordFrequency(frequency);
  };

  return (
    <div className="container">
      <h1 className="title">Word Counter</h1>
      <textarea
        className="text-area"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      ></textarea>
      <div className="button-group">
        <button onClick={countWords} className="button">Count Words</button>
        <button onClick={countSpaces} className="button">Count Spaces</button>
        <button onClick={countCharacters} className="button">Count Characters</button>
      </div>
      <div className="results">
        <p>Words: {wordCount}</p>
        <p>Spaces: {spaceCount}</p>
        <p>Characters: {charCount}</p>
      </div>
      <div className="word-frequency">
        <input
          type="text"
          className="input"
          value={wordToCount}
          onChange={handleWordToCountChange}
          placeholder="Enter word to count..."
        />
        <button onClick={countWordFrequency} className="button">Count Word Frequency</button>
        <p>Frequency: {wordFrequency}</p>
      </div>
    </div>
  );
};

export default WordCounter;

