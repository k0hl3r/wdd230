document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');
    
    
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    }
    
    closeBannerButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});