import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import CartCard from '../components/CartCard'
import PropTypes from 'prop-types'

class Cart extends Component {
	state = {
		total: 0
	}

	render() {
		const cartCards = this.props.cart.map(
			({ image, quote, author, price, id, quantity }) => {
				console.log("ak;sdjfa;dslkfaj", quantity)
				return (
					<CartCard
						quote={quote}
						image={image}
						author={author}
						price={price}
						id={id}
						quantity={quantity}
						addItemToCart={this.props.addItemToCart}
						removeItemFromCart={this.props.removeItemFromCart}
					/>
				)
			}
		)
		return (
			<>
				{cartCards}
				<Typography>Total: {this.state.total}</Typography>
			</>
		)
	}
}

export default Cart

Cart.propTypes = {
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired
}
