import React, { Component } from 'react'
import { TextField, FormControl, Paper } from '@material-ui/core'
import SubmitButton from './Button'
import { StyledFormWrapper } from '../styles/StyledFormWrapper'

class AddAndUpdateForm extends Component {
	state = {
		author: '',
		price: '',
		image: '',
		quote: '',
		error: ''
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log(44444, ' submitted : State :', this.state)
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<Paper elevation={4}>
				<StyledFormWrapper>
					<FormControl fullWidth onSubmit={this.handleSubmit}>
						<h1>update me</h1>

						<div>
							<TextField
								fullWidth
								label="quote"
								multiline
								type="text"
								name="quote"
								value={this.state.quote}
								onChange={this.handleChange}
							/>
							<TextField
								fullWidth
								label="image"
								type="text"
								name="image"
								value={this.state.image}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<TextField
								label="Price"
								type="text"
								name="price"
								value={this.state.price}
								onChange={this.handleChange}
							/>
							<TextField
								label="Author"
								type="text"
								name="author"
								value={this.state.author}
								onChange={this.handleChange}
							/>
						</div>
						<div className="submit-button">
							<SubmitButton label="Submit" />
						</div>
					</FormControl>
				</StyledFormWrapper>
			</Paper>
		)
	}
}

export default AddAndUpdateForm
