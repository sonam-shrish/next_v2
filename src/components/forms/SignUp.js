import {
	makeStyles,
	Container,
	Typography,
	TextField,
	Button,
	Grid,
	Box,
	Divider,
} from '@material-ui/core';

import { Facebook } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
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

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<a color='inherit' href='https://material-ui.com/'>
				Kaamxa.com
			</a>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const SignUp = () => {
	const classes = useStyles();

	return (
		<div>
			<Container component='main' maxWidth='xs'>
				<div className={classes.paper}>
					{/* title */}
					<Typography component='h1' variant='h5'>
						Sign Up
					</Typography>
					{/* GOOGLE SIGNIN */}
					<Button variant='outlined' fullWidth>
						<Facebook />
						Sign Up with Google
					</Button>
					<Button
						variant='outlined'
						fullWidth
						mt={4}
						className={classes.margin}
					>
						<Facebook />
						Sign Up with Facebook
					</Button>
					or Sign up with email
					<form className={classes.form}>
						{/* Email Address */}
						<TextField
							size='small'
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							type='email'
							name='email'
							label='Email Address'
							autoFocus
						/>
						{/* Password */}
						<TextField
							size='small'
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
						/>

						{/* Confirm Password */}
						<TextField
							size='small'
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='confirm-password'
							label='Confirm Password'
							type='password'
							id='confirm-password'
						/>

						{/* Sign Up */}
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign Up
						</Button>
						{/* Forgot Password and Sign Up */}

						{/* USE NEXT JS LINK HERE */}
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<a href='#' variant='body2'>
									Already have an account? Sign in
								</a>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default SignUp;
