import React from 'react'
import './App.css'
import { Container } from '@material-ui/core'
import Nav from './components/Nav'
import Store from './views/Store'
import AddAndUpdate from './views/AddAndUpdate'
import Cart from './views/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Nav>
					<Container>
						<main>
							<Route exact path="/" component={Store} />
							<Route path="/cart" component={Cart} />
							<Route path='/add' component={AddAndUpdate} />
						</main>
					</Container>
				</Nav>
			</Switch>
		</BrowserRouter>
	)
}

export default App
