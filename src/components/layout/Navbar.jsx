import React from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
            <NavigationMenu style={{color:"#FFFDF0",backgroundColor:"#819A91"}} className="justify-start min-w-full font-semibold py-2">
                <NavigationMenuList className="flex justify-start gap-x-6 px-4">
					<NavigationMenuItem>
						<NavigationMenuLink className=" text-xl" asChild>
							<Link to="/">Home</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
                    <NavigationMenuItem >
						<NavigationMenuLink className=" text-xl" asChild><Link to="/add">Add Expense</Link></NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}

export default Navbar;
