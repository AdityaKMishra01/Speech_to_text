document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const resultDiv = document.getElementById('result');
    
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please try using Chrome.');
    } else {
        const recognition = new webkitSpeechRecognition();

        recognition.onresult = (event) => {
            const transcript = event.results[event.resultIndex][0].transcript;
            resultDiv.textContent = transcript;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        startBtn.addEventListener('click', () => {
            recognition.start();
        });
    }
});
