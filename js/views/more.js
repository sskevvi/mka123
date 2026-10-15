import Store from '../store.js';

const MoreView = async () => {
    const container = document.createElement('div');
    container.className = 'view-container more-view';

    const currentTheme = Store.getTheme();

    container.innerHTML = `
        <header class="app-header-more">
             <div class="header-logo-column">
                <img src="assets/icons/app_icon.png" alt="Logo" class="mini-logo">
                <h1 style="font-size: 32px; font-weight: 700; margin-top: 16px; margin-bottom: 0;">Więcej</h1>
             </div>
        </header>

        <div class="content-container">
            <!-- Settings Section -->
            <div class="section-title-large">USTAWIENIA</div>
            <div class="actions-list">
                <div class="action-item theme-toggle" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">Tryb ciemny</span>
                    <label class="switch">
                        <input type="checkbox" id="theme-switch" ${currentTheme === 'dark' ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <!-- Menu Items -->
            <div class="section-title-large">MENU</div>
            <div class="actions-list">
                <div class="action-item" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">Przekaż dane (QR)</span>
                    <span class="chevron-right">›</span>
                </div>
                <div class="action-item" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">Moje dane</span>
                    <span class="chevron-right">›</span>
                </div>
                <div class="action-item" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">Historia zmian</span>
                    <span class="chevron-right">›</span>
                </div>
                <div class="action-item" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">Pomoc</span>
                    <span class="chevron-right">›</span>
                </div>
                <div class="action-item" style="padding: 20px 16px;">
                    <span style="font-size: 16px; font-weight: 500;">O aplikacji</span>
                    <span class="chevron-right">›</span>
                </div>
            </div>

            <div class="actions-list" style="margin-top: 24px;">
                <div class="action-item" style="padding: 20px 16px; color: #ff3b30;">
                    <span style="font-size: 16px; font-weight: 500;">Wyloguj</span>
                </div>
            </div>

            <p style="text-align: center; margin-top: 32px; color: #6e6e73; font-size: 12px; line-height: 1.4;">
                Wersja aplikacji: 4.41.0 (2025)<br>
                Wyprodukowano przez COI
            </p>
        </div>
    `;

    // Theme toggle handler
    const themeSwitch = container.querySelector('#theme-switch');
    themeSwitch.addEventListener('change', () => {
        Store.toggleTheme();
    });

    return container;
};

export default MoreView;
