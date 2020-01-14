import styled from 'styled-components'
import React from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

const CartCartStyles = styled(Card)`
	display: flex;
	flex-direction: row;
	margin-top: 4vh;


	.info-container {
		display: flex;
		flex-flow: column nowrap;
        justify-content: space-between;
		flex-grow: 2;
        padding: 1vh;
	}

	.add-button {
		background-color: #14a37f;
        height: 2vh;
        width: 3.5vh;
        margin-bottom: 0;
	}

	.remove-button {
		background-color: #ef5350;
        margin-left: 4vh;
        height: 2vh;
        width: 3.5vh;
        margin-bottom: 0;
    
	}

	.info-flex-top {
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
	}
	.info-flex-middle {
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
	}
	.info-flex-bottom {
		display: flex;
		flex-flow: row;
		justify-content: flex-end;
		align-content: flex-end;
	}
`

export default function StyledCartCart({ children, ...props }) {
	return <CartCartStyles {...props}>{children}</CartCartStyles>
}

StyledCartCart.propTypes = {
	children: PropTypes.node.isRequired
}
