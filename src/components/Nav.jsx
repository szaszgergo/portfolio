import { NavLink } from "react-router";
import styles from '../css/NavBar.module.css'
import { useState } from "react";
import { Spin as HamburgerButton } from 'hamburger-react'
export default function NavBar(){
    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <ul className={`${menuOpen ? styles.open : styles.closed}`}>
            <li>
            <NavLink 
                to="/"
                style={({ isActive }) => ({
                    color: isActive 
                        ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                        : "black"
                })}
            >
                Home
            </NavLink>
                </li>
            
            
                <li>
                    <NavLink 
                    to="Work"
                    style={({ isActive }) => ({
                        color: isActive 
                            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                            : "black"
                    })}
                    >
                        Works</NavLink>
                </li>
                <li><NavLink
                 style={({ isActive }) => ({
                    color: isActive 
                        ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                        : "black"
                })}
                to="Blog">Blog</NavLink></li>
                <li><NavLink
                 style={({ isActive }) => ({
                    color: isActive 
                        ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                        : "black"
                })}
                to="Contact">Contact</NavLink></li>
            </ul>
            <div
                className={styles.hamburger_menu_button}
            >
                <HamburgerButton 
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={28}
            direction="left"
            />
            </div>
            
        </nav>
    )
}