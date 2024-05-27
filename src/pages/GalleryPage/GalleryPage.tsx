import React, { useState } from 'react'
import Gallery from '../../components/Galery/Galery'

const GalleryPage = () => {
	return (
		<Gallery galeryArray={[
			{ id: 0, url: 'https://i.pinimg.com/564x/68/e5/61/68e5619c9aa24038c7ff1d1f866421c1.jpg' },
			{ id: 1, url: 'https://i.pinimg.com/236x/5c/e6/96/5ce696649e311067994a311241b676e1.jpg' },
			{ id: 2, url: 'https://i.pinimg.com/236x/12/66/2a/12662aaacc0e503a7e7a2b4e0d71183c.jpg' },
			{ id: 3, url: 'https://i.pinimg.com/236x/d3/8f/42/d38f4218572caf813385331bce8e5e61.jpg' },
			{ id: 4, url: 'https://i.pinimg.com/236x/b1/ea/2e/b1ea2e3430301d78ea459a6aef8b9ec2.jpg' },
			{ id: 5, url: 'https://i.pinimg.com/236x/45/d5/10/45d5108c304efac8d67d7de41743eb41.jpg' },
			{ id: 6, url: 'https://i.pinimg.com/236x/4d/89/1d/4d891d94758def1ccf493bd40ac9e5b2.jpg' },
			{ id: 7, url: 'https://i.pinimg.com/236x/dd/74/ba/dd74bad2ef27cf4936a67bbbf0c99e95.jpg' },
			{ id: 8, url: 'https://i.pinimg.com/236x/99/11/5d/99115df9f53f8708d6199ebcea6d28a6.jpg' },
			{ id: 9, url: 'https://i.pinimg.com/236x/d5/de/77/d5de7709a5d27ebe1281cab43e36847d.jpg' },
			{ id: 10, url: 'https://i.pinimg.com/236x/50/9b/9f/509b9f5e51cba6482bafad81fdc59e51.jpg' },
			{ id: 11, url: 'https://i.pinimg.com/236x/30/53/55/305355e574d8b36d277612688260eca4.jpg' },
			{ id: 12, url: 'https://i.pinimg.com/564x/68/e5/61/68e5619c9aa24038c7ff1d1f866421c1.jpg' },
			{ id: 13, url: 'https://i.pinimg.com/236x/5c/e6/96/5ce696649e311067994a311241b676e1.jpg' },
			{ id: 14, url: 'https://i.pinimg.com/236x/12/66/2a/12662aaacc0e503a7e7a2b4e0d71183c.jpg' },
			{ id: 15, url: 'https://i.pinimg.com/236x/d3/8f/42/d38f4218572caf813385331bce8e5e61.jpg' },
			{ id: 16, url: 'https://i.pinimg.com/236x/b1/ea/2e/b1ea2e3430301d78ea459a6aef8b9ec2.jpg' },
			{ id: 17, url: 'https://i.pinimg.com/236x/45/d5/10/45d5108c304efac8d67d7de41743eb41.jpg' },
			{ id: 18, url: 'https://i.pinimg.com/236x/4d/89/1d/4d891d94758def1ccf493bd40ac9e5b2.jpg' },
			{ id: 19, url: 'https://i.pinimg.com/236x/dd/74/ba/dd74bad2ef27cf4936a67bbbf0c99e95.jpg' },
			{ id: 20, url: 'https://i.pinimg.com/236x/99/11/5d/99115df9f53f8708d6199ebcea6d28a6.jpg' },
			{ id: 21, url: 'https://i.pinimg.com/236x/d5/de/77/d5de7709a5d27ebe1281cab43e36847d.jpg' },
			{ id: 22, url: 'https://i.pinimg.com/236x/50/9b/9f/509b9f5e51cba6482bafad81fdc59e51.jpg' },
			{ id: 23, url: 'https://i.pinimg.com/236x/30/53/55/305355e574d8b36d277612688260eca4.jpg' },
			{ id: 24, url: 'https://i.pinimg.com/564x/68/e5/61/68e5619c9aa24038c7ff1d1f866421c1.jpg' },
			{ id: 25, url: 'https://i.pinimg.com/236x/d5/de/77/d5de7709a5d27ebe1281cab43e36847d.jpg' },
			{ id: 26, url: 'https://i.pinimg.com/236x/50/9b/9f/509b9f5e51cba6482bafad81fdc59e51.jpg' },
			{ id: 27, url: 'https://i.pinimg.com/236x/30/53/55/305355e574d8b36d277612688260eca4.jpg' },
			{ id: 28, url: 'https://i.pinimg.com/564x/68/e5/61/68e5619c9aa24038c7ff1d1f866421c1.jpg' },
		]} />
	)
}

export default GalleryPage
