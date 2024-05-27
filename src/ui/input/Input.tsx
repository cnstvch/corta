import React, { FC } from 'react'
import cl from './Input.module.css'

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
	type?: string,
	placeholder?: string,
	name?: string,
}

const Input: FC<IInputProps> = ({ type, placeholder, name }) => {
	return (
		<input type={`${type}`} placeholder={`${placeholder}`} name={`${name}`} className={cl[`input`]} />
	)
}

export default Input
