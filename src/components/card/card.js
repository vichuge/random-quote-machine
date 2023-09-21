import React, { useState, useEffect } from 'react';
import './card.scss';
import { Twitter, Quote } from "react-bootstrap-icons";
import { ArrowRight } from 'react-bootstrap-icons';
import Quotes from './quotes';

const Card = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    changeQuote();
  });

  const btnChangeQuote = () => {
    changeQuote();
  }

  const changeQuote = () => {
    const numQuote = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[numQuote][0]);
    setAuthor(Quotes[numQuote][1]);
  }

  return (
  <div className="card" id='quote-box'>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p className='quote' id='text'><Quote size='40' />{quote}</p>
        <footer className="blockquote-footer" id='author'>{author}</footer>
      </blockquote>
    </div>
    <div class="card-footer text-body-secondary">
      <div className='row'>
        <div className='col-6 social-media'>
        <a target='_blank' href={'https://twitter.com/intent/tweet?text="'+quote+'." '+author+'&hashtags=quotes'} rel="noreferrer" id='tweet-quote'><Twitter size='35' /></a>
        </div>
        <div className='col-6 text-end'>
          <button onClick={btnChangeQuote} type="button" className="btn btn-danger" id='new-quote'>Change quote <ArrowRight size='23' /></button>
        </div>
      </div>
    </div>
  </div>
)
};

export default Card;