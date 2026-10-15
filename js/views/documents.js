import Store from '../store.js';

const DocumentsView = async () => {
    const container = document.createElement('div');
    container.className = 'view-container';

    container.innerHTML = `
        <header class="app-header">
             <div class="header-left">
                <h2 style="font-size: 20px; font-weight: 700;">Dokumenty</h2>
             </div>
             <div class="header-right">
                 <!-- Add Icon -->
                 <div style="background: #f0f0f0; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: var(--blue-primary);">+</div>
             </div>
        </header>

        <div class="content-container">
            <!-- Reuse Card Style -->
             <div class="card mdowod-card" onclick="window.location.hash='#dowod'">
                <div class="card-content">
                    <div class="card-icon-wrapper">
                        <img src="assets/icons/documents_filled.svg" alt="ID">
                    </div>
                    <div class="card-text">
                        <span class="card-title">mDowód</span>
                        <span class="card-subtitle">Ważny</span>
                    </div>
                    <div class="card-arrow">›</div>
                </div>
            </div>
            
            <!-- Edu example -->
            <div class="card" style="margin-top: 16px;" onclick="window.location.hash='#legitymacja'">
                <div class="card-content">
                     <div class="card-icon-wrapper">
                        <span style="font-size: 16px;">🎓</span>
                    </div>
                    <div class="card-text">
                        <span class="card-title">Legitymacja Studencka</span>
                        <span class="card-subtitle">Ważny</span>
                    </div>
                    <div class="card-arrow">›</div>
                </div>
            </div>
        </div>
    `;

    return container;
};

export default DocumentsView;
