import React from 'react'
import StoreCard from '../components/StoreCard'
import { Link, withRouter } from 'react-router-dom'
import { philosophers } from '../data/data'
import { StyledStoreCardContainer } from '../styles/StyledStoreCardContainer'
import AddIcon from '@material-ui/icons/Add'
import { Fab } from '@material-ui/core'

function Store() {
	const composedCards = philosophers.map(({ id, name, image, quote }) => {
		return <StoreCard key={id} name={name} image={image} quote={quote} />
	})

	return (
		<section aria-label="store area">
			<StyledStoreCardContainer>
				<Fab
					aria-label="add"
					className="add-button"
					component={Link}
					to="/add"
				>
					<AddIcon />
				</Fab>
				{composedCards}
			</StyledStoreCardContainer>
		</section>
	)
}

export default withRouter(Store)
