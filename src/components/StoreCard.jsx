import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	card: {
		maxWidth: 245
	}
})

export default function StoreCard({ id, name, image, quote }) {
	const classes = useStyles()
	return (
		<div className="store-card">
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="140"
						image={image}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{quote}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className="card-action-container">
					<Button className="cart-button" size="small" color="primary">
						Add To Cart
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}

StoreCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string,
	image: PropTypes.string,
	quote: PropTypes.string
}
