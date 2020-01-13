import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// Material UI
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {
	AppBar,
	Typography,
	IconButton,
	Badge,
	Toolbar
} from '@material-ui/core'

// Styles
import { StyledNavWrapper } from '../styles/StyledNavWrapper'

function Nav({ children, cartBadgeTotal }) {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<StyledNavWrapper>
						<div className="home-wrapper">
							<IconButton
								edge="start"
								component={Link}
								to="/"
								color="inherit"
								aria-label="home"
							>
								<HomeIcon />
							</IconButton>
							<div className="nav-title">
								<Typography variant="h6">The Quote Peddler</Typography>
							</div>
						</div>
						<div className="cart-icon-wrapper">
							<IconButton
								edge="start"
								component={Link}
								to="/cart"
								color="inherit"
								aria-label="cart"
							>
								<Badge badgeContent={cartBadgeTotal} color="error">
									<ShoppingCartIcon />
								</Badge>
							</IconButton>
						</div>
					</StyledNavWrapper>
				</Toolbar>
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
