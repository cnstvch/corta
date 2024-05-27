import React, { FC, useEffect, useState } from "react";

interface IModalProps {
	componentName: string;
	style?: React.CSSProperties | undefined;
	onClick?: React.MouseEvent;
	onCloseModal: () => void;
}

const Modal: FC<IModalProps> = ({
	componentName,
	onCloseModal,
}) => {
	const [ModalScreen, setModalScreen] = useState<FC | null>(null);

	useEffect(() => {
		document.body.style.overflow = "hidden" // убрать скролл
		if (componentName) {
			loadScreen(componentName);
		}
		return () => {
			document.body.style.overflowY = "auto" // вернуть скролл
			document.body.style.overflowX = "hidden" // вернуть скролл
		}
	}, [componentName]);

	useEffect(() => {
		const closeModal = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onCloseModal();
			}
		};
		document.body.addEventListener("keydown", closeModal);
		return function () {
			document.body.removeEventListener("keydown", closeModal);
		};
	}, [onCloseModal]);

	const loadScreen = async (element: string) => {
		const result = await import( /* @vite-ignore */ `./Modals/${element}`);
		setModalScreen(() => {
			return result.default;
		});
	};

	return (
		<div>
			<div>{ModalScreen && <ModalScreen />}</div>
		</div>
	);
};

export default Modal;
