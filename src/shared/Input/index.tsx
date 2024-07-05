import React from 'react';
import { useField } from 'formik';
import './styles.scss';

interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	labelText: string;
	onChange?: () => void;
}

const Input: React.FC<InputProps> = ({ labelText, onChange, ...props }) => {
	const [field, meta] = useField(props);

	return (
    <div className='input-cont'>
        <label className='input-cont__label' htmlFor={props.name}>{labelText}</label>
        <input
            {...field}
            {...props}
            id={props.name}
            className='input-cont__input'
			></input>
        {meta.error && meta.touched && (
        <p className='input-cont__error'>{meta.error}</p>
			)}
    </div>
	);
};

export default Input;
