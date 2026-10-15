import Store from '../store.js';

const LoginView = async () => {
    const container = document.createElement('div');
    container.className = 'view-container login-view';

    container.innerHTML = `
        <div class="login-content">
            <!-- Logo Section -->
            <div class="login-logo-section">
                <div class="login-logo-wrapper">
                    <img src="assets/icons/app_icon.png" alt="mObywatel Logo" class="login-app-icon">
                </div>
                <h2 class="login-app-name">mObywatel <span class="version-text">2.0</span></h2>
            </div>

            <!-- Welcome Text -->
            <div class="login-welcome-section">
                <h1 class="login-title">Witaj,</h1>
                <p class="login-subtitle">Zaloguj się do aplikacji.</p>
            </div>

            <!-- Password Form -->
            <form id="login-form" class="login-form">
                <div class="input-group">
                    <label for="password" class="input-label">Hasło</label>
                    <div class="password-wrapper">
                        <input type="password" id="password" class="login-input" autocomplete="current-password">
                        <button type="button" class="toggle-password-btn">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>
                
                <div class="login-actions">
                    <a href="#" class="forgot-password-link">Nie pamiętam hasła</a>
                </div>

                <button type="submit" class="login-submit-btn">Zaloguj się</button>
            </form>
        </div>
        
        <!-- Bottom Biometrics (Optional visual flair) -->
        <div class="login-bottom">
            <button class="biometric-btn" id="biometric-login">
                <span class="material-symbols-outlined">fingerprint</span>
                <span>Zaloguj biometrią</span>
            </button>
        </div>
    `;

    // Logic
    const form = container.querySelector('#login-form');
    const passwordInput = container.querySelector('#password');
    const toggleBtn = container.querySelector('.toggle-password-btn');
    const biometricBtn = container.querySelector('#biometric-login');

    // Show/Hide Password
    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggleBtn.querySelector('span').textContent = type === 'password' ? 'visibility' : 'visibility_off';
    });

    // Login Handler
    const handleLogin = (e) => {
        e.preventDefault();
        // Allow any password, even empty
        window.location.hash = '#dashboard';
    };

    form.addEventListener('submit', handleLogin);
    biometricBtn.addEventListener('click', handleLogin); // Biometrics also just logs in

    // Auto-focus input
    setTimeout(() => {
        passwordInput.focus();
    }, 300);

    return container;
};

export default LoginView;
