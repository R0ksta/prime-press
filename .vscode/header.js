document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <nav class="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex-shrink-0 flex items-center">
                    <a href="/index.html" class="flex items-center space-x-3">
                        <img src="/logo-main.png?v=1" alt="Prime Press Logo" class="h-12 w-auto object-contain">
                        <h1 class="text-xl md:text-2xl font-bold tracking-tighter uppercase text-black">Prime Press</h1>
                    </a>
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="/index.html" class="text-gray-600 hover:text-black font-medium transition-colors">Home</a>
                    <a href="/faq.html" class="text-gray-600 hover:text-black font-medium transition-colors">FAQ</a>
                    <a href="/service-areas.html" class="text-gray-600 hover:text-black font-medium transition-colors">Service Areas</a>
                    <a href="/service-policy.html" class="text-gray-600 hover:text-black font-medium transition-colors">Service Policy</a>
                    <a href="tel:0422430990" class="flex items-center gap-2 text-black font-bold hover:text-gray-400 transition-colors">0422 430 990</a>
                    <a href="/index.html#book-now" class="btn-primary bg-black text-white px-6 py-2 rounded-md font-semibold">Book Now</a>
                </div>
                <div class="md:hidden">
                    <button id="menu-toggle" class="text-black p-2">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100">
            <a href="/index.html" class="block py-4 px-4 border-b border-gray-100">Home</a>
            <a href="/faq.html" class="block py-4 px-4 border-b border-gray-100">FAQ</a>
            <a href="/service-areas.html" class="block py-4 px-4 border-b border-gray-100">Service Areas</a>
            <div class="p-4">
                <a href="/index.html#book-now" class="block bg-black text-white py-4 rounded-md text-center font-bold">Book Now</a>
            </div>
        </div>
    </nav>`;

    document.getElementById('global-header').innerHTML = headerHTML;

    // Re-bind the mobile menu logic since the elements now exist
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
});