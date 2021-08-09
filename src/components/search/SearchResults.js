import React from 'react';
import SearchResultCard from './SearchResultCard';
import SearchFilter from './SearchFilter';
//mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Hidden from '@material-ui/core/Hidden';
import EmailSubscriptionForm from '../EmailSubscriptionForm';

const SearchResults = () => {
	return (
		<div>
			<Grid container spacing={2}>
				<Hidden smDown>
					<Grid item md={4} lg={3}>
						<SearchFilter />
						<br />
						<EmailSubscriptionForm />
					</Grid>
				</Hidden>

				<Grid item xs={12} sm={12} md={8} lg={9}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={12}>
							<Typography variant='h5' component='h3'>
								Search results for {"' "} <strong>Koteshwor</strong>
								{" '"}
							</Typography>
							<FormControl fullWidth>
								<TextField
									select
									label='Sort Results'
									variant='outlined'
									size='small'
									defaultValue='10'
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</TextField>
							</FormControl>
						</Grid>

						<SearchResultCard />
						<SearchResultCard />
						<SearchResultCard />
						<SearchResultCard />
						<SearchResultCard />

						<SearchResultCard />

						<SearchResultCard />
						<SearchResultCard />
						<SearchResultCard />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default SearchResults;
