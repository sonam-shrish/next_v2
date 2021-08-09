import React from 'react';
import Header from './components/ui/Header';
// import SearchBar from './components/ui/SearchBar';
import IndividualEmployerDashboard from './components/dashboards/individualEmployerDashboard/IndividualEmployerDashboard';
import SearchResultCard from './components/search/SearchResultCard';
import SearchResults from './components/search/SearchResults';
import SignUp from './components/forms//SignUp';

const App = () => {
	return (
		<>
			<Header />
			<IndividualEmployerDashboard />
		</>
	);
};

export default App;
