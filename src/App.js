import React from 'react';
import Header from './components/ui/Header';
// import SearchBar from './components/ui/SearchBar';
import JobSeekerRegistrationForm from './components/forms/registrationForms/JobSeekerRegistrationForm';
import SearchResultCard from './components/search/SearchResultCard';
import SearchResults from './components/search/SearchResults';
import SignUp from './components/forms//SignUp';

const App = () => {
	return (
		<>
			<Header />
			<SearchResults />
			{/* <SearchBar />
			
			
			<RecentJobs /> */}
		</>
	);
};

export default App;
