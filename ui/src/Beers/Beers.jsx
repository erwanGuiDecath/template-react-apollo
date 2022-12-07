import React from 'react'
import { map } from 'lodash'
import { Beer } from './Beer/Beer'
import { useBeers } from './Beers.hooks'
import './Beers.css'

export function Beers() {
  const { beers, loading } = useBeers()

  if (loading) {
    <div className="beers-container">
      <p>Loading ...</p>
    </div>
  }

  console.info(beers)

  return (
    <div className="beers-container">
      {map(beers, beer => <Beer beer={beer} />)}
    </div>
  )
}
