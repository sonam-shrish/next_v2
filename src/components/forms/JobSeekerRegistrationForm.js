import React from 'react';

import {
	makeStyles,
	Container,
	Typography,
	Grid,
	TextField,
	Select,
	InputLabel,
	FormControl,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '800px',
		margin: '20px auto',
	},
	container: {
		padding: '20px',
	},
	formControl: {
		marginBottom: '20px',
	},
	uploadInputHTML: {
		display: 'none',
	},
	title: {
		marginBottom: '20px',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(2),
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

const JobSeekerRegistrationForm = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper component='main' className={classes.container}>
				<div className={classes.paper}>
					<Typography component='h1' variant='h5'>
						Job Seeker Registration Form
					</Typography>
					<form className={classes.form}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								{/* Full Name */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										required
										variant='outlined'
										size='small'
										label='Full Name'
										id='full-name'
										aria-describedby='full-name'
									/>
								</FormControl>
								{/* Date of Birth */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										type='date'
										required
										variant='outlined'
										size='small'
										label='Date of Birth'
										placeholder='Date of birth'
										id='date-of-birth'
										aria-describedby='date-of-birth'
									/>
								</FormControl>
								{/* Gender */}
								<RadioGroup
									row
									aria-label='position'
									name='position'
									defaultValue='male'
								>
									<FormControlLabel
										value='
									female'
										control={<Radio color='primary' />}
										label='
									Female'
									/>
									<FormControlLabel
										value='male'
										control={<Radio color='primary' />}
										label='Male'
									/>
									<FormControlLabel
										value='others'
										control={<Radio color='primary' />}
										label='Others'
									/>
								</RadioGroup>
								{/* Address */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										required
										variant='outlined'
										size='small'
										label='Address'
										id='address'
										aria-describedby='address'
									/>
								</FormControl>

								{/* Email Address */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										required
										variant='outlined'
										size='small'
										label='Email Address'
										id='email'
										aria-describedby='email address'
									/>
								</FormControl>

								{/* Mobile/Phone */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										required
										variant='outlined'
										size='small'
										label='Mobile/Phone'
										id='mobile-phone'
										aria-describedby='mobile-phone'
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6}>
								{/* Job Category*/}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										select
										label='Preferred Job Category'
										labelId='job-category'
										id='job-category'
										variant='outlined'
										size='small'
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</TextField>
								</FormControl>

								{/* Education */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										size='small'
										variant='outlined'
										name='education'
										placeholder='eg Bachelor in science'
										label='Education'
										multiline
										rows={3}
										rowsMax={4}
									/>
								</FormControl>

								{/* Education */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										size='small'
										variant='outlined'
										name='experience'
										placeholder='eg. 5 years of teaching experience'
										label='Experience'
										multiline
										rows={3}
										rowsMax={4}
									/>
								</FormControl>

								{/* Other Skills*/}
								<Grid container>
									<Grid item xs={8}>
										<FormControl fullWidth className={classes.formControl}>
											<TextField
												required
												variant='outlined'
												size='small'
												label='Other Skills'
												id='email'
												aria-describedby='email address'
											/>
										</FormControl>
									</Grid>
									<Grid item xs={4}>
										<Button variant='contained'>Add Skill</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</form>
				</div>
			</Paper>
		</div>
	);
};

export default JobSeekerRegistrationForm;
