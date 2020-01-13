export const getTotalItemsInCart = cart => {
	return cart.reduce((total, item) => {
		return (total += item.quantity)
	}, 0)
}

export const getTotalCartPrice = cart => {
    return cart.reduce((total, item) => {
        //if there is more than one item 
        if(item.quantity >= 1) {
            //multiply it item price by quantity and add to the total
            return (total += (item.price * item.quantity))
        }
        // otherwise add the price to the total
        return (total += item.price)
    }, 0)
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})