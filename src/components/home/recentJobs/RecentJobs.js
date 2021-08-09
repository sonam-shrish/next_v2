import JobCard from '../JobCard';

// MUI imports
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import Link from 'next/link';

import styled from 'styled-components';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 550 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 550, min: 0 },
		items: 1,
	},
};

const ResponsiveGrid = styled(Grid)`
	display: none;
	@media (min-width: 600px) {
		display: block;
	}
`;
const useStyles = makeStyles({
	title: {
		marginBottom: '1em',
	},
	carousel: { marginLeft: '10px' },
});

const RecentJobs = () => {
	const classes = useStyles();
	//
	return (
		<div>
			<Typography variant='h4' component='h2' className={classes.title}>
				Recent Jobs
			</Typography>

			{/* <Carousel
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				itemClass='carousel-item-padding-40-px'
				className={classes.carousel}
			>
				<JobCard />
				<div>I am in between</div>
				<JobCard />
				<JobCard />
			</Carousel> */}
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} mad={6} lg={3}>
					<JobCard />
				</Grid>
				<Grid item xs={12} sm={6} mad={6} lg={3}>
					<JobCard />
				</Grid>
				{/* if the screen is mobile we only want to show 2 recent jobs so that the page doesn't get too long and we don't have to use a carousel. for that a styled component ResponsiveGrid is created which is invisible(display:none) when the screen is xtra small */}
				<ResponsiveGrid item sm={6} mad={6} lg={3}>
					<JobCard />
				</ResponsiveGrid>
				<ResponsiveGrid item sm={6} mad={6} lg={3}>
					<JobCard />
				</ResponsiveGrid>
			</Grid>
			<center>
				<Link href='/'>More Recent Jobs</Link>
			</center>
		</div>
	);
};

export default RecentJobs;
