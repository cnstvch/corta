import React, { CSSProperties, FC } from 'react'
import { TAlert } from './types'
import cl from './DefaultTemplate.module.css'

const DefaultTemplate: FC<TAlert[0]> = ({
	id,
	close,
	position,
	text,
	timeout,
	type
}) => {

	return (
		<div style={position ? position as CSSProperties : {}}>
			<div className={cl[`error__style`]}>
				{text}
			</div>
		</div>
	)
}

export default DefaultTemplate