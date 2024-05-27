import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cl from './Header.module.css'
import Modal from '../Modal/Modal'
import Gallery from '../Galery/Galery'
import Button from '../../ui/button/Button'

const Header = () => {
	const [isAuthOpen, setIsAuthOpen] = useState(false)

	const onAuthClose = () => {
		setIsAuthOpen(false)
	}

	return (
		<div className={cl[`header`]}>
			{isAuthOpen && (
				<Modal componentName='AuthModal' onCloseModal={onAuthClose} />
			)}
			<div className={cl[`header__links`]}>
				<Link to={`#`} className={cl[`link`]}>
					Главная
				</Link>
				<Link to={`#`} className={cl[`link`]}>
					О нас
				</Link>
				<Link to={`#`} className={cl[`link`]}>
					Документация
				</Link>
				<Link to={`#`} className={cl[`link`]}>
					Поддержка
				</Link>
			</div>
			{/* <Link to={`#`} onClick={() => setIsGaleryOpen(true)} className={cl[`link`]}>
				Галерея
			</Link> */}
			{/* <div>
				<Link to={`#`} className={cl[`link`]} onClick={() => setIsAuthOpen(true)}>
					<Button color='white' radius='10px' textColor='black' font='montserrat' fontSize='20px'>Login</Button>
				</Link>
			</div> */}
		</div>
	)
}

export default Header;
