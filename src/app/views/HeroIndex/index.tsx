import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import HeroCards from '../../components/HeroCards';
import { TElement } from 'src/server/types/element';

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attribute  {
				strength
				intelligence
				stamina
				agility
				speed
			}
			lifepower {
				healthpoints
				mana
			}
			resistance
			weakness
			skills {
				name
				damage
				element
			}
		}
	}
`;

interface IHeroIndexProps {}

interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  attribute: {
	strength: number;
	intelligence: number;
	stamina: number;
	agility: number;
	speed: number;
  };
  lifepower: {
	healthpoints: number;
	mana: number;
  };
  resistance: TElement;
  weakness: TElement;
  skills: [{
	name: string;
	damage: number;
	element: TElement;
  }];
}

const HeroCardContainer = styled.div`
	display: flex;
	padding: 50px;
	align-self: center;
	max-width: 1150px;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
	}
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const {
		data: { heroes },
		error,
		loading,
	} = useQuery<{ heroes: [IHero] }>(HEROES_QUERY);

	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	console.log(heroes);

	return (
		<main>
			<TopBar />
			<Hero />
			<Section
				heading={'Hunter Index'}
				paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Down below you can see our fiercest candidates.
        `}
			/>

			{/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
			<HeroCardContainer>
				<HeroCards heroes={heroes}></HeroCards>
			</HeroCardContainer>

			<Footer />
		</main>
	);
};
