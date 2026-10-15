import Store from '../store.js';

const QRView = async () => {
    const container = document.createElement('div');
    container.className = 'view-container qr-view';

    container.innerHTML = `
        <!-- Header -->
        <header class="qr-header">
            <div class="header-logo-container">
                 <img src="assets/icons/app_icon.png" alt="Logo" class="mini-logo">
            </div>
            <h1 class="qr-title">Kod QR</h1>
            <p class="qr-description">
                Ta funkcja pozwala zalogować się do e-usług oraz potwierdzić dokumenty cyfrowe — swoje i innej osoby.
            </p>
        </header>

        <div class="qr-content">
            <!-- Main Actions List -->
            <div class="services-list-group">
                <!-- Scan QR -->
                <div class="services-list-item">
                    <div class="service-icon-box transparent-icon">
                        <span class="material-symbols-outlined icon-large">center_focus_weak</span>
                    </div>
                    <div class="services-list-content">
                        <div class="services-list-name">Zeskanuj kod QR</div>
                        <div class="services-list-subtitle">Zaloguj się do serwisu lub potwierdź swój dokument cyfrowy.</div>
                    </div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>

                <!-- Show QR -->
                <div class="services-list-item" onclick="window.location.hash='#show-qr'">
                    <div class="service-icon-box transparent-icon">
                        <span class="material-symbols-outlined icon-large">qr_code_2</span>
                    </div>
                    <div class="services-list-content">
                        <div class="services-list-name">Pokaż kod QR</div>
                        <div class="services-list-subtitle">Sprawdź dokument cyfrowy innej osoby.</div>
                    </div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>

                <!-- Signature QR -->
                <div class="services-list-item">
                    <div class="service-icon-box transparent-icon">
                        <span class="material-symbols-outlined icon-large">edit_document</span>
                    </div>
                    <div class="services-list-content">
                        <div class="services-list-name">Zeskanuj kod QR dla podpisu kwalifikowanego</div>
                        <div class="services-list-subtitle">Wybierz, jeśli chcesz użyć kodu ze strony dostawcy podpisu.</div>
                    </div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
            </div>
        </div>
    `;

    return container;
};

export default QRView;
