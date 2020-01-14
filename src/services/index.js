/**
 * this is our services file
 * here will describe any fetch calls to outside API's
 */
const base_url = process.env.REACT_APP_BASE_URL_LOCAL

export async function getAllStoreQuotes() {
	try {
		const response = await fetch(`${base_url}/api/quotes`)
		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error(error.message)
	}
}

export async function getQuote(id) {
	try {
		const response = await fetch(`${base_url}/api/quotes/${id}`)
		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}


export async function getCartItems() {
	try {
		const response = await fetch(`${base_url}/api/cart`)
		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}
export async function addItemToCart(itemId) {
	try {
		const response = fetch(`${base_url}/api/cart/${itemId}`)
		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}

export async function removeItemFromCart(itemId) {
	try {
		const response = fetch(`${base_url}/api/cart/${itemId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}
