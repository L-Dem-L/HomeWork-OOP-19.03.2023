// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { Purchase, ShoppingList } from "./scripts/modules/shop";
import { Item, Receipt } from "./scripts/modules/bill";
// Import utils

// Bisiness logic
const myList = new ShoppingList();

myList.addPurchase("Яблука", 5);
myList.addPurchase("Хліб", 1);
myList.addPurchase("Молоко", 2);
myList.addPurchase("Яблука", 3);
myList.buyPurchase("Хліб");

myList.printList();

console.log("-------------------------------------");

const items = [
    new Item("Яблука", 2, 12),
    new Item("Молоко", 1, 24),
    new Item("Хліб", 3, 8)
];
const receipt = new Receipt(items);
receipt.print();
console.log(`Загальна сума: ${receipt.getTotal()} грн`);
console.log(`Найдорожчий товар: ${receipt.getMostExpensiveItem().name} - ${receipt.getMostExpensiveItem().price} грн`);
console.log(`Середня ціна за одиницю товару: ${receipt.getAveragePrice()} грн`);

console.log("-------------------------------------");

// створюємо клас "Аудиторія"
class Auditorium {
    constructor(name, seats, faculty) {
        this.name = name;
        this.seats = seats;
        this.faculty = faculty;
    }
}

// створюємо клас "Група"
class Group {
    constructor(name, students, faculty) {
        this.name = name;
        this.students = students;
        this.faculty = faculty;
    }
}

// створюємо масив з аудиторіями
let auditoriums = [
    new Auditorium('101', 15, 'Фізико-математичний'),
    new Auditorium('102', 20, 'Хімічний'),
    new Auditorium('103', 10, 'Хімічний'),
    new Auditorium('104', 18, 'Філологічний'),
    new Auditorium('105', 12, 'Історичний'),
];

// функція для виведення усіх аудиторій
function displayAllAuditoriums() {
    console.log('Усі аудиторії:');
    auditoriums.forEach(auditorium => {
        console.log(`Аудиторія ${auditorium.name}(${auditorium.seats} місць) - ${auditorium.faculty} факультет`);
    });
    console.log("-------------------------------------");
}

// функція для виведення аудиторій для зазначеного факультету
function displayAuditoriumsByFaculty(faculty) {
    console.log(`Аудиторії для факультету ${faculty}: `);
    auditoriums.forEach(auditorium => {
        if (auditorium.faculty === faculty) {
            console.log(`Аудиторія ${auditorium.name}(${auditorium.seats} місць)`);
        }
    });
    console.log("-------------------------------------");
}

// функція для виведення аудиторій, які підходять для переданої групи
function displayAvailableAuditoriums(group) {
    console.log(`Доступні аудиторії для групи ${group.name}(${group.students} студентів) на факультеті ${group.faculty}:`);
    auditoriums.forEach(auditorium => {
        if (auditorium.faculty === group.faculty && auditorium.seats >= group.students) {
            console.log(`Аудиторія ${auditorium.name}(${auditorium.seats} місць)`);
        }
    });
    console.log("-------------------------------------");
}

// функція для сортування аудиторій за кількістю місць
function sortAuditoriumsBySeats() {
    auditoriums.sort((a, b) => a.seats - b.seats);
    console.log('Аудиторії відсортовані за кількістю місць:');
    auditoriums.forEach(auditorium => {
        console.log(`Аудиторія ${auditorium.name} (${auditorium.seats} місць) - ${auditorium.faculty} факультет`);
    });
    console.log("-------------------------------------");
}

// функція для сортування аудиторій за назвою
function sortAuditoriumsByName() {
    auditoriums.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    console.log('Аудиторії відсортовані за назвою:');
    auditoriums.forEach(auditorium => {
        console.log(`Аудиторія ${auditorium.name} (${auditorium.seats} місць) - ${auditorium.faculty} факультет`);
    });
    console.log("-------------------------------------");
}

// викликаємо функції для демонстрації їх роботи
displayAllAuditoriums();
displayAuditoriumsByFaculty('Хімічний');
displayAvailableAuditoriums(new Group('Група 1', 13, 'Фізико-математичний'));
sortAuditoriumsBySeats();
sortAuditoriumsByName();