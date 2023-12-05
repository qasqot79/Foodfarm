function updateResults() {
    // Get selected products
    const selectedProducts = Array.from(document.getElementById('products').selectedOptions).map(option => option.value);

    // Simulate fetching matching farmers (replace with actual logic)
    const matchingFarmers = getMatchingFarmers(selectedProducts);

    // Display results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h2>Matching Farmers:</h2>`;
    
    if (matchingFarmers.length === 0) {
        resultsContainer.innerHTML += `<p>No matching farmers found.</p>`;
    } else {
        matchingFarmers.forEach(farmer => {
            resultsContainer.innerHTML += `<p>${farmer}</p>`;
        });
    }
}

// Function to simulate fetching matching farmers (replace with actual logic)
function getMatchingFarmers(selectedProducts) {
    const farmersData = {
        'John_Doe': ['Apples', 'Tomatoes', 'Carrots'],
        'Jane_Smith': ['SweetPotatoes', 'Watermelon', 'Pinepples'],
        'Alex_Johnson': ['maize', 'Peppers', 'Banana'],
    };

    return Object.keys(farmersData).filter(farmer => {
        const farmerProducts = farmersData[farmer];
        return selectedProducts.some(product => farmerProducts.includes(product));
    });
}
