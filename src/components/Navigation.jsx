import { NavLink } from "react-router";
import styles from "../css/Navigation.module.css"
import contact from "../components/Navigation.jsx"
import { useState } from "react";
export default function Navigation() {
    let [menuKinyitva, setMenuKinyitva] = useState(false)
    return(
        <nav className={`${styles.navigacio}`}>
            <ul className={` ${menuKinyitva ? styles.nyitva : styles.zarva}`}>
             
            <li>
                    <NavLink 
                     style={({ isActive }) => ({
                        color: isActive 
                            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                            : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="/">
                        Home
                    </NavLink>
                    </li>
                <li>
                    <NavLink 
                    style={({ isActive }) => ({
                        color: isActive 
                            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                            : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="Work">
                        Works
                    </NavLink>
                    </li>
                <li>
                    <NavLink 
                     style={({ isActive }) => ({
                        color: isActive 
                            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                            : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="Blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({ isActive }) => ({
                        color: isActive 
                            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') 
                            : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="Contact">Contact</NavLink>
                </li>
            </ul>
            <button 
            className={styles.hamburger_gomb}
            onClick={() => setMenuKinyitva(!menuKinyitva)}
            >
                {menuKinyitva ? "X" : "="}
            </button>
        </nav>
    )
}