import React from 'react';
import {
	makeStyles,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	FormGroup,
	Select,
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
						Company Registration
					</Typography>
					<Grid container spacing={8}>
						<Grid item xs={12} md={6}>
							{/* Full Name */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									required
									variant='outlined'
									size='small'
									label='Full Name'
									id='full-name'
									aria-describedby='company-name'
								/>
							</FormControl>

							{/* Industry */}

							<FormControl fullWidth className={classes.formControl}>
								<TextField
									select
									label='Select Industry'
									labelId='industry'
									id='industry-select'
									variant='outlined'
									size='small'
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</TextField>
							</FormControl>

							{/* Contact */}
							<FormControl fullWidth className={classes.formControl}>
								{/* <InputLabel htmlFor='mobile'>Mobile</InputLabel> */}
								<TextField
									variant='outlined'
									size='small'
									label='Mobile'
									id='mobile'
									type='number'
									aria-describedby='mobile'
								/>
							</FormControl>
							{/* Phone */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									size='small'
									variant='outlined'
									label='Phone'
									id='phone'
									aria-describedby='phone'
								/>
							</FormControl>

							{/* Email */}
							<FormGroup>
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										variant='outlined'
										size='small'
										label='Email'
										id='email'
										aria-describedby='email'
									/>
								</FormControl>
							</FormGroup>

							{/* Website */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									label='Website'
									size='small'
									variant='outlined'
									id='website'
									aria-describedby='website'
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
						</Grid>

						{/* Right side */}
						<Grid item xs={12} md={6}>
							{/* Address */}
							<FormGroup>
								<InputLabel id='address'>Address</InputLabel>
								{/* Province */}
								<FormControl fullWidth className={classes.formControl}>
									<TextField
										select
										labelId='province'
										id='province-select'
										variant='outlined'
										label='Select Province'
										size='small'
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</TextField>
								</FormControl>
							</FormGroup>

							{/* District */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									select
									size='small'
									variant='outlined'
									label='Select District'
									labelId='district'
									id='district-select'
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</TextField>
							</FormControl>

							{/* City */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									select
									size='small'
									variant='outlined'
									labelId='city'
									label='City'
									id='city-select'
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</TextField>
							</FormControl>
							{/* Local Area */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									size='small'
									variant='outlined'
									label='Area'
									id='area'
									aria-describedby='local-area'
								/>
							</FormControl>

							{/* Logo Upload */}
							<FormGroup>
								<input
									accept='image/*'
									id='thumbnail-upload'
									type='file'
									className={classes.uploadInputHTML}
									// onChange={handleThumbnailUpload}
								/>

								<FormControl fullWidth className={classes.formControl}>
									<label htmlFor='thumbnail-upload'>
										<Button
											color='primary'
											variant='contained'
											aria-label='upload picture'
											component='span'
										>
											Upload
											<PhotoCamera />
										</Button>
									</label>
								</FormControl>
							</FormGroup>

							{/* Company Details */}
							<FormControl fullWidth className={classes.formControl}>
								<TextField
									size='small'
									variant='outlined'
									name='company-details'
									placeholder='Eg. annual bonus'
									label='Company Details'
									multiline
									rows={3}
									rowsMax={4}
								/>
							</FormControl>
						</Grid>
					</Grid>
					<Button color='secondary' variant='contained' fullWidth>
						Submit
					</Button>
				</form>
			</Paper>
			{/* Test */}
			<FormControl fullWidth className={classes.formControl}>
				<InputLabel htmlFor='my-input'>Email address</InputLabel>
				<Input id='my-input' aria-describedby='my-helper-text' />
				<FormHelperText id='my-helper-text'>
					We'll never share your email.
				</FormHelperText>
			</FormControl>
		</div>
	);
};

export default CompanyRegistrationForm;
