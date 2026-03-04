function loadHowItWorks(suburbName) {
    const pageContainer = document.getElementById('how-it-works-container');
    if (!pageContainer) return;

    const section = `
    <section id="how-it-works" class="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h3 class="text-2xl md:text-3xl font-bold uppercase tracking-wide">How Does It Work for ${suburbName}?</h3>
                <p class="mt-4 text-gray-600">A simple, stress-free procedure to get your clothes looking sharp.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                    <h4 class="text-lg font-bold mb-2">Book Online</h4>
                    <p class="text-gray-600">Fill out our booking form to choose drop-off or pick-up and get a quick price estimate.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                    <h4 class="text-lg font-bold mb-2">Garment Collection</h4>
                    <p class="text-gray-600">Drop off in Blackburn or leave out for our team (subject to availability). Please call 0422 430 990 for latest information.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                    <h4 class="text-lg font-bold mb-2">Ready to Wear</h4>
                    <p class="text-gray-600">We will notify you when your clothes are perfectly ironed and ready for return or pick-up.</p>
                </div>
            </div>
        </div>
    </section>`;

    pageContainer.innerHTML = section;
}