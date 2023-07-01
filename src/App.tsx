import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import TitlePage from './pages/TitlePage';
import AboutMe from './pages/AboutMe';
import './styles/App.scss'
import useMediaQuery from './hooks/useMediaQuery';

const MOBILE_WIDTH = 640;
const TABLET_WIDTH = 1040;

const App = () => {
//   const [count, setCount] = useState(0)
	const mobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH}px)`);
	const tablet = !mobile && useMediaQuery(`(max-width: ${TABLET_WIDTH}px)`);
	const desktop = !(mobile || tablet);

	const orientation = { mobile, tablet, desktop };

	return (
		<>
			<div className="flex-col">
				<Navbar orientation={orientation}/>
				{/* <TitlePage orientation={orientation}/>
				<AboutMe orientation={orientation}/> */}
			</div>
			

		</>
	)
}

export default App
