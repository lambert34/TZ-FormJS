document.addEventListener("DOMContentLoaded", function () {

    // Функция shuffle осуществляет перемешивание массива так, чтобы его элементы шли в случайном порядке
    document.getElementById('vacancies-btn').addEventListener('click', shuffleItems);
    document.getElementById('resume-btn').addEventListener('click', shuffleItems);

    // Функция для изменения порядка элементов
    function shuffleItems() {
        const gallery = document.getElementById('gallery');
        const items = Array.from(gallery.children);
        let currentIndex = items.length, temporaryValue, randomIndex;

        // Пока остаются элементы для перемешивания
        while (currentIndex !== 0) {
            // Выбираем оставшийся элемент с помощью метода Рэндом
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // И меняем его с текущим элементомИ
            temporaryValue = items[currentIndex];
            items[currentIndex] = items[randomIndex];
            items[randomIndex] = temporaryValue;
        }

        // Удаляем все текущие элементы
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }

        // Добавляем перемешанные элементы обратно в галерею
        items.forEach((item) => gallery.appendChild(item));
    }
});
