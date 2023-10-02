import React from 'react';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/home'>
      <button className='btn' onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://linktr.ee/utopiahairco";
          }}>Book Now</button>
    </Link>
  );
}