import React, { FC, useState } from 'react'
import cl from './AuthModal.module.css'
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import { useAlert } from '../../../hooks/useAlert/useAlert';

const AuthModal: FC = () => {
	const [isClick, setIsClick] = useState(false)
	const [{ email, login, password, repassword }, setUserInfo] = useState(() => {
		return {
			email: '',
			login: '',
			password: '',
			repassword: '',
		}
	})

	const userInfoHandler = () => {
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(email)) {
			console.log('Неверный email');
		} else if (login.length < 2) {
			console.log('Логин должен содержать больше одного символа');
		} else if (password.length < 4 || password.length > 12) {
			console.log('Пароль должен содержать от 4 до 12 символов');
		} else if (password !== repassword) {
			console.log('Пароли не совпадают');
		} else {
			// api 
		}
	}

	const changeUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserInfo((prev) => {
			prev[event.target.name as keyof typeof prev] = event.target.value
			return { ...prev }
		})
	}

	return (
		<div className={cl[`auth__modal`]}>
			<div className={cl[`auth`]}>
				{
					isClick
						? <div className={cl[`login`]}>
							<Input placeholder='login or email' type='login' name='login' onChange={changeUserInfo} />
							<Input placeholder='password' type='password' name='password' onChange={changeUserInfo} />
						</div>
						: <div className={cl[`registration`]}>
							<Input placeholder='email' type='email' name='email' onChange={changeUserInfo} />
							<Input placeholder='login' type='login' name='login' onChange={changeUserInfo} />
							<Input placeholder='password' type='password' name='password' onChange={changeUserInfo} />
							<Input placeholder='password' type='password' name='repassword' onChange={changeUserInfo} />
						</div>
				}
				<div className={cl[`buttons`]}>
					<Button color='black' font='montserrat' textColor='white' radius='8px' width='200px' height='50px' onClick={userInfoHandler}>{isClick ? 'Login' : 'Register'}</Button>
				</div>
				<p className={cl[`reg__link`]} onClick={() => setIsClick(prev => !prev)}>{isClick ? 'Register' : 'Login'}?</p>
			</div>
		</div>
	)
}

export default AuthModal;
