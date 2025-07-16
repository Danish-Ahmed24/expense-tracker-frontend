import React from "react";
import Dashboard from "./components/pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddExpense from "./components/pages/AddExpense";
import NavbarNew from "./components/ui/NavbarNew";

const App = () => {
	return (
		<>
			<NavbarNew/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
		<Route path="/add" element={<AddExpense/>}></Route>
      </Routes>
		</>
	);
};

export default App;
