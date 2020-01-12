import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const StyledPaperWrapper = styled(Paper)`
@media screen and (min-width: 800px){
    max-height: 70vh;
}
max-height: 53vh;
    
`

export default function StyledPaper({ children, elevation }) {
	return <StyledPaperWrapper elevation={elevation}>{children}</StyledPaperWrapper>
}

StyledPaper.propTypes = {
	children: PropTypes.node.isRequired,
	elevation: PropTypes.number
}
