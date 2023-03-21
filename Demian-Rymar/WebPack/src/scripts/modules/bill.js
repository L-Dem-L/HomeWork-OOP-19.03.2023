export class Item {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

export class Receipt {
    constructor(items) {
        this.items = items;
    }

    print() {
        console.log("Чек:");
        this.items.forEach(item => {
            console.log(`${item.name} x ${item.quantity} - ${item.price} грн`);
        });
    }

    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;
    }

    getMostExpensiveItem() {
        let maxPrice = 0;
        let mostExpensiveItem = null;
        this.items.forEach(item => {
            if (item.price > maxPrice) {
                maxPrice = item.price;
                mostExpensiveItem = item;
            }
        });
        return mostExpensiveItem;
    }

    getAveragePrice() {
        let total = this.getTotal();
        let quantity = 0;
        this.items.forEach(item => {
            quantity += item.quantity;
        });
        return total / quantity;
    }
}