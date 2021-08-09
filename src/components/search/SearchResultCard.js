import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	IconButton,
	Chip,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

import { Favorite } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	row1: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	avatar: {
		width: '50px',
		height: '50px',
	},
	favoriteIcon: {
		width: '40px',
		height: '40px',
	},
	chips: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

const SearchResultCard = () => {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card className={classes.card}>
				<CardContent>
					<div className={classes.row1}>
						<Image src='' className={classes.avatar} alt='job avatar' />
						<IconButton>
							<Favorite className={classes.favoriteIcon} />
						</IconButton>
					</div>

					<Typography variant='h6' component='h2'>
						Job Title
					</Typography>
					<Typography color='textSecondary'>Koteshwor, Kathmandu</Typography>
					<Typography variant='body1' component='p'>
						well meaning and kindly.
					</Typography>
					<Typography variant='body1' component='p'>
						Looking for an experienced Secondary level science teacher at lorem
						lorem . Looking for an experienced Secondary level science teacher
						at lorem lorem .
					</Typography>
					<div className={classes.chips}>
						<Chip label='Full time' />
						<strong>
							<Chip label='Rs. 10,000/mo' />
						</strong>
					</div>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Button variant='outlined' size='small'>
						Learn More
					</Button>

					<Button variant='contained' color='primary'>
						Primary
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default SearchResultCard;
