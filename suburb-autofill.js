(async function() {
    async function initAutofill() {
        try {
            // 1. Fetch the external JSON file
            const response = await fetch('/suburbs.json');
            if (!response.ok) throw new Error('Could not load suburb data');
            const suburbMap = await response.json();

            // 2. Determine current suburb from URL
            const path = window.location.pathname.split("/").pop().replace(".html", "").toLowerCase();
            const data = suburbMap[path] || { pc: "3130", fee: "$0.00" };
            
            // 3. Convert hyphenated-slug to Display Name
            const displayName = path.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            // 4. Injected data into the HTML
            document.querySelectorAll('.dynamic-suburb').forEach(el => el.textContent = displayName);
            document.querySelectorAll('.dynamic-postcode').forEach(el => el.textContent = data.pc);
            document.querySelectorAll('.dynamic-delivery').forEach(el => el.textContent = data.fee);
            
            // 5. Trigger "How it Works" if script exists
            if (typeof loadHowItWorks === 'function') {
                loadHowItWorks(displayName);
            }
        } catch (error) {
            console.error('Autofill Error:', error);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAutofill);
    } else {
        initAutofill();
    }
})();