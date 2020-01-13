import styled from 'styled-components'

export const StyledStoreCardContainer = styled.div`
	margin: 8vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	.store-card {
		margin-bottom: 6vh;
	}
	.card-action-container {
		display: flex;
		flex-direction: row-reverse;
	}

	.add-button {
		height: 12vh;
		width: 12vh;
		position: fixed;
		bottom: 2%;
		right: 8%;
		z-index: 1;
		background-color: #14a37f;
	}
`
