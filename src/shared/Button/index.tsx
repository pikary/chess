import React,{FC} from "react";
import './styles.scss'
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick: () => void;
}

const Button:FC<ButtonProps> = (props) =>{
    const { onClick, className, type, children, disabled } = props;
	return (
    <button
        type={type}
        onClick={onClick}
        className={classNames('button',className)}
		>
        {children}
    </button>
	);
}

export default Button