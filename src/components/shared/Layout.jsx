import React from "react";

// outlet is used because layout is wrapping dashboard
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Header";

const Layout = () => {
	const title1 = "VOLTAGE DROP CALCULATOR"

	return (
		<div className="bg-neutral-50 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-auto">
				{/* <Header title={title1}/> */}
				<div className="grid grid-cols-2 gap-20 p-4 md:pr-20 min-h-0">
					<Outlet />
				</div>
			</div>
		</div>
	)
};

export default Layout;