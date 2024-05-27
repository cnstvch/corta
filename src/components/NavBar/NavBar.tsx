import React, { useState } from 'react'
import cl from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)

	return (
		<div className={cl[`navbar`]} style={navbarOpen ? { left: '0px' } : { left: '-150px' }}>
			<div className={cl[`open__navbar`]}>
				<p onClick={() => setNavbarOpen(prev => !prev)}>▶️</p>
			</div>
			<div className={cl[`links`]}>
				<Link to={'/drag'}>Drag & Drop</Link>
				<Link to={'/gallery'}>Galerry</Link>
				<Link to={'/blog'}>Blog Page</Link>
				<Link to={'/auth'}>Auth Page</Link>
			</div>
		</div>
	)
}

export default NavBar
