document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for hero section
    const typingText = document.querySelector('.typing-text');
    const phrases = [
        "music explorer 🎵",
        "artist ✏️",
        "gamer 🎮",
        "lifelong learner 💡"
    ];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = phrases[currentPhrase];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentChar === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // pause at end of word
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typingSpeed = 500; // pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing animation
    setTimeout(type, 1000);

    // Scroll event for navbar
    const navbar = document.querySelector('custom-navbar').shadowRoot.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Music recommendations
    const newRecommendationBtn = document.getElementById('new-recommendation');
    const recommendationContent = document.querySelector('.recommendation-content');
    const recommendations = [
        { artist: "Cup of Joe", song: "Tingin", image: "https://huggingface.co/spaces/Potatoes1003/melopixel-playscape/resolve/main/images/ab67616d00001e0285a7fd707d00e5d255807add.jpg" },
        { artist: "Sugarcane", song: "Mundo", image: "https://huggingface.co/spaces/Potatoes1003/melopixel-playscape/resolve/main/images/ab67616d0000b2735a00b0d5d5a19a3b7a1e9d5e.jpg" },
        { artist: "Rico Blanco", song: "Your Universe", image: "https://huggingface.co/spaces/Potatoes1003/melopixel-playscape/resolve/main/images/ab67616d0000b2735a00b0d5d5a19a3b7a1e9d5e.jpg" },
        { artist: "Ben&Ben", song: "Leaves", image: "https://huggingface.co/spaces/Potatoes1003/melopixel-playscape/resolve/main/images/ab67616d0000b2735a00b0d5d5a19a3b7a1e9d5e.jpg" },
        { artist: "Magnus Carlsen", song: "Chess Master", image: "http://static.photos/education/640x360/1?chess" }
];
    
    if (newRecommendationBtn) {
        newRecommendationBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * recommendations.length);
            const rec = recommendations[randomIndex];
            document.querySelector('.recommendation-content img').src = rec.image;
            document.querySelector('.recommendation-content h4').textContent = rec.artist;
            document.querySelector('.recommendation-content p').textContent = rec.song;
        });
    }

// New drawing prompt
    const newPromptBtn = document.getElementById('new-prompt');
    const promptContent = document.querySelector('.prompt-content p');
    const prompts = [
        "Describe your most memorable sunrise experience",
        "Share about a local dish you discovered while traveling",
        "What's the most breathtaking view you've encountered?",
        "Tell us about a cultural tradition you experienced",
        "Describe an unexpected adventure you had"
    ];
if (newPromptBtn) {
        newPromptBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * prompts.length);
            promptContent.textContent = `"${prompts[randomIndex]}"`;
        });
    }

    // Initialize feather icons after dynamic content
    feather.replace();
});

// Magnetic button effect
document.querySelectorAll('.magnetic-button').forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const x = e.pageX - button.getBoundingClientRect().left;
        const y = e.pageY - button.getBoundingClientRect().top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Tilt effect for interest cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const centerX = this.offsetWidth / 2;
        const centerY = this.offsetHeight / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});
