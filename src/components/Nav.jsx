import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

function Nav({ children, location }) {
	return (
		<>
			<AppBar position="static">
				<Tabs
					variant="fullWidth"
					value={location.pathname}
					aria-label="nav tabs example"
				>
					<Tab label="Store" component={Link} to="/" />
					<Tab label="Add" component={Link} to="/add" />
					<Tab label="Cart" value="/settings" component={Link} to="/cart" />
				</Tabs>
			</AppBar>
			{children}
		</>
	)
}

export default withRouter(Nav)

Nav.propTypes = {
	location: PropTypes.object.isRequired,
	children: PropTypes.node
}
