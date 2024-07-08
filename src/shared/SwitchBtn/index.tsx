import React, { FC } from "react";
import { useField } from "formik";
import './styles.scss'
import classNames from "classnames";

interface SwithBtnProps {
    id:string;
    name: string;
    labeltext:string;
    placeholder?: string;
}
const SwitchBtn: FC<SwithBtnProps> = (props) => {
    const [field, meta] = useField(props)

    return (
        <label className="switch-btn">
            <input className="switch-btn__input" type="checkbox" {...field} {...props} />
            <span className={classNames("switch-btn__slider", meta.error && 'error')}></span>
            <p>
                {props.labeltext}
            </p>

        </label>
    )
}

export default SwitchBtn