// Проверяем сохраненную тему в localStorage
const currentTheme = localStorage.getItem('theme') || 'light';

// Устанавливаем тему при загрузке страницы
document.documentElement.setAttribute('data-theme', currentTheme);

// Обновляем иконку кнопки переключения темы
updateThemeIcon(currentTheme);

// Обработчик клика по кнопке переключения темы
document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Применяем новую тему
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновляем иконку
    updateThemeIcon(newTheme);
});

// Функция для обновления иконки темы и изображения профиля
function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    const profileImg = document.querySelector('.img-fluid');
    
    if (theme === 'dark') {
        // Обновляем иконку темы
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // Меняем на темное изображение профиля
        if (profileImg) {
            profileImg.src = 'images/profile_dark.png';
            profileImg.alt = 'Профиль (темная тема)';
        }
    } else {
        // Возвращаем иконку луны
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        // Возвращаем светлое изображение профиля
        if (profileImg) {
            profileImg.src = 'images/profile.png';
            profileImg.alt = 'Профиль';
        }
    }
}

// Добавляем плавный переход при смене темы
const style = document.createElement('style');
style.textContent = `
    body, .pricing-card, .pricing-note, .card, .navbar, .hero-section, section {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }
`;
document.head.appendChild(style);
