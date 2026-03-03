document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="bg-white border-t border-gray-200 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Prime Press</h5>
                    <p class="text-gray-600 leading-relaxed">Professional domestic ironing services bringing quality and crisp perfection to Melbourne's Eastern Suburbs.</p>
                </div>
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Business Hours</h5>
                    <ul class="text-gray-600 space-y-2">
                        <li>Monday - Friday: 17:00 – 21:00</li>
                        <li>Saturday - Sunday: 09:00 – 17:00</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Contact & Location</h5>
                    <ul class="text-gray-600 space-y-2">
                        <li>Email: <a href="mailto:admin@primepress.com.au" class="hover:text-black transition-colors underline decoration-gray-300">admin@primepress.com.au</a></li>
                        <li>Call: <a href="tel:0422430990" class="hover:text-black transition-colors">0422 430 990</a></li>
                        <li>Location: Blackburn, VIC 3130</li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm">
                <p class="text-center md:text-left">&copy; 2026 Prime Press. All Rights Reserved.</p>
                <div class="flex flex-wrap justify-center gap-4 mt-4 md:mt-0 font-medium">
                    <a href="/service-areas.html" class="hover:text-black transition-colors underline decoration-gray-200">Service Areas</a>
                    <a href="/service-policy.html" class="hover:text-black transition-colors underline decoration-gray-200">Service Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <button id="backToTop" class="fixed bottom-6 right-6 z-[60] bg-black text-white p-3 rounded-lg shadow-xl opacity-0 translate-y-10 transition-all duration-300 pointer-events-none hover:bg-gray-800 focus:outline-none" aria-label="Back to top">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"></path>
        </svg>
    </button>`;

    const footerElement = document.getElementById('global-footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;

        const backToTopBtn = document.getElementById('backToTop');

        // Show/Hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        }, { passive: true });

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});