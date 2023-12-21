import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Page from "../src/Pages/Page"

function App() {

	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>


					<Route path="/page" element={<Page />} />

				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
