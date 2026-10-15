// Router module
const Router = {
    routes: {},
    currentRoute: null,

    init(routes) {
        this.routes = routes;
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute(); // Handle initial load
    },

    async handleRoute() {
        const hash = window.location.hash.slice(1) || 'login'; // Default to login
        console.log('Navigating to:', hash);

        // Update Bottom Nav UI
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.target === hash);
            // update icon src if we implemented active/inactive logic
            // simple opacity fallback via CSS is in .nav-item.active
        });

        // Resolve View
        const viewRender = this.routes[hash];
        const app = document.getElementById('app');
        
        if (viewRender) {
            this.currentRoute = hash;
            // Clear content
            app.innerHTML = '';
            // Render new content
            const content = await viewRender();
            app.appendChild(content);
        } else {
            console.warn('Route not found:', hash);
            // Default to login if route unknown
            if (hash !== 'login') window.location.hash = '#login';
        }
    }
};

export default Router;
