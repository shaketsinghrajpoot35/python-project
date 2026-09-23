document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-btn');
    const cards = document.querySelectorAll('.card');

    button.addEventListener('click', () => {
        // Add a quick pulse effect to the button
        button.classList.add('pulse-effect');
        setTimeout(() => {
            button.classList.remove('pulse-effect');
        }, 500);

        // Animate the cards
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'scale(1.05) translateY(-10px)';
                card.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.3)';
                
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }, 300);
            }, index * 100);
        });
        
        // Change text momentarily
        const originalText = button.textContent;
        button.textContent = 'Awesome!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);
    });
});
