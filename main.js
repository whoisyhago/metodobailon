// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Cierra todos
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.display = 'none';
    });

    // Abre el clicado si estaba cerrado
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.faq-a').style.display = 'block';
    }
  });
});
