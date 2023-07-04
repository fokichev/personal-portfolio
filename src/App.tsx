import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import TitlePage from './pages/TitlePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';

import './styles/App.scss'
import useMediaQuery from './hooks/useMediaQuery';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactMePage from './pages/ContactMePage';

const MOBILE_WIDTH = 640;
const TABLET_WIDTH = 1040;

const App = () => {
	const mobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH}px)`);
	const tablet = !mobile && useMediaQuery(`(max-width: ${TABLET_WIDTH}px)`);
	const desktop = !(mobile || tablet);

	const orientation = { mobile, tablet, desktop };

	return (
		<>
			<div className='app'>
				<Navbar orientation={orientation}/>
				<TitlePage orientation={orientation}/>
				<AboutMePage orientation={orientation}/>
				<ServicesPage orientation={orientation}/>
				<ExperiencePage orientation={orientation}/>
				<PortfolioPage orientation={orientation}/>
				<ContactMePage orientation={orientation}/>
			</div>
		</>
	)
}

export default App
