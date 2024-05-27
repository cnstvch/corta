import React from 'react'
import cl from './MusicModal.module.css'

const MusicModal = () => {
	return (
		<div className={cl[`music__modal`]}>
			<div className={cl[`poster`]}>\
				<div className={cl[`upper__buttons`]}>
					<button>🔀</button>
					<button>⏪</button>
					<button>⏯️</button>
					<button>⏩</button>
					<button>🔁</button>
				</div>
				<div className={cl[`lower__buttons`]}>
					<button>⚒️</button>
					<button>❤️</button>
				</div>
			</div>
			<div className={cl[`music__data`]}>
				<p>The Reeling </p>
				<p>Compact Disk Dummies</p>
			</div>
			<div>
				<input type="range" name="" id="" />
			</div>
		</div>
	)
}

export default MusicModal
