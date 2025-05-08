function filterCommands(level) {
    const cards = document.querySelectorAll('.command-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cards.forEach(card => {
        if (level === 'all' || card.classList.contains(level)) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Comando copiado: ' + text);
    });
}