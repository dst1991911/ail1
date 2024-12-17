function showWelcome() {
  document.getElementById('welcome-screen').classList.remove('hidden');
  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('details-screen').classList.add('hidden');
}

function showMenu() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('menu-screen').classList.remove('hidden');
  document.getElementById('details-screen').classList.add('hidden');
}

function showSubMenu(section) {
  const buttonsContainer = document.getElementById('buttons-container');
  const sectionTitle = document.getElementById('section-title');

  buttonsContainer.innerHTML = '';
  sectionTitle.textContent = section;

  const audioBtn = document.createElement('button');
  audioBtn.textContent = 'الصوتيات';
  audioBtn.onclick = () => alert(`تشغيل صوتيات من ${section}`);
  buttonsContainer.appendChild(audioBtn);

  const videoBtn = document.createElement('button');
  videoBtn.textContent = 'الفيديوهات';
  videoBtn.onclick = () => showVideoButtons(section);
  buttonsContainer.appendChild(videoBtn);

  const pdfBtn = document.createElement('button');
  pdfBtn.textContent = 'ملفات PDF';
  pdfBtn.onclick = () => alert(`فتح ملفات PDF من ${section}`);
  buttonsContainer.appendChild(pdfBtn);

  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('details-screen').classList.remove('hidden');
}

function showVideoButtons(section) {
  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.innerHTML = ''; // مسح الأزرار الحالية

  for (let i = 1; i <= 10; i++) {
    const videoButton = document.createElement('button');
    videoButton.textContent = `الفيديو ${i}`;
    videoButton.onclick = () => alert(`تشغيل فيديو ${i} من ${section}`);
    buttonsContainer.appendChild(videoButton);
  }
}
