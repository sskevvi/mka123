import Store from '../store.js';

const ShowQRView = async () => {
    const container = document.createElement('div');
    container.className = 'view-container show-qr-view';

    container.innerHTML = `
        <!-- Sticky Header with Back Button -->
        <header class="qr-header">
            <div class="header-back" onclick="window.history.back()">
                <span class="material-symbols-outlined">arrow_back_ios</span>
                <span>Kod QR</span>
            </div>
            <h1 class="qr-title">Pokaż kod QR</h1>
            <p class="qr-description">
                Poproś osobę, której dokument chcesz sprawdzić, o zeskanowanie lub przepisanie kodu w jej aplikacji mObywatel.
            </p>
        </header>

        <div class="qr-content">
            <!-- Main QR Card -->
            <div class="qr-display-card">
                <div id="qrcode" class="qr-image-placeholder">
                    <!-- QR Code will be injected here -->
                </div>
                
                <div class="qr-code-number" id="qr-code-text">000 000</div>
                
                <!-- Progress Line -->
                <div class="qr-progress-bar">
                    <div class="qr-progress-fill" id="qr-progress"></div>
                </div>

                <div class="qr-timer" id="qr-timer-text">Kod ważny jeszcze przez: 3 min 00 sek.</div>
            </div>

            <!-- Emblem Card -->
            <div class="qr-flags-card">
                <!-- CSS CSS Flag -->
                <div class="flag-box css-flag-pl"></div>
                
                <div class="flag-box">
                     <img src="assets/icons/eagle.webp" alt="Godło" class="eagle-icon"> 
                </div>
            </div>
        </div>
    `;

    // Initialize Logic after render (microtask)
    setTimeout(() => {
        initQRLogic();
    }, 0);

    return container;
};

// Logic for Timer, QR Generation, and Refresh
function initQRLogic() {
    const DURATION = 180; // 3 minutes in seconds
    let timeLeft = DURATION;
    let timerInterval;

    const qrContainer = document.getElementById('qrcode');
    const timerText = document.getElementById('qr-timer-text');
    const progressFill = document.getElementById('qr-progress');
    const codeText = document.getElementById('qr-code-text');

    // Helper: Random 6 digit code with space
    const generateCode = () => {
        const p1 = Math.floor(Math.random() * 900) + 100;
        const p2 = Math.floor(Math.random() * 900) + 100;
        return `${p1} ${p2}`;
    };

    // Helper: Generate QR
    let qrCodeObj = null;
    const updateQR = () => {
        const randomParam = Date.now();
        const url = `https://www.gov.pl?refresh=${randomParam}`;
        
        qrContainer.innerHTML = ''; // Clear previous
        
        // Create new QR
        // Using global QRCode from the script tag we added
        if (window.QRCode) {
            new QRCode(qrContainer, {
                text: url,
                width: 240,
                height: 240,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        } else {
            qrContainer.innerHTML = '<span class="material-symbols-outlined" style="font-size: 200px">qr_code_2</span>';
        }

        // Update Text Code
        codeText.textContent = generateCode();
    };

    // Timer Loop
    const startTimer = () => {
        clearInterval(timerInterval);
        timeLeft = DURATION;
        updateQR(); // Initial gen

        timerInterval = setInterval(() => {
            timeLeft--;

            // Update UI
            const m = Math.floor(timeLeft / 60);
            const s = timeLeft % 60;
            timerText.textContent = `Kod ważny jeszcze przez: ${m} min ${s < 10 ? '0' : ''}${s} sek.`;

            const percentage = (timeLeft / DURATION) * 100;
            progressFill.style.width = `${percentage}%`;

            if (timeLeft <= 0) {
                timeLeft = DURATION;
                updateQR(); // Refresh
            }
        }, 1000);
    };

    // Clean up on view destroy? 
    // In this simple router, we don't have a destroy hook easily exposed, 
    // but the interval will persist until page reload or we add a cleanup mechanism.
    // For now, let's attach it to the container for potential cleanup if we expanded the router.
    startTimer();
}

export default ShowQRView;
