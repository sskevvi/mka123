import Store from './store.js';
import Router from './router.js';

// Import Views
import LoginView from './views/login.js';
import DashboardView from './views/dashboard.js';
import DowodView from './views/dowod.js';
import ServicesView from './views/services.js';
import MoreView from './views/more.js';
import QRView from './views/qr.js';
import ShowQRView from './views/show-qr.js';
import LegitymacjaView from './views/legitymacja.js';

// App Initialization
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Store
    await Store.init();

    // 2. Define Routes
    const routes = {
        '': LoginView, // Default to Login
        'login': LoginView,
        'dashboard': DashboardView,
        'dowod': DowodView,
        'legitymacja': LegitymacjaView,
        'services': ServicesView,
        'qr': QRView,
        'show-qr': ShowQRView,
        'more': MoreView
    };

    // 3. Start Router
    Router.init(routes);
});
