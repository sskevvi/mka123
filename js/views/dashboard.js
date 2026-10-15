import Store from '../store.js';

const DashboardView = async () => {
    const data = Store.getUser();
    const container = document.createElement('div');
    container.className = 'view-container';

    container.innerHTML = `
        <!-- Header with Logo and Bell -->
        <header class="app-header-docs">
            <div class="header-icon-left">
                <div class="header-logo-wrapper">
                    <img src="assets/icons/app_icon.png" alt="mObywatel Logo" class="header-logo">
                </div>
            </div>
            <div class="header-icon-right">
                <!-- Filled Bell Icon -->
                <svg class="header-bell-svg" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
            </div>
        </header>

        <!-- Title -->
        <div class="docs-title">Dokumenty</div>

        <!-- Card Stack -->
        <div class="docs-stack">
            <!-- mDowód -->
            <div class="doc-card card-mdowod" onclick="window.location.hash='#dowod'">
                <span class="doc-card-title">mDowód</span>
                <div class="doc-card-icon">
                    <span class="material-symbols-outlined" style="font-size: 32px; color: white; font-variation-settings: 'FILL' 1;">id_card</span>
                </div>
            </div>

            <!-- mPrawo Jazdy -->
            <div class="doc-card card-mprawo">
                <span class="doc-card-title">mPrawo jazdy</span>
                <div class="doc-card-icon">
                    <span class="material-symbols-outlined" style="font-size: 32px; color: white; font-variation-settings: 'FILL' 1;">airport_shuttle</span>
                </div>
            </div>

            <!-- Legitymacja studencka -->
            <div class="doc-card card-student" onclick="window.location.hash='#legitymacja'">
                <span class="doc-card-title">Legitymacja studencka</span>
                <div class="doc-card-icon">
                     <!-- Book/Student Icon -->
                     <svg viewBox="0 0 24 24" fill="white" style="opacity: 0.9;">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                     </svg>
                </div>
            </div>
        </div>

        <!-- Add Button -->
        <div class="add-doc-btn-container">
            <button class="add-doc-btn">
                <span style="font-size: 18px;">+</span> Dodaj dokument
            </button>
        </div>
    `;

    return container;
};

export default DashboardView;
