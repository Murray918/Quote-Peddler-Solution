import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
    /* larger than 800 pixels  */
	@media screen and (min-width: 800px) {
		margin: 4vh;
		padding: 8vh;

		.input-field {
			margin-bottom: 6vh;
		}

		.submit-button {
			margin-top: 8vh;
			color: red;
		}
		.price-author-wrapper {
			display: flex;
            flex-direction: row;
            align-items: stretch;
			justify-content: space-between;
		}

		.price-author-wrapper :first-child {
			flex-grow: 3;
			margin-right: 2vh;
		}
	}
	.price_input {
		flex-grow: 1;
    }
    
    /* smaller than 800 pixels without media query */
    padding-top: 4vh;
    margin-top: 5vh;
	padding-left: 4vh;
	padding-right: 4vh;
	min-height: 80vh;
	.input-field{ 
		margin-bottom: 2vh;
	}
	.submit-button {
		margin-top: 4vh;
	}
`
