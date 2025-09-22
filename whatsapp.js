
const btn = document.createElement('button');
btn.id = 'whatsapp-button';
btn.innerHTML = '📞'; // иконка телефона
document.body.appendChild(btn);

// Добавляем ссылку на WhatsApp
btn.addEventListener('click', () => {
  window.open('https://wa.me/1234567890', '_blank'); // <- вставь свой номер
});
