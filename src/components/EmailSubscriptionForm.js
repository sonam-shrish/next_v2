import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EmailSubscriptionForm = () => {
	return (
		<div>
			{/* Email Subscription */}

			<Card>
				<CardContent>
					<Typography variant='h5' component='h5'>
						Let jobs find you!
					</Typography>
					<Typography variant='subtitle1' component='p'>
						Create a Job Alert and never miss a new job post.
					</Typography>
					<form>
						<FormControl>
							<TextField
								required
								label='Email Address'
								size='small'
								variant='outlined'
								type='email'
								placeholder='enter your email address'
							/>
							<br />
							<TextField
								required
								label='Mobile/Phone'
								size='small'
								variant='outlined'
								type='number'
								placeholder='Enter your mobile/phone number'
							/>
							<br />
							<Button variant='contained' color='primary'>
								Get Job Alerts!
							</Button>
						</FormControl>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default EmailSubscriptionForm;
