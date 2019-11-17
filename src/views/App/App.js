import React from "react"
import GlobalStyle from "../../style/GlobalStyle"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../Home/Home"
import About from "../About/About"
import Navigation from "../../containers/Navigation/Navigation"
import Header from "../../containers/Header/Header"
import { AppContainer } from "./App.style"

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Router>
				<Navigation />
				<AppContainer>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</Switch>
				</AppContainer>
			</Router>
		</>
	)
}

export default App
