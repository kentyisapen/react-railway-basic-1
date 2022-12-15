import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/page/Index";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />}></Route>
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
