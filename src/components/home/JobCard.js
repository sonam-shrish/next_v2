import React from 'react';
import {
	Chip,
	makeStyles,
	Card,
	CardContent,
	Typography,
	Grid,
} from '@material-ui/core';
import testImg from '../../components/test/images/doctor.svg';

const useStyles = makeStyles({
	row1: {
		display: 'flex',
		marginBottom: '10px',
	},

	jobIcon: {
		height: '70px',
		width: '70px',
		borderRadius: '50%',
		marginRight: '10px',
	},
	jobTitle: {
		lineHeight: '1',
		fontSize: '1em',
	},
	jobDetails: {
		maxWidth: '250px',
		minWidth: '230px',
	},
	chips: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});
const JobCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent m={10}>
				<Grid item sm={10} md={11} lg={11}>
					<div className={classes.row1}>
						<img className={classes.jobIcon} src={testImg} />
						<div id='home__job_details'>
							<Typography
								variant='h6'
								component='h4'
								className={classes.jobTitle}
							>
								Secondary Level Math Teacher Secondary Level Math Teacher
							</Typography>
							<small>Koteshwor, Kathmandu</small>
						</div>
					</div>
					<div className={classes.chips}>
						<Chip label='Full time' />
						<Chip label='Rs. 10,000/mo' />
					</div>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default JobCard;
