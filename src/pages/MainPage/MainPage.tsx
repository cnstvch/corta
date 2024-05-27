import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import cl from './MainPage.module.css'
import Gallery from '../../components/Galery/Galery'
import NavBar from '../../components/NavBar/NavBar'
import auth from '../../assets/auth.png'
import gallery from '../../assets/gallery.png'
import Modal from '../../components/Modal/Modal'

const MainPage = () => {
	const [musicModalIsOpen, setMusicModalIsOpen] = useState(false)

	const musicModalClose = () => {
		setMusicModalIsOpen(false)
	}

	return (
		<div className={cl[`main__page`]}>
			{
				musicModalIsOpen && <Modal componentName='MusicModal' onCloseModal={musicModalClose} />
			}
			<NavBar />
			<Header />
			<div className={cl[`main`]}>
				<section className={cl[`main__section`]}>
					<h1>Добро пожалость на наш сайт:)</h1>
					<p>Здесь можно найти мои решения по разработке различных компонентов, подчеркнуть что-то для себя и повысить свой навык в разработке.</p>
					<button onClick={() => setMusicModalIsOpen(true)}>Модал</button>
				</section>
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default MainPage
