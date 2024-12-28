// Animated Background Script
const bg = document.querySelector('.animated-bg');

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 5 + 2 + 's';
        bg.appendChild(star);
    }
}

particlesJS('animated-bg', {
    "particles": {
        "number": { "value": 100 },
        "color": { "value": "#ff6f61" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "move": { "speed": 3 }
    }
});

createStars();
