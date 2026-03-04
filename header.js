document.addEventListener("DOMContentLoaded", function() {
    // Detect which page we are on
    const path = window.location.pathname;
    
    // Improved detection logic
    const isHome = path === "/" || path === "/index.html" || path.endsWith("/index.html") || path === "";
    const isFAQ = path.includes("faq");
    const isAreas = path.includes("service-areas");
    const isPolicy = path.includes("service-policy");

    // 1. SELECT THE CONTAINER AND FORCE STICKY
    const globalHeader = document.getElementById('global-header');
    if (globalHeader) {
        globalHeader.classList.add('sticky', 'top-0', 'z-50', 'w-full', 'bg-white');
    }

    // Helper function to pick classes based on active state
    const linkClass = (isActive) => 
        isActive 
        ? "text-black font-bold transition-colors border-b-2 border-black pb-1" 
        : "text-gray-600 hover:text-black font-medium transition-colors pb-1";

    const headerHTML = `
    <nav class="border-b border-gray-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex-shrink-0 flex items-center">
                    <a href="/index.html" class="flex items-center space-x-3">
                        <img src="/logo-main.png?v=1" alt="Prime Press Logo" class="h-12 w-auto object-contain">
                        <h1 class="text-xl md:text-2xl font-bold tracking-tighter uppercase text-black">Prime Press</h1>
                    </a>
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="/index.html" class="${linkClass(isHome)}">Home</a>
                    <a href="/faq.html" class="${linkClass(isFAQ)}">FAQ</a>
                    <a href="/service-areas.html" class="${linkClass(isAreas)}">Service Areas</a>
                    <a href="/service-policy.html" class="${linkClass(isPolicy)}">Service Policy</a>
                    <a href="tel:0422430990" class="flex items-center gap-2 text-black font-bold hover:text-gray-400 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        0422 430 990
                    </a>
                    <a href="/index.html#book-now" class="bg-black text-white px-6 py-2 rounded-md font-semibold border-2 border-white hover:bg-white hover:text-black hover:border-black transition-all">Book Now</a>
                </div>
                <div class="md:hidden flex items-center space-x-4">
                    <a href="tel:0422430990" class="flex items-center justify-center bg-gray-100 p-2 rounded-full text-black">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </a>
                    <button id="menu-toggle" class="text-black focus:outline-none">
                        <svg id="menu-icon" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path id="menu-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
            <a href="/index.html" class="block py-4 px-4 border-b border-gray-100 ${isHome ? 'bg-gray-50 font-bold text-black' : 'text-gray-600'}">Home</a>
            <a href="/faq.html" class="block py-4 px-4 border-b border-gray-100 ${isFAQ ? 'bg-gray-50 font-bold text-black' : 'text-gray-600'}">FAQ</a>
            <a href="/service-areas.html" class="block py-4 px-4 border-b border-gray-100 ${isAreas ? 'bg-gray-50 font-bold text-black' : 'text-gray-600'}">Service Areas</a>
            <a href="/service-policy.html" class="block py-4 px-4 border-b border-gray-100 ${isPolicy ? 'bg-gray-50 font-bold text-black' : 'text-gray-600'}">Service Policy</a>
            <div class="p-4 flex flex-col gap-3">
                <a href="tel:0422430990" class="block bg-gray-100 text-black px-6 py-4 rounded-md text-center font-bold uppercase tracking-wide">Call: 0422 430 990</a>
                <a href="/index.html#book-now" class="block bg-black text-white py-4 rounded-md text-center font-bold">Book Now</a>
            </div>
        </div>
    </nav>`;

    if (globalHeader) {
        globalHeader.innerHTML = headerHTML;
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuPath = document.getElementById('menu-path');
    
    if(menuToggle && mobileMenu) {
        const closeMenu = () => {
            mobileMenu.classList.add('hidden');
            menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); 
        };

        const openMenu = () => {
            mobileMenu.classList.remove('hidden');
            menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); 
        };

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            isHidden ? openMenu() : closeMenu();
        });

        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (!mobileMenu.classList.contains('hidden') && Math.abs(currentScrollY - lastScrollY) > 10) {
                closeMenu();
            }
            lastScrollY = currentScrollY;
        }, { passive: true });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', (e) => {
            if (!globalHeader.contains(e.target)) {
                closeMenu();
            }
        });
    }
});