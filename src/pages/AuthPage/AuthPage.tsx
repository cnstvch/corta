import React, { useState } from 'react'
import cl from './AuthPage.module.css'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const AuthPage = () => {
	const [isClick, setIsClick] = useState(false)

	return (
		<div className={cl[`auth__page`]}>
			<div className={cl[`auth__modal`]}>
				<div className={cl[`auth`]}>
					{
						isClick
							? <div className={cl[`login`]}>
								<Input placeholder='login or email' type='login' name='login' />
								<Input placeholder='password' type='password' name='password' />
							</div>
							: <div className={cl[`registration`]}>
								<Input placeholder='email' type='email' name='email' />
								<Input placeholder='login' type='login' name='login' />
								<Input placeholder='password' type='password' name='password' />
								<Input placeholder='password' type='password' name='repassword' />
							</div>
					}
					<div className={cl[`buttons`]}>
						<Button color='black' font='montserrat' textColor='white' radius='8px' width='200px' height='50px'>{isClick ? 'Login' : 'Register'}</Button>
					</div>
					<p className={cl[`reg__link`]} onClick={() => setIsClick(prev => !prev)}>{isClick ? 'Register' : 'Login'}?</p>
				</div>
			</div>
		</div>
	)
}

export default AuthPage
