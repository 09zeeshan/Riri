// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Video play functionality for enabling sound
document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const backgroundVideo = document.getElementById('backgroundVideo');

  playButton.addEventListener('click', function() {
    // Unmute the video and play it with sound when the button is clicked
    backgroundVideo.muted = false;
    backgroundVideo.play().catch(error => {
      console.error('Error playing video with sound:', error);
    });
    playButton.style.display = 'none'; // Hide the button after playing
  });
});