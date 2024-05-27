import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ICreateAlert, IProviderProps, TAlert, TAlertValue } from './types'
import { positions } from './options';
import DefaultTemplate from './DefaultTemplate';
import { DefaultContext } from './DefaultContext';
import { createPortal } from 'react-dom';

const AlertProvider = ({
	Context = DefaultContext,
	Template = DefaultTemplate,
	children,
	position = 'bottom right',
	timeout = 3000
}: IProviderProps) => {

	const alertValue = useRef<TAlertValue | null>(null);
	const root = useRef<HTMLDivElement | null>(null);

	const [alerts, setAlerts] = useState<TAlert>([])

	useEffect(() => {
		root.current = document.createElement('div');
		root.current.id = 'alert';

		document.body.appendChild(root.current);

		return () => {
			if (root.current) {
				document.body.removeChild(root.current);
			}
		}
	}, [])

	const createAlert = ({ options, text }: ICreateAlert) => {
		const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, '0');

		const alertOptions = {
			id,
			text,
			close: () => removeAlert(id),
			...options,
			position: options.position ? positions[options.position] : positions[position],
		}

		const createTimeout = (timeoutTime: number) => {
			const timeout = setTimeout(() => {
				removeAlert(id);
				clearTimeout(timeout);
			}, timeoutTime);
		}

		setAlerts((prev) => {
			prev.push(alertOptions);
			return [...prev];
		})

		if (options.timeout) {
			createTimeout(options.timeout);
		} else {
			createTimeout(timeout);
		}

	}

	const removeAlert = (id: string) => {
		setAlerts((prev) => {
			const index = prev.findIndex((element) => element.id === id);

			if (index !== -1) {
				prev.splice(index, 1);
			}

			return [...prev];
		})
	}

	const removeAllAlerts = () => {
		setAlerts([]);
	}

	alertValue.current = {
		createAlert,
		removeAllAlerts,
		alerts
	}

	return (
		<Context.Provider value={alertValue.current}>
			{children}
			{root.current &&
				<Fragment>
					{alerts.map((userAlert, ins) => {
						return (
							<Fragment key={`alert=${userAlert.id}`}>
								{createPortal(
									<Template {...userAlert} />,
									root.current!
								)}
							</Fragment>
						)
					})}
				</Fragment>
			}
		</Context.Provider>
	)
}

export default AlertProvider;