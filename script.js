// Логика Аккордеона (раскрывающиеся списки)
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        // Переключаем класс active для кнопки
        this.classList.toggle('active');

        // Находим контент, следующий за кнопкой
        const panel = this.nextElementSibling;

        // Если открыто - закрываем (убираем высоту), если закрыто - вычисляем высоту
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// Логика Меню (сайдбар)
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Закрываем меню если оно открыто (для мобилок удобно)
        document.getElementById('sidebar').classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
