import React, { useEffect, useRef, useState } from 'react'
import cl from './DragAndDropPage.module.css'
import Footer from '../../components/Footer/Footer'

const DragAndDropPage = () => {
	const [array, setArray] = useState([
		{ id: 0, name: 'LOTR', category: 'Fantasy' },
		{ id: 1, name: 'Harry Potter', category: 'Fantasy' },
		{ id: 2, name: 'Iron Man', category: 'Fantastic, Adventure' },
		{ id: 3, name: 'ST', category: 'Fantasy' },
		{ id: 4, name: 'Dune', category: 'Fantasy' },
	])
	const parentConteiner = useRef<HTMLDivElement | null>(null)


	useEffect(() => {
		let copyOfMouseDownTarget: HTMLDivElement;
		const onMouseDown = (event: MouseEvent) => {
			const mouseDownTarget = event.target as HTMLDivElement
			if (Number(mouseDownTarget.dataset.isdragable) === 1) {
				if (event.button === 0) {
					mouseDownTarget.addEventListener('mousemove', onMouseMove)
					mouseDownTarget.addEventListener('mouseup', onMouseUp)
				}
			}
			parentConteiner.current?.childNodes.forEach((element) => {
				let childElement = element as HTMLDivElement
			})
		}

		const onMouseMove = (event: MouseEvent) => {
			copyOfMouseDownTarget.style.top = event.pageY - (copyOfMouseDownTarget.offsetHeight / 2) + 'px'
			copyOfMouseDownTarget.style.left = event.pageX - (copyOfMouseDownTarget.offsetWidth / 2) + 'px'
		}

		const onMouseUp = () => {
			copyOfMouseDownTarget.removeEventListener('mousemove', onMouseMove)
			copyOfMouseDownTarget.removeEventListener('mouseup', onMouseUp)
		}
		parentConteiner.current?.addEventListener('mousedown', onMouseDown)
		return function () {
			parentConteiner.current?.removeEventListener('mousedown', onMouseDown)
		}
	}, [])

	return (
		<div className={cl[`drag__and__drop__page`]} >
			<div className={cl[`center`]} ref={parentConteiner}>
				{array.map((el, index) => (
					<div className={cl[`will_map`]} data-isdragable={1} key={index}>
						<div className={cl[`left`]}>
							<div className={cl[`upper`]}>
								{el.name}
							</div>
							<div className={cl[`lower`]}>
								{el.category}
							</div>
						</div>
						<div className={cl[`delete`]}>
							❌
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DragAndDropPage
