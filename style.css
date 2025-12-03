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

    // Generate chessboard for widget
    const chessboard = document.querySelector('.chessboard');
    if (chessboard) {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const isLight = (row + col) % 2 === 0;
            
            const square = document.createElement('div');
            square.className = `chess-square ${isLight ? 'bg-gray-600' : 'bg-gray-800'}`;
            
            // Add some pieces for the puzzle
            if (i === 28) square.innerHTML = '<i data-feather="user" class="w-full h-full text-white"></i>'; // white queen
            if (i === 36) square.innerHTML = '<i data-feather="user" class="w-full h-full text-gray-900"></i>'; // black king
            
            squares.push(square);
        }
        chessboard.append(...squares);
    }

    // Show solution for chess puzzle
    const showSolutionBtn = document.getElementById('show-solution');
    if (showSolutionBtn) {
        showSolutionBtn.addEventListener('click', function() {
            alert("Solution: Qxh7+ Kxh7 2. Rh3#");
        });
    }

    // New drawing prompt
    const newPromptBtn = document.getElementById('new-prompt');
    const promptContent = document.querySelector('.prompt-content p');
    const prompts = [
        "Draw a futuristic city with floating islands",
        "Illustrate a character with mismatched socks holding a cup of coffee",
        "Create a scene where animals have human jobs",
        "Design a hybrid creature combining two animals",
        "Sketch your favorite meal with exaggerated proportions"
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
