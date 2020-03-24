import * as React from 'react'

import HeroCard from '../HeroCard';

export const HeroCards = ({heroes}) => {
  return (
    <div className="container-fluid d-flex justify-content-flex">
        <div className="row">
            {heroes.map(hero => (
                <div key={hero.name} className="col-md-4">
                    <HeroCard {...hero} />
                </div>
            ))}
        </div>
    </div>
  )
}
