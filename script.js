const form = document.querySelector('#travelForm');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing

    const formData = new FormData(form);

    try {
        const response = await fetch('/recommend', {
            method: 'POST',
            body: formData,
        });

        // Check if the response is valid
        if (!response.ok) {
            const errorData = await response.json();
            resultsDiv.innerHTML = `<h2>Error:</h2><p>${errorData.error || "Unknown error occurred."}</p>`;
            return;
        }

        // Parse the response JSON
        const recommendations = await response.json();

        // Display the recommendations
        let output = "<h2>Recommended Destinations:</h2><ul>";
        recommendations.forEach((rec) => {
            output += `<li><strong>Destination:</strong> ${rec.Destination}, <strong>Budget:</strong> ${rec.Budget}, <strong>Season:</strong> ${rec.Season}, <strong>Travel Mode:</strong> ${rec.TravelMode}</li>`;
        });
        output += "</ul>";
        resultsDiv.innerHTML = output;
    } catch (error) {
        resultsDiv.innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
    }
});
