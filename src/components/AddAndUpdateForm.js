import React, { Component } from 'react'
import { TextField, FormControl, Paper, Typography } from '@material-ui/core'
import StyledPaper from '../styles/StyledFormContainer'
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
		console.log(!!this.props.update)
		return (
			<StyledPaper elevation={4}>
				<StyledFormWrapper>
					<FormControl fullWidth onSubmit={this.handleSubmit}>
						<Typography variant="h3" component="h2">
							Add Quote
						</Typography>
						<div>
							<TextField
								className="input-field"
								fullWidth
								label="quote"
								multiline
								type="text"
								name="quote"
								value={this.state.quote}
								onChange={this.handleChange}
							/>
							<TextField
								className="input-field"
								fullWidth
								label="image"
								type="text"
								name="image"
								value={this.state.image}
								onChange={this.handleChange}
							/>
						</div>
						<div className="price-author-wrapper">
							<div className="author-input">
								<TextField
									className="input-field"
									fullWidth
									label="Author"
									type="text"
									name="author"
									value={this.state.author}
									onChange={this.handleChange}
								/>
							</div>
							<div className="price-input">
								<TextField
									className="input-field"
									fullWidth
									label="Price"
									type="text"
									name="price"
									value={this.state.price}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="submit-button">
							<SubmitButton label="Submit" />
						</div>
					</FormControl>
				</StyledFormWrapper>
			</StyledPaper>
		)
	}
}

export default AddAndUpdateForm
