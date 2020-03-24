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

  setHighlight: (card: any) => void
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

  toggleLarge = () => {
    this.setState({ isLarge: !this.state.isLarge })
  }

  render() {
    return (
      <div className={this.state.isLarge ? "large-card text-center" : "card text-center"} onClick={this.props.setHighlight}>
        <div className="overflow">
          <img src={this.props.hero.imgUrl} alt="Main Image" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.hero.name}</h4>
          <p className="card-description text-secondary">{this.props.hero.description}</p>
        </div>
      </div>
    )
  }
}

export default HeroCard