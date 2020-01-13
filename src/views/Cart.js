import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import CartCard from '../components/CartCard'
import { cart } from '../data/data'

class Cart extends Component {
	state = {
		total: 0
	}

	componentDidMount() {
		this.setState((state, props) => ({
			[state.total]: props.total
		}))
		console.log(this.state.total)
	}

	handleAddClick = event => {
		event.preventDefault()
		console.log('clicked add')
	}

	handleRemoveClick = event => {
		event.preventDefault()
		console.log('clicked remove')
	}

	render() {
		const cartCards = cart.map(
			({ image, quote, author, price, id, quantity }) => {
				return (
					<CartCard
						quote={quote}
						image={image}
						author={author}
						price={price}
						id={id}
						quantity={quantity}
					/>
				)
			}
		)
		return <>
		{cartCards}
		 <Typography>Total: {this.state.total}</Typography>
		</>
	}
}

export default Cart
