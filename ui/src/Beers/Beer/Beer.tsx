import React from 'react'
import { Beer  as BeerType} from '../../../types/graphql'
import './Beer.css'

interface BeerProps {
  beer: BeerType,
}

export function Beer({ beer }: BeerProps) {
  return (
    <div className='beer-container'>
      <p className="title">{beer.title}</p>
    </div>
  )
}