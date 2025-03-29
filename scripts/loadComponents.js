// Detect if we're on GitHub Pages
// const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = '';

// Load components
async function loadComponents() {
  try {
    // Load header
    const headerResp = await fetch(`${basePath}components/header.html`);
    document.body.insertAdjacentHTML('afterbegin', await headerResp.text());
    
    // Load footer
    const footerResp = await fetch(`${basePath}components/footer.html`);
    document.body.insertAdjacentHTML('beforeend', await footerResp.text());
    
    // Update year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load main JS
    const script = document.createElement('script');
    script.src = `${basePath}scripts/main.js`;
    document.body.appendChild(script);
  } catch (error) {
    console.error('Failed to load components:', error);
    loadFallbackComponents();
  }
}

function loadFallbackComponents() {
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header">
      <nav class="navbar">
        <a href="${basePath}" class="logo">MySite</a>
        <ul class="nav-links">
          <li><a href="${basePath}">Home</a></li>
          <li><a href="${basePath}pages/about.html">About</a></li>
        </ul>
      </nav>
    </header>
  `);
  
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <p>&copy; ${new Date().getFullYear()} MySite</p>
    </footer>
  `);
  
  const script = document.createElement('script');
  script.src = `${basePath}scripts/main.js`;
  document.body.appendChild(script);
}

// Start loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}
