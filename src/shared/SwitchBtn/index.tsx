import React, { FC } from "react";
import { useField } from "formik";
import './styles.scss'

interface SwithBtnProps {
    id:string;
    name: string;
    labelText:string;
    placeholder?: string;
}
const SwitchBtn: FC<SwithBtnProps> = (props) => {
    const [field, meta] = useField(props)

    return (
        <label className="switch-btn">
            <input className="switch-btn__input" type="checkbox" {...field} {...props} />
            <span className="switch-btn__slider"></span>
            <p>
                {props.labelText}
            </p>

        </label>
    )
}

export default SwitchBtn