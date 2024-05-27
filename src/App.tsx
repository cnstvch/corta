import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import BlogPage from './pages/BlogPage/BlogPage'
import './App.css'
import DragAndDropPage from './pages/DragAndDropPage/DragAndDropPage'
import Header from './components/Header/Header'
import Gallery from './components/Galery/Galery'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainPage />} path="/"></Route>
				<Route element={<BlogPage />} path="/blog"></Route>
				<Route element={<DragAndDropPage />} path="/drag"></Route>
				<Route element={<GalleryPage />} path="/gallery"></Route>
				<Route element={<AuthPage />} path="/auth"></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
