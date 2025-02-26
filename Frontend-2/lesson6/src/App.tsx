import './App.css'
import { Component, Func, Button } from './Component'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Counter } from './Counter'
import { IncrementButton } from './Counter'

function App() {
	return (
		<>
			<Provider store={store}>
				<h1>App</h1>
				<Component />
				<p>{Func()}</p>
				<Button />
				<Counter /> 
				<IncrementButton />
			</Provider>
		</>
	)
}

export default App
