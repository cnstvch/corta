import {link} from './settings'

export const postRequest = async (url: string) => {
	return await fetch(link + url, {
		method: "POST"
	})
		.then((response) => response.json())

}

export const getRequest = async (url: string) => {
	return await fetch(link + url, {
		method: "GET"
	})
		.then((response) => response.json())

}
