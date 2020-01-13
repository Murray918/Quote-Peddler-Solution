import React, { Component } from 'react'
import './App.css'
import { getTotalItemsInCart } from './utils'
import { Container } from '@material-ui/core'
import { cart, store } from './data'
import Nav from './components/Nav'
import Store from './views/Store'
import AddAndUpdate from './views/AddAndUpdate'
import Cart from './views/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class App extends Component {
	state = {
		storeData: [],
		cartData: []
	}

	componentDidMount() {
		this.setState({
			storeData: store,
			cartData: cart
		})
	}

	addItemToCart = id => {
		let newCartItem
		let newCart
		let newStore

		//is that item in the cart
		const isItemInCart = this.state.cartData.some(item => item.id === id)

		//if it is in the cart
		if (isItemInCart) {
			//get the item from the cart
			newCartItem = this.state.cartData.find(item => item.id === id)
			// increment the quantity
			newCartItem.quantity += 1
			//get item from cart set it to the newCartItem
			newCartItem = this.state.cartData.find(item => item.id === id)
			//make a new cart without the item
			const cartToUpdate = this.state.cartData.filter(item => item.id !== id)
			//construct a new cart with the the item on top
			newCart = [{ ...newCartItem }, ...cartToUpdate]
		} else {
			//get the item from the storeData
			newCartItem = this.state.storeData.find(item => item.id === id)
			//initialize the new cartItem quantity with 1
			newCartItem.quantity = 1
			// then just put it on top of the cart
			newCart = [{ ...newCartItem }, ...this.state.cartData]
		}

		//set up newStore copy
		let tempStore = [...this.state.storeData]
		//get the index of the item to deal with
		const indexOfStoreItem = tempStore.map(item => item.id).indexOf(id)
		//decrement that item
		tempStore[indexOfStoreItem].quantity--

		//if there are not any more storeItems
		if (tempStore[indexOfStoreItem].quantity <= 0) {
			//get rid of the store item
			newStore = tempStore.filter(item => item.id !== id)
		} else {
			//remove the item from the old store and put temp in
			newStore = [
				tempStore[indexOfStoreItem],
				...tempStore.filter(item => item.id !== id)
			]
		}
		// then set our state
		this.setState({
			storeData: newStore,
			cartData: newCart
		})
	}

	removeItemFromCart = id => {
		let newCart
		// find the cart item to deal with
		const itemToRemove = this.state.cartData.find(item => item.id === id)
		// get our array without itemToRemove
		const cartWithoutItem = this.state.cartData.filter(item => item.id !== id)
		//if there are more than one in the cart
		if (itemToRemove.quantity > 1) {
			// decrement the quantity
			itemToRemove.quantity -= 1
			newCart = [itemToRemove, ...cartWithoutItem]
		} else {
			newCart = cartWithoutItem
		}
		//update the store
		let newStore
		//is it available in the store
		const isRemovedInTheStore = this.state.storeData.some(
			item => item.id === id
		)

		//remove the item from the store
		const tempStoreNoItem = this.state.storeData.filter(item => item.id !== id)

		if (isRemovedInTheStore) {
			//get the item from the store
			const itemFromStore = this.state.storeData.find(item => item.id === id)
			//add the quantities together
			itemFromStore.quantity += 1
			newStore = [itemFromStore, ...tempStoreNoItem]
		} else {
			// do stuff here
			newStore = [itemToRemove, ...tempStoreNoItem]
		}

		this.setState({
			cartData: newCart,
			storeData: newStore
		})
	}

	render() {
		const cartBadgeTotal = getTotalItemsInCart(this.state.cartData)

		return (
			<BrowserRouter>
				<Switch>
					<Nav cartBadgeTotal={cartBadgeTotal}>
						<Container>
							<main>
								<Route
									exact
									path="/"
									render={() => (
										<Store
											store={this.state.storeData}
											addItemToCart={this.addItemToCart}
										/>
									)}
								/>
								<Route
									path="/cart"
									render={() => (
										<Cart
											cart={this.state.cartData}
											addItemToCart={this.addItemToCart}
											removeItemFromCart={this.removeItemFromCart}
										/>
									)}
								/>
								<Route path="/add" render={() => <AddAndUpdate />} />
							</main>
						</Container>
					</Nav>
				</Switch>
			</BrowserRouter>
		)
	}
}
