import React from 'react';
import Header from './components/ui/Header';
// import SearchBar from './components/ui/SearchBar';
import JobSeekerRegistrationForm from './components/forms/registrationForms/JobSeekerRegistrationForm';
import SignUp from './components/forms//SignUp';

const App = () => {
	return (
		<>
			<Header />
			<SignUp />
			{/* <SearchBar />
			
			<RecentJobs /> */}
		</>
	);
};

export default App;
