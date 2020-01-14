import React from 'react'
import { Typography, CardActionArea, CardMedia, Fab } from '@material-ui/core'
import PropTypes from 'prop-types'
import { formatter } from '../utils'
import StyledCartCard from '../styles/StyledCartCard'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

function CartCard({
	author,
	quote,
	quantity,
	image,
	id,
	price,
	addItemToCart,
	removeItemFromCart
}) {
	const handleAddClick = event => id => {
		event.preventDefault()
		addItemToCart(id)
	}

	const handleRemoveClick = event => id => {
		event.preventDefault()
		removeItemFromCart(id)
	}

	return (
		<StyledCartCard>
			<div className="media-image-container">
				<CardMedia
					className="media-image"
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image={image}
					title="Contemplative Reptile"
				/>
			</div>
			<div className="info-container">
				<div className="info-flex-top">
					<Typography variant="h6">{author}</Typography>
					<Typography variant="h6" >
						Qty: {quantity}
					</Typography>
				</div>

				<div className="info-flex-middle">
					<Typography variant="h6" className="truncate">
						{quote}
					</Typography>
					<Typography>Price: {formatter.format(price)}</Typography>
				
				</div>
				<div className="info-flex-bottom">
					<Fab
						size="small"
						aria-label="add"
						onClick={event => handleAddClick(event)(id)}
						className="add-button card-action-button"
					>
						<AddIcon className="card-action-icon" />
					</Fab>
					<Fab
						aria-label="add"
						size="small"
						onClick={event => handleRemoveClick(event)(id)}
						className="remove-button card-action-button"
					>
						<RemoveIcon className="card-action-icon" />
					</Fab>
				</div>
			</div>
		</StyledCartCard>
	)
}
export default CartCard

CartCard.propTypes = {
	author: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
}
