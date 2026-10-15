import Store from '../store.js';

const ServicesView = async () => {
    // Determine language (defaulting to PL for now since app is mostly PL, but screenshots are EN. 
    // User asked "make them look as on the screenshot", which implies content too.
    // However, the app is "mObywatel" (PL). I will use PL names but match the *visuals*.
    // Wait, the user prompt is in English, screenshots are English. 
    // BUT the previous context was Polish (Dokumenty, Start). 
    // I will use Polish labels to be consistent with the rest of the app, 
    // but the structure from the screenshots.
    
    // Actually, let's stick to Polish as the app is PL. 
    // Translations:
    // Data protection -> Bezpieczeństwo danych / Ochrona danych
    // Network safety -> Bezpiecznie w sieci
    // Check an ID Card -> Sprawdź dowód osobisty
    // Block PESEL -> Zastrzeż PESEL
    // Check PESEL -> Sprawdź PESEL
    // Defense training -> Szkolenie obronne
    // Vehicle history -> Historia pojazdu
    // Fees and taxes -> Opłaty i podatki
    // ePayments -> ePłatności
    // Traffic tickets -> Mandaty
    // Entrepreneur -> Przedsiębiorca
    // Business -> Firma
    // Environment -> Środowisko
    // Environmental violations -> Zgłoś naruszenie
    // Air quality -> Jakość powietrza
    // Flood alert -> Alarm powodziowy
    // Travel -> Podróże
    // Safe bus -> Bezpieczny autobus
    // Bilkom -> Bilkom
    // MKA card -> Małopolska Karta Aglomeracyjna
    // Pole abroad -> Polak za granicą

    const container = document.createElement('div');
    container.className = 'view-container services-view';

    container.innerHTML = `
        <!-- Header -->
        <header class="services-header">
            <div class="header-top">
                <div class="header-logo-container">
                     <img src="assets/icons/app_icon.png" alt="Logo" class="mini-logo">
                </div>
                <h1 class="services-title">Usługi</h1>
            </div>
            
            <!-- Search Bar -->
            <div class="search-container">
                <span class="material-symbols-outlined search-icon">search</span>
                <input type="text" placeholder="Szukaj" class="search-input">
            </div>

            <div class="customize-link">Edytuj swoje usługi</div>
        </header>

        <div class="services-content">
            <!-- Group: Data Protection -->
            <div class="services-group-label">Kierowca i pojazdy</div>
            <div class="services-list-group">
                <div class="services-list-item">
                    <div class="service-icon-box blue-car">
                        <span class="material-symbols-outlined">directions_car</span>
                    </div>
                    <div class="services-list-name">Historia pojazdu</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                 <div class="services-list-item">
                    <div class="service-icon-box blue-bus">
                         <span class="material-symbols-outlined">directions_bus</span> <!-- Safe bus -->
                    </div>
                    <div class="services-list-name">Bezpieczny autobus</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                 <div class="services-list-item">
                    <div class="service-icon-box blue-warn">
                         <span class="material-symbols-outlined">warning</span> 
                    </div>
                    <div class="services-list-name">Punkty karne</div>
                     <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
            </div>

            <!-- Group: Data protection (Screenshot 1) -->
            <div class="services-group-label">Ochrona danych</div>
            <div class="services-list-group">
                <div class="services-list-item">
                    <div class="service-icon-box purple-shield">
                        <span class="material-symbols-outlined">language</span> <!-- Network safety -->
                    </div>
                    <div class="services-list-name">Bezpiecznie w sieci</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                <div class="services-list-item">
                    <div class="service-icon-box purple-id">
                        <span class="material-symbols-outlined">badge</span> <!-- Check ID -->
                    </div>
                    <div class="services-list-name">Sprawdź dowód osobisty</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                <div class="services-list-item">
                    <div class="service-icon-box purple-lock">
                        <span class="material-symbols-outlined">lock</span> <!-- Block PESEL -->
                    </div>
                    <div class="services-list-name">Zastrzeż PESEL</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                 <div class="services-list-item">
                    <div class="service-icon-box purple-search">
                        <span class="material-symbols-outlined">search_check</span> <!-- Check PESEL -->
                    </div>
                    <div class="services-list-name">Sprawdź PESEL</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
            </div>

             <!-- Group: Security (Screenshot 1) -->
            <div class="services-group-label">Bezpieczeństwo</div>
             <div class="services-list-group">
                 <div class="services-list-item">
                    <div class="service-icon-box red-shield">
                        <span class="material-symbols-outlined">shield</span> <!-- Defense training -->
                    </div>
                    <div class="services-list-name">Szkolenie obronne</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
             </div>

             <!-- Group: Fees and Taxes (Screenshot 2) -->
            <div class="services-group-label">Opłaty i podatki</div>
            <div class="services-list-group">
                <div class="services-list-item">
                    <div class="service-icon-box teal-wallet">
                        <span class="material-symbols-outlined">wallet</span> <!-- ePayments -->
                    </div>
                    <div class="services-list-name">ePłatności</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                <div class="services-list-item">
                    <div class="service-icon-box teal-ticket">
                        <span class="material-symbols-outlined">receipt_long</span> <!-- Traffic tickets -->
                    </div>
                    <div class="services-list-name">Mandaty</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
            </div>

            <!-- Group: Environment (Screenshot 2/3) -->
             <div class="services-group-label">Środowisko</div>
            <div class="services-list-group">
                <div class="services-list-item">
                    <div class="service-icon-box green-leaf">
                        <span class="material-symbols-outlined">eco</span> 
                    </div>
                    <div class="services-list-name">Zgłoś naruszenie</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                 <div class="services-list-item">
                    <div class="service-icon-box green-air">
                        <span class="material-symbols-outlined">air</span> 
                    </div>
                    <div class="services-list-name">Jakość powietrza</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
                 <div class="services-list-item">
                    <div class="service-icon-box green-flood">
                        <span class="material-symbols-outlined">flood</span> 
                    </div>
                    <div class="services-list-name">Alarm powodziowy</div>
                    <span class="material-symbols-outlined chevron">chevron_right</span>
                </div>
            </div>
            
             <br><br><br>
        </div>
    `;

    return container;
};

export default ServicesView;
