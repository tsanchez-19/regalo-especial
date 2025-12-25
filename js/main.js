
/* --- MAIN SCRIPT --- */

// --- CONFIGURATION ---
const TEXT_SPEED = 50; // ms per char
const INTRO_TEXT_1 = "Este es un pequeño regalo para ti mi amor...";
const INTRO_TEXT_2 = "Espero te guste.";

// --- DOM ELEMENTS ---
const screens = {
    intro: document.getElementById('intro-section'),
    tulips: document.getElementById('tulips-section'),
    cats: document.getElementById('cats-section'),
    video: document.getElementById('video-section'),
    anime: document.getElementById('anime-section'),
    family: document.getElementById('family-section'),
    final: document.getElementById('final-section')
};

const ui = {
    typewriter: document.getElementById('typewriter-text'),
    enterBtn: document.getElementById('enter-btn'),
    audio: document.getElementById('bg-music')
};

// --- INITIALIZATION ---
window.onload = () => {
    initParticles();
    startIntro();
};

// --- INTRO LOGIC ---
async function startIntro() {
    await typeText(INTRO_TEXT_1);
    await wait(1500);
    await deleteText();
    await wait(500);
    await typeText(INTRO_TEXT_2);
    await wait(1000);
    showEnterButton();
}

function typeText(text) {
    return new Promise(resolve => {
        ui.typewriter.textContent = '';
        let i = 0;
        const interval = setInterval(() => {
            ui.typewriter.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, TEXT_SPEED);
    });
}

function deleteText() {
    return new Promise(resolve => {
        const text = ui.typewriter.textContent;
        let i = text.length;
        const interval = setInterval(() => {
            ui.typewriter.textContent = text.substring(0, i);
            i--;
            if (i < 0) {
                clearInterval(interval);
                resolve();
            }
        }, 30);
    });
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showEnterButton() {
    ui.enterBtn.classList.remove('hidden');
    void ui.enterBtn.offsetWidth;
    ui.enterBtn.classList.add('visible');
    ui.enterBtn.addEventListener('click', enterWorld);
}

// --- TRANSITION LOGIC ---
function enterWorld() {
    screens.intro.classList.remove('active');

    ui.audio.volume = 0;
    ui.audio.play().then(() => {
        fadeInAudio();
    }).catch(e => console.log("Audio play failed", e));

    setTimeout(() => {
        screens.intro.classList.add('hidden');
        screens.tulips.classList.remove('hidden');

        setTimeout(() => {
            screens.tulips.classList.add('active');
            initTulipAnimations();
            startFallingPetals();

            // Next button logic - GO DIRECTLY TO VIDEO via TREE
            setTimeout(() => {
                showNextButton('video');
            }, 8000);

        }, 50);
    }, 1500);
}

function fadeInAudio() {
    let vol = 0;
    const interval = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            ui.audio.volume = Math.min(vol, 1);
        } else {
            clearInterval(interval);
        }
    }, 200);
}

// --- NAVIGATION SYSTEM ---
function showNextButton(nextSectionId) {
    // UNIVERSAL BUTTON LOGIC
    const btn = document.getElementById('universal-btn');
    if (!btn) {
        console.error("Universal button not found!");
        return;
    }

    // Reset State
    btn.classList.add('hidden');
    btn.classList.remove('visible');

    setTimeout(() => {
        // Clone to clear listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        // Configure based on target
        if (nextSectionId === 'video') {
            newBtn.textContent = '🎄';
            newBtn.classList.add('tree-mode');
        } else {
            newBtn.textContent = '>';
            newBtn.classList.remove('tree-mode');
        }

        newBtn.onclick = () => {
            goToSection(nextSectionId);
        };

        // Show
        newBtn.classList.remove('hidden');
        void newBtn.offsetWidth;
        newBtn.classList.add('visible');
    }, 200);
}

let isNavigating = false;

function goToSection(id) {
    if (isNavigating) return;
    isNavigating = true;
    setTimeout(() => { isNavigating = false; }, 1500); // Lock for 1.5s

    // Hide all screens EXCEPT the target
    Object.entries(screens).forEach(([key, s]) => {
        if (s && key !== id) {
            s.classList.remove('active');
            setTimeout(() => s.classList.add('hidden'), 1000);
        }
    });

    // Hide Universal Button
    const btn = document.getElementById('universal-btn');
    if (btn) {
        btn.classList.remove('visible');
        setTimeout(() => btn.classList.add('hidden'), 500);
    }

    // Video Section Specials - MULTI-VIDEO CAROUSEL
    const vid = document.getElementById('memories-video');
    if (id === 'video') {
        if (ui.audio) ui.audio.pause();

        setTimeout(() => setupVideoParticles(), 100);

        if (vid) {
            // VIDEO PLAYLIST CONFIGURATION
            const videoPlaylist = [
                { src: 'video/memories.mp4', maxDuration: 9 },
                { src: 'video/memories1.mp4', maxDuration: 9 },
                { src: 'video/memories2.mp4', maxDuration: 5 },
                { src: 'video/memories3.mp4', maxDuration: 9 },
                { src: 'video/memories4.mp4', maxDuration: 10 }
            ];

            let currentVideoIndex = 0;
            let navTriggered = false;

            // Function to load and play a video from the playlist
            function loadVideo(index) {
                const video = videoPlaylist[index];
                vid.src = video.src;
                vid.currentTime = 0;
                vid.play().catch(e => console.log("Video Play Error", e));
            }

            // Function to advance to next video
            function nextVideo() {
                currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
                loadVideo(currentVideoIndex);
            }

            // Time update handler - check if current video reached its max duration
            vid.ontimeupdate = () => {
                const currentVideo = videoPlaylist[currentVideoIndex];
                if (vid.currentTime >= currentVideo.maxDuration) {
                    nextVideo();

                    // Show Next button after first video completes
                    if (!navTriggered) {
                        navTriggered = true;
                        showNextButton('anime');
                    }
                }
            };

            // Handle natural video end (if video is shorter than maxDuration)
            vid.onended = () => {
                nextVideo();

                if (!navTriggered) {
                    navTriggered = true;
                    showNextButton('anime');
                }
            };

            // Error handler - try next video
            vid.onerror = (e) => {
                console.error("Video error:", e);
                nextVideo();

                if (!navTriggered) {
                    navTriggered = true;
                    setTimeout(() => showNextButton('anime'), 3000);
                }
            };

            // Custom Click Handler for play/pause
            const vContainer = document.getElementById('video-container-click');
            vContainer.onclick = () => {
                if (vid.paused) {
                    vid.play();
                } else {
                    vid.pause();
                }
            };

            // Start the carousel with the first video
            loadVideo(0);
        }
    } else {
        if (id !== 'intro' && ui.audio && ui.audio.paused) {
            ui.audio.play().catch(e => { });
        }
        if (vid && !vid.paused) {
            vid.pause();
        }
    }

    // Show Next Screen
    const next = screens[id];
    if (next) {
        // Brute force reset to ensure no 'active hidden' conflict
        next.classList.remove('hidden');
        next.classList.remove('active');
        void next.offsetWidth; // Force Reflow
        setTimeout(() => next.classList.add('active'), 50);
    }

    // Section specific logic
    if (id === 'anime') startAnimeSequence();
    if (id === 'family') setTimeout(() => showNextButton('final'), 5000);
}

// --- SPECIFIC SECTION LOGIC ---

// CATS (Bypassed but kept for safety reference)
function interactCat(text) {
    const display = document.getElementById('cat-text-display');
    if (display) {
        display.style.opacity = 0;
        setTimeout(() => {
            display.textContent = text;
            display.style.opacity = 1;
        }, 300);
    }
    // Force show next button for video (TREE BUTTON) if accessed
    showNextButton('video');
}

// ANIME
function startAnimeSequence() {
    // Initialize snow animation for anime section
    setupAnimeSnow();

    // Initialize colorful hearts animation
    setupAnimeHearts();

    // Show next button after 8 seconds
    setTimeout(() => {
        showNextButton('family');
    }, 8000);
}

// Anime Snow Animation
function setupAnimeSnow() {
    const canvas = document.getElementById('anime-snow-canvas');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const snowflakes = [];
    const snowflakeCount = 100;

    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
            drift: Math.random() * 0.5 - 0.25
        });
    }

    function animateSnow() {
        if (!document.getElementById('anime-section').classList.contains('active')) {
            return; // Stop if section is not active
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

        snowflakes.forEach(flake => {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fill();

            // Update position
            flake.y += flake.speed;
            flake.x += flake.drift;

            // Reset if out of bounds
            if (flake.y > canvas.height) {
                flake.y = -10;
                flake.x = Math.random() * canvas.width;
            }
            if (flake.x > canvas.width) flake.x = 0;
            if (flake.x < 0) flake.x = canvas.width;
        });

        requestAnimationFrame(animateSnow);
    }

    animateSnow();
}

// Colorful Falling Hearts Animation
function setupAnimeHearts() {
    const canvas = document.getElementById('anime-hearts-canvas');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const hearts = [];
    const heartCount = 35;
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞', '💘', '💙', '💚', '💛', '🧡', '💜', '🤍', '🖤'];

    // Create hearts
    for (let i = 0; i < heartCount; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 25 + 18,
            speed: Math.random() * 2.5 + 1,
            drift: (Math.random() - 0.5) * 3,
            emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 3,
            opacity: Math.random() * 0.5 + 0.5
        });
    }

    function animateHearts() {
        if (!document.getElementById('anime-section').classList.contains('active')) {
            return; // Stop if section is not active
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(heart => {
            ctx.save();
            ctx.globalAlpha = heart.opacity;
            ctx.translate(heart.x, heart.y);
            ctx.rotate(heart.rotation * Math.PI / 180);
            ctx.font = `${heart.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(heart.emoji, 0, 0);
            ctx.restore();

            // Update position with wave motion
            heart.y += heart.speed;
            heart.x += Math.sin(heart.y * 0.015) * heart.drift;
            heart.rotation += heart.rotationSpeed;

            // Pulse opacity
            heart.opacity = 0.5 + Math.sin(heart.y * 0.02) * 0.3;

            // Reset if out of bounds
            if (heart.y > canvas.height + 50) {
                heart.y = -50;
                heart.x = Math.random() * canvas.width;
                heart.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            }
        });

        requestAnimationFrame(animateHearts);
    }

    animateHearts();
}

// TULIPS CSS & PARTICLES
function initTulipAnimations() { }

function startFallingPetals() {
    const container = document.getElementById('falling-container');
    if (!container) return;

    setInterval(() => {
        const el = document.createElement('div');
        el.classList.add('falling-item');
        const isHeart = Math.random() > 0.5;
        el.textContent = isHeart ? '❤️' : '🌸';
        el.style.fontSize = Math.random() * 20 + 10 + 'px';
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDuration = Math.random() * 3 + 4 + 's';
        el.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(el);
        setTimeout(() => el.remove(), 8000);
    }, 300);
}

// --- PARTICLE SYSTEMS ---
// --- PARTICLE SYSTEMS ---
// (Cleaned up: Old mouse-trail logic removed to prevent conflicts)

class VideoStar {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Bigger snow
        this.speedX = (Math.random() - 0.5) * 1; // Gentle sway
        this.speedY = Math.random() * 2 + 0.5; // Falling down

        // Requested Colored Snow
        const colors = ['#FFF', '#FFF', '#87CEEB', '#FFB7C5', '#FFD700']; // White, White, SkyBlue, PastelRed, Gold
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY; // Gravity

        // Sway effect
        this.x += Math.sin(this.y * 0.01) * 0.5;

        // Wrap around
        if (this.y > this.canvas.height) this.y = 0;
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.shadowBlur = 5;
        this.ctx.shadowColor = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

let videoStars = [];
function setupVideoParticles() {
    const canvas = document.getElementById('video-particles');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create MANY particles
    videoStars = [];
    for (let i = 0; i < 150; i++) {
        videoStars.push(new VideoStar(canvas));
    }

    animateVideoParticles();
}

function animateVideoParticles() {
    const canvas = document.getElementById('video-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear with slight trail for magic effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    videoStars.forEach(star => {
        star.update();
        star.draw();
    });

    if (document.getElementById('video-section').classList.contains('active')) {
        requestAnimationFrame(animateVideoParticles);
    }
}

// Global Particles (Intro/Final)
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) setupCanvas(canvas);

    const finalCanvas = document.getElementById('final-particles');
    if (finalCanvas) setupCanvas(finalCanvas);
}

function setupCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.opacity = Math.random();
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
            this.opacity += (Math.random() - 0.5) * 0.05;
            if (this.opacity < 0) this.opacity = 0;
            if (this.opacity > 1) this.opacity = 1;
        }
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    init();
    animate();
}
