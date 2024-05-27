import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import cl from './Galery.module.css'

interface IGaleryModalProps {
	galeryArray: IGaleryArrayProps[];
	onCloseModal?: () => void;
}

interface IGaleryArrayProps {
	url: string;
	id: number;
}

const Gallery: FC<IGaleryModalProps> = ({ galeryArray, onCloseModal, }) => {
	const [selectedImage, setSelectedImage] = useState(0)
	const [allVisivleImages, setAllVisivleImagees] = useState(0)
	const [averageVisibleImage, setAverageVisibleImage] = useState(0)
	const [leftPossition, setLeftPossition] = useState(0)
	const containerRef = useRef<null | HTMLDivElement>(null)
	const lowerImageRef = useRef<null | HTMLImageElement>(null)

	useEffect(() => {
		const resize = () => {

			let windowPosition = {
				left: window.scrollX,
				right: window.scrollX + document.documentElement.clientWidth,
			}

			let countImages = 0

			const findVisibleImages = (element: ChildNode) => {
				let elementImage = element as HTMLDivElement

				let targetPosition = {
					left: window.scrollX + elementImage.getBoundingClientRect().left,
					right: window.scrollX + elementImage.getBoundingClientRect().right,
				}

				if (targetPosition.left < windowPosition.left ||
					targetPosition.right < windowPosition.right) {
					countImages += 1
				}
			}

			containerRef.current?.childNodes.forEach((element) => findVisibleImages(element))

			setAllVisivleImagees(countImages)
			setAverageVisibleImage(allVisivleImages / 2)

			const closeModal = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					onCloseModal!()
				}
			}

			document.body.addEventListener("keyup", closeModal);
			return () => {
				document.body.removeEventListener("keyup", closeModal);
			}
		}
		resize()

		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize)

	}, [])

	useEffect(() => {
		if (allVisivleImages !== 0) {
			changePosition(selectedImage)
		}
	}, [allVisivleImages])

	useEffect(() => {
		const handleChangeImage = (e: KeyboardEvent) => {
			if (e.code === 'ArrowLeft') {
				leftClick();
			} else if (e.code === 'ArrowRight') {
				rightClick();
			}
		}

		window.addEventListener('keydown', handleChangeImage);
		return () => window.removeEventListener('keydown', handleChangeImage);
	}, [selectedImage, allVisivleImages])

	const changeImage = (val: number) => () => {
		setSelectedImage(() => { return val })
		changePosition(val)
	}


	const leftClick = () => {
		let number = 0;
		if (selectedImage === 0) {
			number = galeryArray.length - 1;
		} else {
			number = selectedImage - 1
		}
		setSelectedImage(number)
		changePosition(number)
	}

	const rightClick = () => {
		let number = 0;
		if (selectedImage === galeryArray.length - 1) {
			number = 0
		} else {
			number = selectedImage + 1
		}
		setSelectedImage(number)
		changePosition(number)
	}

	const changePosition = (number: number) => {
		let leftpos = 0;
		if (allVisivleImages === (galeryArray.length - 1)) return;
		if (number < (allVisivleImages / 2)) return setLeftPossition(() => { return 0 });
		if (number >= (allVisivleImages / 2) && number < (galeryArray.length - (allVisivleImages / 2))) {
			leftpos = -175 * (number - (allVisivleImages / 2));
			setLeftPossition(() => { return leftpos });
		} else if (number > (galeryArray.length - (allVisivleImages / 2))) {
			leftpos = -175 * (galeryArray.length - allVisivleImages - 1)
			setLeftPossition(() => { return leftpos })
		}
	}

	return (
		<div className={cl[`galery`]} >
			<div className={cl[`gallery__upper`]}>
				<div className={cl[`gallery__slider__img__conteiner`]}>
					<img src={galeryArray[selectedImage].url} alt="" className={cl[`gallery__slider__img__conteiner__img`]} />
				</div>
				<div className={cl[`gallery__arrow__left`]} onClick={leftClick}>
					next
				</div>
				<div className={cl[`gallery__arrow__right`]} onClick={rightClick}>
					prev
				</div>
			</div>
			<div className={cl[`gallery__counter`]}>
				{selectedImage + 1} / {galeryArray.length}
			</div>
			<div className={cl[`image__conteiner`]} style={{ left: `${leftPossition}px` }} ref={containerRef}>
				{galeryArray.map((image, index) => (
					<div key={index}>
						<img
							src={image.url}
							onClick={changeImage(index)}
							className={index === selectedImage ? cl[`active`] : cl[`non__active`]}
							ref={lowerImageRef}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gallery;