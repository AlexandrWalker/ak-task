/**
 * Управление активным состоянием блока социальных сетей
 */
(function () {
  const socialBlock = document.querySelector('.top_social');
  if (!socialBlock) return;

  const toggleBtn = socialBlock.querySelector('.top_social_btn');
  if (!toggleBtn) return;

  // Клик по кнопке: переключаем класс активного состояния
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие, чтобы не срабатывал клик вне блока
    socialBlock.classList.toggle('is-active');
  });

  // Клик вне блока: закрываем социальные сети
  document.addEventListener('click', (e) => {
    if (!socialBlock.contains(e.target)) {
      socialBlock.classList.remove('is-active');
    }
  });
})();