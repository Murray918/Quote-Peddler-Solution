import React from 'react'
import StoreCard from '../components/StoreCard'
import { philosophers } from '../data/data'
import { StyledStoreCardContainer } from '../styles/StyledStoreCardContainer'

function Store() {
	const composedCards = philosophers.map(({ id, name, image, quote }) => {
		return <StoreCard key={id} name={name} image={image} quote={quote} />
	})

	return (
		<section>
			<StyledStoreCardContainer>{composedCards}</StyledStoreCardContainer>
		</section>
	)
}

export default Store
