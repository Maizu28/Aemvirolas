let progress = 0;
const loadingBar = document.getElementById('loadingBar');
const loadingTexxt = document.getElementById('loadingText');
const completeButton = document.getElementById('completeButton');

function updateProgress() {
    if (progress <100) {
        progress +=1;
        loadingBar.style.width = progress = '%';
        loadingText.textContent = progress = '%';
        setTimeout(updateProgress, 50);
    } else {
        loadingText.style.display = 'none';
        completeButton.style.display = 'block';
    }
}

completeButton.addEventListener('click', () => {
    window.location.href = 'Home/home.html';
});

updateProgress();