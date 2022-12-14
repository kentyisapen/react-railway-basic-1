import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThreadAPI } from "./api/thread";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/page/Index";

function App() {
	ThreadAPI.get.threads();
	return (
		<div className="App">
			<Header></Header>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
