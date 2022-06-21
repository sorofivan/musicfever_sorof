export const isInCart = (items, item) => {
    return items.some((element) => element.id === item.id)
};

export const unifyItems = (items, item) => {
    return items.map((element) => {
        if(element.id === item.id) {
        element.quantity = item.quantity;
        element.stock = item.stock;
    }
    return element;
    })
};
