// التحكم في الانتقالات بين الشاشات
const welcomeScreen = document.getElementById('welcome-screen');
const menuScreen = document.getElementById('menu-screen');
const detailsScreen = document.getElementById('details-screen');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const buttonsContainer = document.getElementById('buttons-container');
const sectionTitle = document.getElementById('section-title');

// التعامل مع زر البداية
startBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
});

// الأقسام الرئيسية
document.querySelectorAll('.main-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const section = e.target.id;
    loadDetails(section);
  });
});

// الرجوع إلى القائمة
backBtn.addEventListener('click', () => {
  detailsScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
});

// تحميل تفاصيل القسم
function loadDetails(section) {
  buttonsContainer.innerHTML = '';
  if (section === 'audio-section') {
    sectionTitle.textContent = 'الصوتيات';
    createButtons(['ملف صوتي 1', 'ملف صوتي 2', 'ملف صوتي 3']);
  } else if (section === 'video-section') {
    sectionTitle.textContent = 'الفيديوهات';
    createButtons(['فيديو 1', 'فيديو 2', 'فيديو 3']);
  } else if (section === 'pdf-section') {
    sectionTitle.textContent = 'ملفات PDF';
    createButtons(['PDF 1', 'PDF 2', 'PDF 3']);
  }
  menuScreen.classList.add('hidden');
  detailsScreen.classList.remove('hidden');
}

// إنشاء الأزرار
function createButtons(items) {
  items.forEach((item) => {
    const btn = document.createElement('button');
    btn.textContent = item;
    btn.addEventListener('click', () => alert(`تم اختيار ${item}`));
    buttonsContainer.appendChild(btn);
  });
}
