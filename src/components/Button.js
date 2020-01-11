import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

function SubmitButton({ label, handleClick }) {
	return (
		<Button type="submit" variant="contained" color="primary">
			{label}
		</Button>
	)
}

export default SubmitButton

SubmitButton.propTypes = {
	label: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
}
