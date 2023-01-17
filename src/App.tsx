import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index as ThreadIndex } from "./components/page/Index";
import { New as ThreadNew } from "./components/page/thread/New";
import { Show as ThreadShow } from "./components/page/thread/Show";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<main>
					<Routes>
						<Route path="/" element={<ThreadIndex />} />
						<Route path="/thread/new" element={<ThreadNew />} />
						<Route path="/thread/:thread_id" element={<ThreadShow />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
