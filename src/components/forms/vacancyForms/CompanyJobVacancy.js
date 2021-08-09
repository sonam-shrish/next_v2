import React from 'react';
import {
	makeStyles,
	FormControl,
	FormControlLabel,
	FormLabel,
	Input,
	FormHelperText,
	FormGroup,
	RadioGroup,
	Radio,
	MenuItem,
	TextField,
	Button,
	Grid,
	Paper,
	Typography,
} from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles({
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
});
const CompanyRegistrationForm = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.container}>
				<form>
					<Typography className={classes.title} variant='h4' component='h2'>
						Company Job Vacancy
					</Typography>
					<Grid container spacing={8}>
						<Grid item xs={12} md={6}>
							{/* Job Title */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									required
									variant='outlined'
									size='small'
									label='Job Title'
									id='job-title'
								/>
							</FormControl>

							{/* Job Category */}

							<FormControl fullWidth className={classes.formControl}>
								<TextField
									select
									label='Job Category'
									id='job-category'
									variant='outlined'
									size='small'
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</TextField>
							</FormControl>

							{/* Location */}

							<FormControl fullWidth className={classes.formControl}>
								<TextField
									required
									variant='outlined'
									size='small'
									label='Location'
									id='location'
								/>
							</FormControl>

							{/* Contact */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									variant='outlined'
									size='small'
									label='Contact'
									id='contact'
									type='number'
									aria-describedby='contact'
								/>
							</FormControl>
							{/* Salary */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									type='number'
									size='small'
									variant='outlined'
									label='Minimum Salary'
									id='minimum-salary'
									aria-describedby='minimum-salary'
								/>
							</FormControl>
							{/* Schedule */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									type='time'
									size='small'
									variant='outlined'
									label='Start 
                  Time'
									id='start-time'
									aria-describedby='start-time'
								/>
							</FormControl>
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									type='time'
									size='small'
									variant='outlined'
									label='End 
                  Time'
									id='end-time'
									aria-describedby='end-time'
								/>
							</FormControl>

							{/* Number of hires */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									type='number'
									size='small'
									variant='outlined'
									label='Number of hires'
									id='number of hires'
									aria-describedby='number of hires'
								/>
							</FormControl>
							{/* Minimum  Experience */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									label='Minimum Experience'
									size='small'
									variant='outlined'
									id='minimum-experience'
									aria-describedby='minimum-experience'
								/>
							</FormControl>

							{/* Minimum Education */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									label='Minimum Education'
									size='small'
									variant='outlined'
									id='minimum-education'
									aria-describedby='minimum-education'
								/>
							</FormControl>

							{/* Total Number of Employees */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									label='Number of Employees'
									size='small'
									variant='outlined'
									id='number-of-employees'
									aria-describedby='number-of-employees'
								/>
							</FormControl>

							{/* APPLY THROUGH */}
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Apply Through</FormLabel>
								<RadioGroup
									row
									aria-label='position'
									name='position'
									defaultValue='male'
								>
									<FormControlLabel
										value='phone'
										control={<Radio color='primary' />}
										label='Phone'
									/>
									<FormControlLabel
										value='viber'
										control={<Radio color='primary' />}
										label='Viber'
									/>
									<FormControlLabel
										value='cv'
										control={<Radio color='primary' />}
										label='C.V.'
									/>
									<FormControlLabel
										value='email'
										control={<Radio color='primary' />}
										label='Email'
									/>
								</RadioGroup>
							</FormControl>

							{/* Application Deadline */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									type='date'
									required
									variant='outlined'
									size='small'
									label='Application Deadline'
									placeholder='Application Deadline'
									id='application-deadline'
									aria-describedby='application-deadline'
								/>
							</FormControl>
						</Grid>
					</Grid>
					<Button color='secondary' variant='contained' fullWidth>
						Submit
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default CompanyRegistrationForm;
