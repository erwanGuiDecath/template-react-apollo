import React from 'react'
import './Beer.css'

export function Beer({ beer }) {
  return (
    <div className='beer-container'>
      <p className="title">{beer.title}</p>
    </div>
  )
}