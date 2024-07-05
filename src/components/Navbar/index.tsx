import React, { FC, useEffect, useRef } from "react";
import Logo from "../Logo";
import IconButton from "../../shared/IconButton";
import { CiSearch } from "react-icons/ci";
import { GiSwordClash } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import ProfileMenu from "./components/ProfileMenu";
import './styles.scss'

const Navbar: FC = () => {
    const navbar = useRef<HTMLDivElement | null>(null)
    let prevScroll = 0
    useEffect(() => {
        const show = () => {
            navbar.current?.classList.remove('is-hidden')
            navbar.current?.classList.add('is-visible')
        }
        const hide = () => {
            navbar.current?.classList.remove('is-visible')
            navbar.current?.classList.add('is-hidden')
        }
        const onWindowScroll = () => {
            const currentScroll =window.scrollY
            if (currentScroll > 0) {

                if (currentScroll > prevScroll) {
                    window.setTimeout(hide, 0);

                } else if (currentScroll == prevScroll) {
                    window.setTimeout(()=>{}, 150);
                }
                else {
                    window.setTimeout(show, 150);
                }

                prevScroll = currentScroll;
            }
            // if (window.scrollY > prevScroll) {
            //     setTimeout(() => {
            //         show()
            //     }, 1000)
            //     prevScroll = window.scrollY
            // }
            // else if (window.scrollY > 0) {
            //     hide()

            //     prevScroll = window.scrollY
            // }
        }
        window.addEventListener('scroll', onWindowScroll)
        return () => {
            window.removeEventListener('scroll', onWindowScroll)
        }
    }, [])
    return (
        <nav className="navigation is-visible" ref={navbar}>

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