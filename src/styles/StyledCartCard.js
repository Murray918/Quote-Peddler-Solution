import styled from 'styled-components'
import React from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

const CartCartStyles = styled(Card)`
	@media screen and (min-width: 800px) {
		display: flex;
		flex-direction: row;
		margin-top: 4vh;
	}
	display: flex;
	flex-direction: row;
	margin-top: 4vh;

	.card-action-area-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        justify-content: space-between;
		width: 100%;
		flex-shrink: 2;
		flex-grow: 1;
    }
    .card-action-area {
        display: flex;
        justify-content: space-around;
    }
    .card-quantity {
        text-align: center;
        margin-top: 2vh;
    }
	.card-info-area {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
		width: 100%;
		flex-grow: 2;
        padding-bottom: 1vh;
        padding-left: 1vh
    }
    
    .add-button {
        background-color: green;
    }

    .remove-button {
        background-color: red;
    }
    
	.media-image-wrapper {
		flex-shrink: 2;
		width: 100%;
		flex-grow: 1;
    }
    
    .card-action-button {
        height: .5vh;
        width:  3vh;
        margin-bottom: 1vh;
    }
    .card-action-icon {
        height: 1vh;
        width: 1vh;
    }

`

export default function StyledCartCart({ children, ...props }) {
	return <CartCartStyles {...props}>{children}</CartCartStyles>
}

StyledCartCart.propTypes = {
	children: PropTypes.node.isRequired
}
