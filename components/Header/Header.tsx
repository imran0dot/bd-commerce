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


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { MenuIcon, ShoppingBag, ShoppingCartIcon } from "lucide-react";


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
        <div className="grid grid-cols-3 py-5 shadow-sm w-10/12 mx-auto">
            <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                    {
                        navigationMenu?.map((menu, index) => {
                            return (
                                <NavigationMenuItem key={index}>
                                    <Link href={menu?.href} className="capitalize">
                                        <NavigationMenuLink className={`bg-transparent ${navigationMenuTriggerStyle()}`}>{menu?.title}</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        })
                    }
                </NavigationMenuList>
            </NavigationMenu>

            <div className='block md:hidden'>
                <Sheet>
                    <SheetTrigger><MenuIcon /></SheetTrigger>
                    <SheetContent side='left'>
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                            <SheetDescription>
                                {
                                    navigationMenu?.map((menu, index) => {
                                        return (
                                            <div className="text-left w-full" key={index}>
                                                <Link
                                                    href={menu?.href}
                                                    className="capitalize text-left block py-4 px-2">{menu?.title}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>


            <Link href="/" className="flex justify-center items-center gap-3">
                <ShoppingBag />Sharee
            </Link>

            <div className="flex justify-end items-center gap-3">
                <ShoppingCartIcon />
                Cart
            </div>
        </div>
    );
};

export default Header;