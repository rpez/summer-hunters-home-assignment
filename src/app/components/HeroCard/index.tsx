// It is your job to implement this. More info in README

import * as React from 'react'
import { TElement } from 'src/server/types/element'

import './style.css'

interface IHeroCardProps {
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

interface IHeroCardState {
  isLarge?: boolean
}

class HeroCard extends React.Component<IHeroCardProps, IHeroCardState> {
  constructor(props: IHeroCardProps) {
    super(props)

    this.state = {
      isLarge: false
    }
  }

  render() {
    return (
      <div className="card text-center">
        <div className="overflow">
          <img src={this.props.imgUrl} alt="Main Image" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-description text-secondary">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default HeroCard