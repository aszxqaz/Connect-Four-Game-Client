import { LazyMotion, domAnimation } from 'framer-motion'
import { createContext } from 'react'
import './App.css'
import { ScreenResolver } from './ScreenResolver'
import { Mechanics } from './mechanics/Mechanics'
import { GlobalStyle } from './components/GlobalStyle'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const mechanics = new Mechanics(632, 594)

export const MechanicsContext = createContext(mechanics)

function App() {
	return (
		<Provider store={store}>
			<MechanicsContext.Provider value={mechanics}>
				<LazyMotion features={domAnimation}>
					<GlobalStyle />
					<ScreenResolver />
				</LazyMotion>
			</MechanicsContext.Provider>
		</Provider>
	)
}

export default App
