// Store module to manage application data
const Store = {
  data: null,
  theme: 'light', // Default theme

  async init() {
    try {
      const response = await fetch("personal/info.json");
      if (!response.ok) throw new Error("Failed to load personal info");
      this.data = await response.json();
      console.log("Store initialized:", this.data);
    } catch (error) {
      console.error("Store init error:", error);
      this.data = {};
    }
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('mobywatel-theme');
    if (savedTheme) {
      this.theme = savedTheme;
    }
    this.applyTheme();
  },

  getUser() {
    return this.data;
  },

  getTheme() {
    return this.theme;
  },

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('mobywatel-theme', theme);
    this.applyTheme();
  },

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    return newTheme;
  },

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${this.theme}-theme`);
  }
};

export default Store;
