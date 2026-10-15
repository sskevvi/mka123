import Store from "../store.js";

const LegitymacjaView = async () => {
  // Load student data
  let studentData;
  try {
    const response = await fetch("personal/student.json");
    if (!response.ok) throw new Error("Failed to load student info");
    studentData = await response.json();
  } catch (error) {
    console.error("Student data load error:", error);
    studentData = {};
  }

  // Merge with personal data for shared fields
  const personalData = Store.getUser();
  const data = { ...personalData, ...studentData };

  const container = document.createElement("div");
  container.className = "dowod-view legitymacja-view";

  // Format timestamp
  const formatTimestamp = () => {
    const now = new Date();
    return `Czas: ${now.toLocaleTimeString("pl-PL")} ${now.toLocaleDateString("pl-PL")}`;
  };

  container.innerHTML = `
        <!-- Header -->
        <header class="dowod-header">
            <div class="header-back" onclick="window.history.back()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span class="header-back-text">Wróć</span>
            </div>
            <span class="header-title">Legitymacja studencka</span>
            <div class="header-menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </header>

        <!-- Date subtitle -->
        <div class="date-subtitle" id="date-display">${formatTimestamp()}</div>

        <!-- Student ID Card -->
        <div class="id-card-new legitymacja-card">
            <img src="assets/images/leg_studencka_bg_big.webp" class="card-bg-image" alt="">
            
            <div class="card-content-new">
                <!-- Left Column: Photo, Flag, Emblem -->
                <div class="left-column">
                    <div class="photo-wrapper">
                        <img src="${data.photo || "personal/photo.webp"}" alt="Zdjęcie" class="user-photo-new">
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
                        <span class="data-label">Imię (imiona)</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value large">${data.lastName}</span>
                        <span class="data-label">Nazwisko</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.birthDate}</span>
                        <span class="data-label">Data urodzenia</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.pesel}</span>
                        <span class="data-label">Numer PESEL</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value">${data.issueDate || "01.10.2024"}</span>
                        <span class="data-label">Data wydania</span>
                    </div>
                    <div class="data-field">
                        <span class="data-value large">${data.universityName || "POLITECHNIKA WROCŁAWSKA"}</span>
                        <span class="data-label">Nazwa uczelni</span>
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
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3D8BFF">
                        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Bezpieczny<br>autobus</span>
            </div>
            <div class="shortcut-item">
                <div class="shortcut-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#E65882">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                </div>
                <span class="shortcut-label">Usuń<br>dokument</span>
            </div>
        </div>

        <!-- Album Number Card -->
        <div class="mdowod-data-card">
            <div class="mdowod-card-header">
                <span class="mdowod-label">Numer albumu</span>
            </div>
            <div class="mdowod-value-row">
                <span class="mdowod-value">${data.albumNumber || "267890"}</span>
                <button class="copy-btn">Kopiuj</button>
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
    const overlay = container.querySelector("#modal-overlay");
    container.querySelector("#modal-title").textContent = title;
    container.querySelector("#modal-body").innerHTML = body;
    overlay.classList.add("active");
  };

  // Live timestamp update every second
  const dateDisplay = container.querySelector("#date-display");
  const updateTimestamp = () => {
    const now = new Date();
    dateDisplay.textContent = `Czas: ${now.toLocaleTimeString("pl-PL")} ${now.toLocaleDateString("pl-PL")}`;
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

  container.querySelector("#modal-close").addEventListener("click", () => {
    container.querySelector("#modal-overlay").classList.remove("active");
  });

  // Close on overlay click
  container.querySelector("#modal-overlay").addEventListener("click", (e) => {
    if (e.target === container.querySelector("#modal-overlay")) {
      container.querySelector("#modal-overlay").classList.remove("active");
    }
  });

  // Shortcuts Logic
  const shortcuts = container.querySelectorAll(".shortcut-item");

  // 1. Confirm Data -> QR Page
  shortcuts[0].addEventListener("click", () => {
    window.location.hash = "#qr";
  });

  // 2. Bus -> show info modal
  shortcuts[1].addEventListener("click", () => {
    showModal(
      "Bezpieczny autobus",
      `
            <p style="text-align: center; color: #555;">
                Funkcja "Bezpieczny autobus" pozwala na weryfikację legitymacji przez kontrolera.
            </p>
        `,
    );
  });

  // 3. Delete document -> confirmation
  shortcuts[2].addEventListener("click", () => {
    showModal(
      "Usuń dokument",
      `
            <p style="text-align: center; color: #555; margin-bottom: 16px;">
                Czy na pewno chcesz usunąć legitymację studencką z aplikacji?
            </p>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button id="cancel-delete" style="padding: 10px 24px; border: 1px solid #ccc; background: white; border-radius: 20px; cursor: pointer;">Anuluj</button>
                <button id="confirm-delete" style="padding: 10px 24px; border: none; background: #E65882; color: white; border-radius: 20px; cursor: pointer;">Usuń</button>
            </div>
        `,
    );

    setTimeout(() => {
      const cancelBtn = container.querySelector("#cancel-delete");
      const confirmBtn = container.querySelector("#confirm-delete");

      if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
          container.querySelector("#modal-overlay").classList.remove("active");
        });
      }

      if (confirmBtn) {
        confirmBtn.addEventListener("click", () => {
          // Show error (demo only)
          showModal(
            "",
            `
                        <div style="padding: 10px 0 20px;">
                            <div class="error-circle-large">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                            </div>
                            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px; color: #1e1e1e;">Coś poszło nie tak</h3>
                            <p style="font-size: 15px; color: #555; line-height: 1.4;">Nie udało się połączyć z serwerem.</p>
                        </div>
                    `,
          );

          const closeBtn = container.querySelector("#modal-close");
          if (closeBtn) closeBtn.style.display = "none";

          setTimeout(() => {
            container
              .querySelector("#modal-overlay")
              .classList.remove("active");
            if (closeBtn) closeBtn.style.display = "block";
          }, 3000);
        });
      }
    }, 100);
  });

  // Copy button
  container.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(data.albumNumber || "267890");
    const btn = container.querySelector(".copy-btn");
    btn.textContent = "Skopiowano!";
    setTimeout(() => {
      btn.textContent = "Kopiuj";
    }, 1500);
  });

  return container;
};

export default LegitymacjaView;
