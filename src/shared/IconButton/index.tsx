import React, {FC, ReactNode} from "react";
import './styles.scss'
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon:ReactNode;
	className?: string;
	onClick: () => void;
}

const IconButton:FC<ButtonProps> = (props) =>{
    const {onClick,className,icon} = props
    return <button className={classNames('iconbtn', className)} onClick={onClick}>
        {icon}
    </button>
}

export default IconButton