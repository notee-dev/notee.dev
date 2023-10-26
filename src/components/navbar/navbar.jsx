import './navbar.scss'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Tooltip } from "@nextui-org/react";
import { IconMenu2, IconX, IconBrightnessUp, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';

export default function Component(){
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme()
    const pathname = usePathname();
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const Items = [
        { label: 'Skills', href: '/#skills' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Contact', href: '/#contact' },
    ];

    function handleTheme() {
        if (theme == 'light') {
            setTheme('dark')
        } else if (theme == 'dark') {
            setTheme('system')
        } else if (theme == 'system') {
            setTheme('light')
        }
    }
    
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                {resolvedTheme == 'dark' && <img src="/images/icon-light.png" />}
                {resolvedTheme == 'light' && <img src="/images/icon-dark.png" />}
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-4" justify="end">
                {Items.map((item, index) => (
                    <NavbarItem key={index}>
                            <Link href={item.href}>
                                <Tooltip content="Coming soon" className='notee-tooltip' closeDelay={0}>
                                    <Button disabled className={`notee-link ${pathname == item.href && "active"}`}>{item.label}</Button>
                                </Tooltip>
                            </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenuToggle className="md:hidden" icon={isMenuOpen ? <IconX/> : <IconMenu2/>} />
            <NavbarItem>
                <Button className="notee-icon" onClick={handleTheme}>
                    {theme == 'light' && <IconBrightnessUp/>}
                    {theme == 'dark' && < IconMoon/>}
                    {theme == 'system' && <IconDeviceDesktop/>}
                </Button>
            </NavbarItem>
            <NavbarMenu id="navmenu">
                <li></li><li></li>
                {Items.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link href={item.href}>
                            <Tooltip content="Coming soon" className='notee-tooltip' closeDelay={0}>
                                <Button disabled className={`notee-link ${pathname == item.href && "active"}`}>{item.label}</Button>
                            </Tooltip>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
