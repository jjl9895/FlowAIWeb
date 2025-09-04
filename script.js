// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and sections
    const animatedElements = document.querySelectorAll('.feature-card, .video-section, .features-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add typing effect to tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.innerHTML = '<span class="typing-text"></span><span class="typing-cursor">|</span>';
        const typingText = tagline.querySelector('.typing-text');
        const typingCursor = tagline.querySelector('.typing-cursor');
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                typingCursor.style.opacity = '0';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

// Add video embed functionality
function embedVideo(videoUrl, videoType = 'youtube') {
    const videoContainer = document.querySelector('.video-container');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (!videoContainer || !videoPlaceholder) return;
    
    let embedCode = '';
    
    if (videoType === 'youtube') {
        // Extract video ID from YouTube URL
        const videoId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
        if (videoId) {
            embedCode = `
                <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }
    } else if (videoType === 'vimeo') {
        // Extract video ID from Vimeo URL
        const videoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
        if (videoId) {
            embedCode = `
                <iframe 
                    src="https://player.vimeo.com/video/${videoId}" 
                    width="100%" 
                    height="400" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }
    } else if (videoType === 'custom') {
        // For custom HTML embed codes
        embedCode = videoUrl;
    }
    
    if (embedCode) {
        videoPlaceholder.innerHTML = embedCode;
        videoPlaceholder.style.padding = '0';
        videoPlaceholder.style.border = 'none';
    }
}

// Example usage:
// embedVideo('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', 'youtube');
// embedVideo('https://vimeo.com/YOUR_VIDEO_ID', 'vimeo');
// embedVideo('<video src="your-video.mp4" controls></video>', 'custom');
