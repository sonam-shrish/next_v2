import React from 'react';
import {
	makeStyles,
	TextField,
	Grid,
	Button,
	FormControl,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { LocationOn, Work, Search } from '@material-ui/icons';

const useStyles = makeStyles({
	searchContainer: {
		marginTop: '2em',
		marginBottom: '2em',
	},
	searchInput: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#eff2f5',
		height: '40px',
		marginLeft: '10px',
		borderRadius: '999px',
	},
});

const SearchBar = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems='center'
			justify='center'
			spacing={1}
			className={classes.searchContainer}
		>
			<Grid item xs={12} sm={4}>
				<FormControl fullWidth>
					<TextField
						className={classes.jobTitle}
						variant='outlined'
						placeholder='Job Title'
						InputProps={{
							startAdornment: (
								<InputAdornment>
									<Work />
								</InputAdornment>
							),
						}}
					/>
				</FormControl>
			</Grid>

			<Grid item xs={12} sm={3}>
				<FormControl fullWidth>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment>
									<LocationOn />
								</InputAdornment>
							),
						}}
						variant='outlined'
						placeholder='location'
					/>
				</FormControl>
			</Grid>

			<Grid item xs={12} sm={2}>
				<Button
					size='large'
					fullWidth
					variant='contained'
					color='secondary'
					startIcon={<Search />}
				>
					Search
				</Button>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
