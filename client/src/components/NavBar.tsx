import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
const NavBar = () => {

    const navLinks = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Search",
            href: "/search",
        }
    ]

    return (
        <NavigationMenu className="shadow-md min-w-screen">
            <div className="container mx-auto flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">HireBuddy</span>
                </div>
                {/* Right: Navigation Links */}
                <NavigationMenuList className="flex space-x-2">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.title}>
                            <NavigationMenuLink asChild>
                                <a
                                    href={link.href}
                                    className="  px-4 py-2 transition-colors"
                                >
                                    {link.title}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </div>
        </NavigationMenu>
    );
}

export default NavBar
