export class Purchase {
    constructor(name, quantity, bought) {
        this.name = name;
        this.quantity = quantity;
        this.bought = bought;
    }
}

export class ShoppingList {
    constructor() {
        this.list = [];
    }

    // Додавання покупки до списку
    addPurchase(name, quantity) {
        let found = false;

        // Перевірка чи покупка вже є в списку
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                this.list[i].quantity += quantity;
                found = true;
                break;
            }
        }

        // Якщо покупка не знайдена, додаємо нову покупку
        if (!found) {
            const newPurchase = new Purchase(name, quantity, false);
            this.list.push(newPurchase);
        }
    }

    // Виведення списку покупок
    printList() {
        console.log("Список покупок:");

        // Сортування списку по куплених і некуплених продуктах
        const sortedList = this.list.sort(function (a, b) {
            return a.bought - b.bought;
        });

        // Виведення списку на екран
        for (let i = 0; i < sortedList.length; i++) {
            const bought = sortedList[i].bought ? "куплено" : "не куплено";
            console.log(`${i + 1}. ${sortedList[i].name} - ${sortedList[i].quantity} шт. (${bought})`);
        }
    }

    // Позначення покупки як купленої
    buyPurchase(name) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                this.list[i].bought = true;
                break;
            }
        }
    }
}