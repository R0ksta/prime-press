document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="bg-white border-t border-gray-200 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Prime Press</h5>
                    <p class="text-gray-600">Professional domestic ironing services for Melbourne's Eastern Suburbs.</p>
                </div>
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Business Hours</h5>
                    <ul class="text-gray-600 space-y-2">
                        <li>Mon-Fri: 17:00 – 21:00</li>
                        <li>Sat-Sun: 09:00 – 17:00</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-lg font-bold uppercase mb-4 tracking-wider">Contact</h5>
                    <ul class="text-gray-600 space-y-2">
                        <li>Email: admin@primepress.com.au</li>
                        <li>Location: Blackburn, VIC 3130</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; 2026 Prime Press.</p>
                <div class="space-x-4 mt-4 md:mt-0">
                    <a href="/service-areas.html" class="underline">Service Areas</a>
                    <a href="/service-policy.html" class="underline">Policy</a>
                </div>
            </div>
        </div>
    </footer>`;

    document.getElementById('global-footer').innerHTML = footerHTML;
});