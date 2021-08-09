import React from 'react';
import Header from './components/ui/Header';
import SearchBar from './components/ui/SearchBar';
import CompanyJobVacancy from './components/forms/vacancyForms/CompanyJobVacancy';
import RecentJobs from './components/home/recentJobs/RecentJobs';

import styled from 'styled-components';
const MainApp = styled.div`
	.mainApp {
		margin: auto;
		padding: 20px;
	}

	@media only screen and (max-width: 414px) {
		.mainApp {
			padding: 0 10px;
			max-width: 400px;
			min-width: 360px;
			margin: auto;
		}
	}

	@media only screen and (max-width: 1280px) {
		.mainApp {
			padding: 10px;
			max-width: 1000px;
			margin: auto;
		}
	}

	@media only screen and (min-width: 1281px) {
		.mainApp {
			max-width: 1440px;
			padding: 0 40px;
			margin: auto;
		}
	}
`;

const App = () => {
	return (
		<MainApp>
			<Header />
			{/* <SearchBar />
			<CompanyJobVacancy />
			<RecentJobs /> */}
		</MainApp>
	);
};

export default App;
