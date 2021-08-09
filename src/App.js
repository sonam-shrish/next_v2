import React from 'react';
import Header from './components/ui/Header';
// import SearchBar from './components/ui/SearchBar';
import CompanyRegistrationForm from './components/forms/registrationForms/CompanyRegistrationForm';
import SearchResultCard from './components/search/SearchResultCard';
import SearchResults from './components/search/SearchResults';
import SignUp from './components/forms//SignUp';

const App = () => {
	return (
		<>
			<Header />
			{/* <SearchResults /> */}
			<CompanyRegistrationForm />
			{/* <SearchBar />
			
			
			<RecentJobs /> */}
		</>
	);
};

export default App;
