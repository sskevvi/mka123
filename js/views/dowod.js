import Store from '../store.js';

const DowodView = async () => {
    const data = Store.getUser();
    const container = document.createElement('div');
    container.className = 'dowod-view';

    // Format timestamp
    const formatTimestamp = () => {
        const now = new Date();
        // Czas: 6:53:34 04.12.2025 -> Adjust format
        return `Czas: ${now.toLocaleTimeString('pl-PL')} ${now.toLocaleDateString('pl-PL')}`;
    };

    const expiryDate = data.document?.expiryDate || '2034-01-01';

    container.innerHTML = `
        <!-- Header -->
        <header class="dowod-header">
            <div class="header-back" onclick="window.history.back()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span class="header-back-text">Dokumenty</span>
            </div>
            <span class="header-title">mObywatel</span>
            <div class="header-menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </header>

        <!-- Date subtitle -->
        <div class="date-subtitle" id="date-display">${formatTimestamp()}</div>

        <!-- ID Card - New Layout -->
        <div class="id-card-new">
            <img src="assets/images/mid_background_main.webp" class="card-bg-image" alt="">
            
            <div class="card-content-new">
                <!-- Left Column: Photo, Flag, Emblem -->
                <div class="left-column">
                    <div class="photo-wrapper">
                        <img src="${data.photo || 'personal/photo.webp'}" alt="Zdjęcie" class="user-photo-new">
                    </div>
                    <div class="flag-emblem-row">
                        <img src="assets/images/flaga.gif" alt="Flaga" class="mini-flag">
                        <div class="mini-emblem">
                            <img src="assets/images/hologram_emblem_fake.webp" alt="Godło" class="emblem-icon">
                            <span class="emblem-text-small">Rzeczpospolita<br>Polska</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Personal Data -->
                <div class="right-column">
                    <div class="data-field">
                        <span class="data-value large">${data.firstName}</span>
                        <span class="data-label">Imiona</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value large">${data.lastName}</span>
                        <span class="data-label">Nazwisko</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.citizenship || 'POLSKIE'}</span>
                        <span class="data-label">Obywatelstwo</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.birthDate}</span>
                        <span class="data-label">Data urodzenia</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.pesel}</span>
                        <span class="data-label">Nr PESEL</span>
                    </div>
                </div>
            </div>

            <!-- Validity Bar -->
            <div class="validity-bar-new">
                <div class="validity-check">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="validity-label">Dokument ważny</span>
            </div>
        </div>

        <!-- Shortcuts Section -->
        <div class="shortcuts-row">
            <div class="shortcut-item">
                <div class="shortcut-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3D8BFF">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Potwierdź<br>swoje dane</span>
            </div>
            <div class="shortcut-item">
                <div class="shortcut-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#E65882">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zm-4-6h2.5v-2H16v2zm-8 2h6v-2H8v2z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Dane<br>dowodu</span>
            </div>
            <div class="shortcut-item">
                <div class="shortcut-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3D8BFF">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Zastrzeż<br>PESEL</span>
            </div>
            <div class="shortcut-item">
                <div class="shortcut-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3D8BFF">
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Odśwież<br>dane</span>
            </div>
        </div>


        <!-- Static mDowód Data Card -->
        <div class="mdowod-data-card">
            <div class="mdowod-card-header">
                <span class="mdowod-label">Seria i numer mDowodu</span>
            </div>
            <div class="mdowod-value-row">
                <span class="mdowod-value">${data.mDowod?.series || '380481239'}</span>
                <button class="copy-btn">Kopiuj</button>
            </div>
        </div>

        <!-- Accordion Sections -->
        <div class="document-details-section">
            <div class="accordion-item">
                <div class="accordion-header collapsed" data-target="personal-data">
                    <span class="accordion-title">DANE OSOBOWE</span>
                    <span class="accordion-arrow">›</span>
                </div>
                <div class="accordion-content collapsed" id="personal-data">
                    <div class="detail-row with-divider">
                        <span class="detail-value">${data.firstName}</span>
                        <span class="detail-label">Imię (imiona)</span>
                    </div>
                    <div class="detail-row with-divider">
                        <span class="detail-value">${data.lastName}</span>
                        <span class="detail-label">Nazwisko</span>
                    </div>
                    <div class="detail-row with-divider">
                        <span class="detail-value">${data.birthDate}</span>
                        <span class="detail-label">Data urodzenia</span>
                    </div>
                    <div class="detail-row with-divider">
                        <span class="detail-value">${data.birthPlace || 'WROCŁAW'}</span>
                        <span class="detail-label">Miejsce urodzenia</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-value">${data.citizenship || 'POLSKIE'}</span>
                        <span class="detail-label">Obywatelstwo</span>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div class="accordion-header collapsed" data-target="doc-data">
                    <span class="accordion-title">DANE DOKUMENTU</span>
                    <span class="accordion-arrow">›</span>
                </div>
                <div class="accordion-content collapsed" id="doc-data">
                    <div class="detail-row with-divider">
                        <span class="detail-value">${data.document?.issueDate || '2024-01-01'}</span>
                        <span class="detail-label">Data wydania</span>
                    </div>
                    <div class="detail-row with-divider">
                        <span class="detail-value">${expiryDate}</span>
                        <span class="detail-label">Termin ważności</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-value">${data.document?.issuingAuthority || 'PREZYDENT MIASTA WROCŁAW'}</span>
                        <span class="detail-label">Organ wydający</span>
                    </div>
                </div>
            </div>
        </div>

    <!-- Modal Container -->
    <div id="modal-overlay" class="modal-overlay">
        <div class="modal-content">
            <h3 id="modal-title" class="modal-title">Placeholder</h3>
            <p id="modal-body" class="modal-text">Content</p>
            <button id="modal-close" class="modal-close-btn">Zamknij</button>
        </div>
    </div>
    `;

    // Modal helpers
    const showModal = (title, body) => {
        const overlay = container.querySelector('#modal-overlay');
        container.querySelector('#modal-title').textContent = title;
        container.querySelector('#modal-body').innerHTML = body;
        overlay.classList.add('active');
    };

    // Live timestamp update every second
    const dateDisplay = container.querySelector('#date-display');
    const updateTimestamp = () => {
        const now = new Date();
        dateDisplay.textContent = `Czas: ${now.toLocaleTimeString('pl-PL')} ${now.toLocaleDateString('pl-PL')}`;
    };
    const timestampInterval = setInterval(updateTimestamp, 1000);
    
    // Clean up interval when view is removed
    const observer = new MutationObserver((mutations) => {
        if (!document.contains(container)) {
            clearInterval(timestampInterval);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    container.querySelector('#modal-close').addEventListener('click', () => {
        container.querySelector('#modal-overlay').classList.remove('active');
    });

    // Close on overlay click
    container.querySelector('#modal-overlay').addEventListener('click', (e) => {
        if (e.target === container.querySelector('#modal-overlay')) {
            container.querySelector('#modal-overlay').classList.remove('active');
        }
    });

    // Accordion functionality
    container.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const content = container.querySelector(`#${targetId}`);
            const isCollapsed = content.classList.contains('collapsed');
            
            if (isCollapsed) {
                content.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        });
    });

    // Shortcuts Logic
    const shortcuts = container.querySelectorAll('.shortcut-item');
    
    // 1. Confirm Data -> QR Page
    shortcuts[0].addEventListener('click', () => {
        window.location.hash = '#qr';
    });

    // 2. ID Details -> Issuer Info Modal
    shortcuts[1].addEventListener('click', () => {
        showModal('Dane wydania', `
            <div class="info-row-modern">
                <span class="info-label-modern">Organ wydający</span>
                <span class="info-value-modern" style="max-width: 60%;">${data.document?.issuingAuthority || 'PREZYDENT MIASTA WROCŁAW'}</span>
            </div>
            <div class="info-row-modern">
                <span class="info-label-modern">Data wydania</span>
                <span class="info-value-modern">${data.document?.issueDate || '2024-01-01'}</span>
            </div>
            <div class="info-row-modern" style="border-bottom: none;">
                <span class="info-label-modern">Termin ważności</span>
                <span class="info-value-modern info-value-highlight">${expiryDate}</span>
            </div>
        `);
    });

    // 3. Block PESEL -> Block Modal (Professional Redesign)
    shortcuts[2].addEventListener('click', () => {
        const body = `
            <div id="pesel-status" class="status-box-centered">
                <svg class="status-icon" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span class="status-text">PESEL niezastrzeżony</span>
            </div>
            
            <p class="modal-text-centered" style="margin: 16px 0;">
                Twój numer PESEL jest bezpieczny, ale możesz go zastrzec, aby chronić się przed oszustwami.
            </p>
            
            <div class="action-buttons-grid">
                <!-- Historia (Secondary) -->
                <button id="history-btn" class="btn-pro btn-pro-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-bottom: 8px;">
                         <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                    Historia<br>zmian
                </button>

                <!-- Zastrzeż (Primary Danger) -->
                <button id="block-btn" class="btn-pro btn-pro-danger">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-bottom: 8px;">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    Zastrzeż<br>PESEL
                </button>
            </div>
        `;
        showModal('Zastrzeganie PESEL', body);

        // Handlers
        setTimeout(() => {
            // Block Btn
            const blockBtn = container.querySelector('#block-btn');
            if (blockBtn) {
                blockBtn.addEventListener('click', () => {
                    // Loader
                    showModal('Zastrzeganie...', `<div class="spinner"></div>`);
                    
                    // Error Popup (Aesthetic Match)
                    setTimeout(() => {
                        showModal('', `
                             <div style="padding: 10px 0 20px;">
                                <div class="error-circle-large">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                    </svg>
                                </div>
                                <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px; color: #1e1e1e;">Coś poszło nie tak</h3>
                                <p style="font-size: 15px; color: #555; line-height: 1.4;">Nie udało się połączyć z serwerem.</p>
                             </div>
                        `);
                        // Hide Close Button
                        const closeBtn = container.querySelector('#modal-close');
                        if (closeBtn) closeBtn.style.display = 'none';

                        setTimeout(() => {
                            container.querySelector('#modal-overlay').classList.remove('active');
                            if (closeBtn) closeBtn.style.display = 'block';
                        }, 3000);
                    }, 2000);
                });
            }
            
            // History Btn
            const historyBtn = container.querySelector('#history-btn');
            if (historyBtn) {
                historyBtn.addEventListener('click', () => {
                    showModal('Historia zmian', `<div class="spinner"></div>`);
                    setTimeout(() => {
                         container.querySelector('#modal-overlay').classList.remove('active');
                    }, 3000);
                });
            }
        }, 100);
    });

    // 4. Update -> Refresh (Full Page Loader)
    // Inject loader
    const loaderFn = document.createElement('div');
    loaderFn.className = 'full-page-loader';
    loaderFn.innerHTML = '<div class="spinner"></div>';
    container.appendChild(loaderFn);

    shortcuts[3].addEventListener('click', () => {
        loaderFn.classList.add('active');
        
        setTimeout(() => {
            loaderFn.classList.remove('active');
        }, 1000);
    });


    // 1. Confirm Data -> QR Page (Click on text too if needed, but the item wraps both)

    // Update timestamp
    setInterval(() => {
        const ts = container.querySelector('#timestamp-display');
        if (ts) ts.textContent = formatTimestamp();
    }, 1000);

    return container;
};

export default DowodView;
