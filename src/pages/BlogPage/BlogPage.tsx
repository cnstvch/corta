import React, { useState } from 'react'
import cl from './BlogPage.module.css'

const BlogPage = () => {
	const [firstValue, setFirstValue] = useState('')
	const [secondValue, setSecondValue] = useState('')
	const [valueActive, setValueActive] = useState(false)

	return (
		<div className={cl[`blog__page`]}>
			<div className={cl[`main__window`]}>
				<div className={cl[`upper`]}>
					<input type="text" name="" id="" value={firstValue} onChange={(event) => setFirstValue(event.target.value)} />
					<input type="text" name="" id="" value={secondValue} onChange={(event) => setSecondValue(event.target.value)} />
				</div>
				<div className={cl[`center`]}>
					<div className={cl[`first__value`]}>{valueActive && firstValue}</div>
					<div className={cl[`second__value`]}>{valueActive && secondValue}</div>
				</div>
				<div className={cl[`lower`]}>
					<button onClick={() => setValueActive(true)}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default BlogPage
