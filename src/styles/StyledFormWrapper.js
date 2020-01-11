import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
	margin: 15vh;
    padding: 8vh;
    .submit-button {
        margin-top: 8vh;
        color:red;

	}
    .price-author-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    } 

    .price-author-wrapper :first-child {
      width : 99%;
      margin-right: 10%;
    }
`
