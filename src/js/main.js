const languages = [
    { name: 'Español', flag: '🇪🇸', color: 'bg-red-500' },
    { name: 'Inglés', flag: '🇺🇸', color: 'bg-blue-500' },
    { name: 'Francés', flag: '🇫🇷', color: 'bg-indigo-500' },
    { name: 'Alemán', flag: '🇩🇪', color: 'bg-yellow-500' },
    { name: 'Italiano', flag: '🇮🇹', color: 'bg-green-600' },
    { name: 'Portugués', flag: '🇵🇹', color: 'bg-green-700' },
    { name: 'Ruso', flag: '🇷🇺', color: 'bg-red-700' },
    { name: 'Chino', flag: '🇨🇳', color: 'bg-yellow-600' },
    { name: 'Japonés', flag: '🇯🇵', color: 'bg-white' },
];

const languageGrid = document.getElementById('language-grid');
const progressBar = document.getElementById('progress-bar');
let progress = 0;

languages.forEach(lang => {
    const button = document.createElement('button');
    button.className = `${lang.color} text-white p-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out btn-3d`;
    button.innerHTML = `
        <span class="text-4xl mb-2 block">${lang.flag}</span>
        <span class="font-semibold">${lang.name}</span>
    `;
    button.addEventListener('click', () => {
        progress = Math.min(progress + 10, 100);
        progressBar.style.width = `${progress}%`;
    });
    languageGrid.appendChild(button);
});

languageGrid.addEventListener('mouseover', (e) => {
    if (e.target.closest('button')) {
        e.target.closest('button').style.transform = 'scale(1.05) translateY(-5px)';
        e.target.closest('button').style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
    }
});

languageGrid.addEventListener('mouseout', (e) => {
    if (e.target.closest('button')) {
        e.target.closest('button').style.transform = '';
        e.target.closest('button').style.boxShadow = '';
    }
});