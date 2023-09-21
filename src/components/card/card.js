import React from 'react';
import './card.scss';
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { ArrowRight } from 'react-bootstrap-icons';

const Card = () => (
  <div className="card">
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p className='quote'>"A well-known quote, contained in a blockquote element."</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
    </div>
    <div class="card-footer text-body-secondary">
      <div className='row'>
        <div className='col-6 social-media'>
        <Facebook size='35' />
        <Twitter size='35' />
        </div>
        <div className='col-6 text-end'>
          <button type="button" className="btn btn-danger">Change quote <ArrowRight size='23' /></button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;