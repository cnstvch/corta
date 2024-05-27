import React, { FC } from 'react'
import cl from './Button.module.css'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children?: string,
	color?: string,
	radius?: string,
	textColor?: string,
	font?: string,
	fontSize?: string,
	width?: string,
	height?: string,
}

const Button: FC<IButtonProps> = ({ children, color, radius, textColor, font, fontSize, width, height }) => {
	return (
		<button
			className={cl[`button`]}
			style={{
				backgroundColor: `${color}`,
				borderRadius: `${radius}`,
				color: `${textColor}`,
				fontFamily: `${font}`,
				fontSize: `${fontSize}`,
				width: `${width}`,
				height: `${height}`,
			}}>{children}
		</button>
	)
}

export default Button
