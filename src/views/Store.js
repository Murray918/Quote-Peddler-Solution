import React from 'react'
import PropTypes from 'prop-types'
import StoreCard from '../components/StoreCard'
import { Link, withRouter } from 'react-router-dom'
import { StyledStoreCardContainer } from '../styles/StyledStoreCardContainer'
import AddIcon from '@material-ui/icons/Add'
import { Fab } from '@material-ui/core'

function Store({ store, addItemToCart }) {
	const composedCards = store.map(({ id, name, image, quote, quantity, price }) => {
		return (
			<StoreCard
				key={id}
				id={id}
				name={name}
				quantity={quantity}
				image={image}
				quote={quote}
				price={price}
				addItemToCart={addItemToCart}
			/>
		)
	})

	return (
		<section aria-label="store area">
			<StyledStoreCardContainer>
				<Fab aria-label="add" className="add-button" component={Link} to="/add">
					<AddIcon />
				</Fab>
				{composedCards}
			</StyledStoreCardContainer>
		</section>
	)
}

export default withRouter(Store)

Store.propTypes = {
	store: PropTypes.array.isRequired,
	addItemToCart: PropTypes.func.isRequired
}
