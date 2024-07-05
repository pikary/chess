import React, { FC, useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";

import './styles.scss'
import classNames from "classnames";

const ProfileMenu: FC = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const openMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        console.log(e.target);
        setShowMenu(!showMenu)
    
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Empty dependency array ensures this effect only runs once after mount
    return (
        <div className={classNames('profile',showMenu && 'active')} onClick={openMenu} ref={menuRef}>
            <h4>nurlan1507</h4>
            <FaRegUserCircle size={40} />
            {showMenu && (
                <div className={classNames('profile__menu')} onClick={(e)=>{
                    e.stopPropagation()
                }}>
                    <ul className="profile__menu__list">
                        <li className="profile__menu__list__item">
                            <FaRegUserCircle size={25} />
                            <a>Profile</a>
                        </li>
                        <li className="profile__menu__list__item">
                            <IoMdMail size={25} />
                            <a>Messages</a>
                        </li>
                        <li className="profile__menu__list__item">
                            <IoMdSettings size={25} />
                            <a>Preferences</a>
                        </li>
                        <li className={classNames('profile__menu__list__item', 'fatal')}>
                            <FaPowerOff size={25} />
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu