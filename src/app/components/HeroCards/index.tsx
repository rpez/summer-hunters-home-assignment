import * as React from 'react'

import { HeroCard } from '../HeroCard';
import { HeroHighlight } from '../HeroHighlight';
import { TElement } from 'src/server/types/element'
import { useEffect } from 'react';

import './style.css'

interface IHeroCardsProps {
  heroes: [{
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
  }]
}

interface IHeroCardsState {
  highlightHero?: any
  heroRef?: any
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

class HeroCards extends React.Component<IHeroCardsProps, IHeroCardsState> {
  constructor(props: IHeroCardsProps) {
    super(props)

    this.state = {
      highlightHero: null,
      heroRef: null
    }
  }

  componentDidMount() {
    this.setState({ heroRef: React.createRef() })
  }

  setHighlight = (hero) => {
    this.setState({ highlightHero: hero })
  }

  highlightHero() {
    if (this.state.highlightHero) {
      scrollToRef(this.state.heroRef)
      return (
        <HeroHighlight hero={this.state.highlightHero} />
      )
    }
    else return
  }

  render() {
    return (
      <div className="whole-container">
        <div ref={this.state.heroRef} className="card-highlight d-flex justify-content-center">
          {this.highlightHero()}
        </div>
        <div className="container-fluid d-flex justify-content-flex">
            <div className="row">
                {this.props.heroes.map(hero => (
                    <div key={hero.name} className="col-md-4">
                        <HeroCard hero={hero} setHighlight={this.setHighlight} />
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
  }
}

export default HeroCards