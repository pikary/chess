import React, { FC } from "react";
import Logo from "../Logo";
import IconButton from "../../shared/IconButton";
import { CiSearch } from "react-icons/ci";
import { GiSwordClash } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import ProfileMenu from "./components/ProfileMenu";
import './styles.scss'

const Navbar: FC = () => {
    return (
        <nav className="navigation">

            <ul className="navigation__menu">
                <Logo />

                <li className="navigation__menu__item">
                    <a href="">play</a>
                </li>
                <li className="navigation__menu__item">
                    <a href="">puzzles</a>
                </li>
                <li className="navigation__menu__item">
                    <a href="">
                        community
                    </a>
                </li>
            </ul>
            <ul className="navigation__profile">
                <IconButton icon={<CiSearch size={40} />} onClick={() => { }} />
                <IconButton icon={<GiSwordClash size={40} />} onClick={() => { }} />
                <IconButton icon={<CiSearch size={40} />} onClick={() => { }} />
                <ProfileMenu />
            </ul>
        </nav>
    )
}

export default Navbar