// It is your job to implement this. More info in README

import * as React from 'react'
import { TElement } from 'src/server/types/element'

import './style.css'

interface IHeroCardProps {
  hero: {
    name: string
    imgUrl: string
    description: string
    backStory: string
    attribute: {
      strength: number
      intelligence: number
      stamina: number
      agility: number
      speed: number
    }
    lifepower: {
      healthpoints: number
      mana: number
    }
    resistance: TElement
    weakness: TElement
    skills: [{
      name: string
      damage: number
      element: TElement
    }]
  }

  setHighlight: (hero: any) => void
}

export const HeroCard: React.FC<IHeroCardProps> = ({ hero, setHighlight }) => {
  return (
    <div className="card text-center" onClick={() => setHighlight(hero)}>
      <div className="overflow">
        <img src={hero.imgUrl} alt="Main Image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{hero.name}</h4>
        <p className="card-description text-secondary">{hero.description}</p>
      </div>
    </div>
  )
}
