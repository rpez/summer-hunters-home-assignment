// It is your job to implement this. More info in README

import * as React from 'react'
import { TElement } from 'src/server/types/element'

import './style.css'

interface IHeroHighlightProps {
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
}

export const HeroHighlight: React.FC<IHeroHighlightProps> = ({ hero }) => {
  return (
    <div className="highlight-container container-fluid border rounded">
        <div className="row">
            <div className="col-md-6">
                <img src={hero.imgUrl} alt="Main Image" className="highlight-img img-fluid" />
                <div className="no-margin row">
                    <div className="lifepower list-group">
                        <li className="list-group-item">Health: {hero.lifepower.healthpoints}</li>
                        <li className="list-group-item">Mana: {hero.lifepower.mana}</li>
                        <li className="list-group-item">Resistance: {hero.resistance}</li>
                        <li className="list-group-item">Weakness: {hero.weakness}</li>
                    </div>
                    <ul className="attributes list-group">
                        <li className="list-group-item">Agility: {hero.attribute.agility}</li>
                        <li className="list-group-item">Intelligence: {hero.attribute.intelligence}</li>
                        <li className="list-group-item">Speed: {hero.attribute.speed}</li>
                        <li className="list-group-item">Stamina: {hero.attribute.stamina}</li>
                        <li className="list-group-item">Strength: {hero.attribute.strength}</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <h4 className="highlight-card-title card-title">{hero.name}</h4>
                <p className="highlight-card-description card-description text-secondary">{hero.backStory}</p>
                <div className="card-deck">
                    {hero.skills.map(skill => (
                        <div key={skill.name} className="skill-card card">
                            <h6 className="card-title">{skill.name}</h6>
                            <p className="card-text card-description">Damage: {skill.damage}</p>
                            <p className="card-text text-secondary">Element: {skill.element}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
