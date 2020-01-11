import styled from 'styled-components'

export const StyledNavWrapper = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.nav-title {
		padding-top: 0.74vh;
	}
	.home-wrapper {
		display: flex;
		flex-direction: row;
	}

	.add-button-wrapper {
		position: sticky;
		bottom: -4px;
		right: 10px;
	}
`
