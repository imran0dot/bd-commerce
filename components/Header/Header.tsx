import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, ShoppingCartIcon } from "lucide-react";


type TNavigationMenu = {
    title: string,
    href: string
}

const navigationMenu: TNavigationMenu[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Shop",
        href: "/shop"
    },
    {
        title: "categories",
        href: "/categories"
    },
    {
        title: "about",
        href: "/about"
    },
    {
        title: "contact",
        href: "/contact"
    }
]


const Header: React.FC = () => {
    return (
        <div className="grid grid-cols-3 py-5 shadow-sm">
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        navigationMenu?.map((menu, index) => {
                            return (
                                <NavigationMenuItem key={index}>
                                    <Link href={menu?.href} className="capitalize">
                                        <NavigationMenuLink className={`bg-transparent ${navigationMenuTriggerStyle() }`}>{menu?.title}</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        })
                    }
                </NavigationMenuList>
            </NavigationMenu>

            <Link href="/" className="flex justify-center items-center gap-3">
                <ShoppingBag />
                BD-COMMERCE
            </Link>

            <div className="flex justify-center items-center gap-3">
                <ShoppingCartIcon />
                Cart
            </div>
        </div>
    );
};

export default Header;