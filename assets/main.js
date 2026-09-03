        // Логика работы мобильного меню (гамбургера)
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const menuLinks = document.querySelectorAll('.nav-menu a');

        // Открытие и закрытие шторки меню по клику на гамбургер
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Автоматическое закрытие шторки при клике на любой внутренний раздел
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Плашка о cookies
        const cookieBanner = document.getElementById('cookieBanner');
        const cookieChoice = localStorage.getItem('cookieConsent');

        if (!cookieChoice) {
            cookieBanner.style.display = 'flex';
        } else {
            cookieBanner.style.display = 'none';
        }

        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.style.display = 'none';
            if (typeof loadYandexMetrika === 'function') {
                loadYandexMetrika();
            }
        }

        function declineCookies() {
            // Отклонение необязательных cookie: Яндекс.Метрика на этом устройстве не запускается
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.style.display = 'none';
        }

        // Модальное окно с политикой
        function openPolicyModal() {
            document.getElementById('policyModalOverlay').classList.add('active');
        }

        function closePolicyModal() {
            document.getElementById('policyModalOverlay').classList.remove('active');
        }

        document.getElementById('policyModalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'policyModalOverlay') closePolicyModal();
        });

