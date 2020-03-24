import * as React from 'react'

import HeroCard from '../HeroCard';
import { TElement } from 'src/server/types/element'

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
  highlightCard?: HeroCard
}

class HeroCards extends React.Component<IHeroCardsProps, IHeroCardsState> {
  constructor(props: IHeroCardsProps) {
    super(props)

    this.state = {
      highlightCard: null
    }
  }

  setHighlight = (card) => {
    this.setState({ highlightCard: card })
  }

  render() {
    return (
      <div className="whole-container">
        <div className="card-highlight">

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