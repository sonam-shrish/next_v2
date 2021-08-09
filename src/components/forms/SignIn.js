import {
	makeStyles,
	Container,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Grid,
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

const Login = () => {
	const classes = useStyles();

	return (
		<div>
			<Container component='main' maxWidth='xs'>
				<div className={classes.paper}>
					{/* Avatar and title */}
					<Typography component='h1' variant='h5'>
						Sign In
					</Typography>
					{/* GOOGLE SIGNIN */}
					<Button variant='outlined' fullWidth>
						<Facebook />
						Sign in with Google
					</Button>
					<Button
						variant='outlined'
						fullWidth
						mt={4}
						className={classes.margin}
					>
						<Facebook />
						Sign in with Facebook
					</Button>
					or Sign in with email
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
							autoComplete='current-password'
						/>
						{/* Remember Me */}
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						{/* Sign In */}
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign In
						</Button>
						{/* Forgot Password and Sign Up */}
						<Grid container>
							<Grid item xs>
								<a href='#' variant='body2'>
									Forgot Password
								</a>
							</Grid>
							<Grid item>
								{/* USE NEXT JS LINK HERE */}
								<a href='#' variant='body2'>
									{"Don't have an account? Sign Up"}
								</a>
							</Grid>
						</Grid>
					</form>
					.
				</div>
			</Container>
		</div>
	);
};

export default Login;
