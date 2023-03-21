// Оголошуємо клас Style
class Style {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// Створюємо масив стилів
const styles = [
    new Style("color", "red"),
    new Style("font-size", "24px"),
    new Style("text-align", "center"),
    new Style("text-decoration", "underline")
];

// Оголошуємо функцію для виведення тексту зі стилями
function printStyledText(styles, text) {
    let styleStr = "";
    styles.forEach(style => {
        styleStr += `${style.name}: ${style.value}; `;
    });
    document.write(`<p style="${styleStr}">${text}</p>`);
}

// Викликаємо функцію для виведення тексту зі стилями
printStyledText(styles, "Hello, world!");
