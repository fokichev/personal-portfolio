import './styles/App.scss'
import useMediaQuery from './hooks/useMediaQuery';

import Navbar from './components/Navbar';
import TitlePage from './pages/TitlePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactMePage from './pages/ContactMePage';
import Footer from './pages/Footer';

const MOBILE_WIDTH = 640;
const TABLET_WIDTH = 1040;

const App = () => {
	const mobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH}px)`);
	const tablet = !mobile && useMediaQuery(`(max-width: ${TABLET_WIDTH}px)`);
	const desktop = !(mobile || tablet);

	const orientation = { mobile, tablet, desktop };

	const links = {
		upWorkLink: "https://www.upwork.com/freelancers/~01c0d5ed9e5dc8fd3c",
		fiverrLink: "https://www.upwork.com/freelancers/~01c0d5ed9e5dc8fd3c" // temp
	};

	return (
		<>
			<a id="home"/>
			<div className='app'>
				<Navbar orientation={orientation}/>
				<TitlePage orientation={orientation}/>
				<AboutMePage orientation={orientation} links={links}/>
				<ServicesPage />
				<ExperiencePage />
				<PortfolioPage />
				<ContactMePage links={links}/>
				<Footer orientation={orientation}/>
			</div>
		</>
	)
}

export default App
