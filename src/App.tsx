import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/page/Index";
import { New } from "./components/page/thread/New";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<main>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/thread/new" element={<New />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
