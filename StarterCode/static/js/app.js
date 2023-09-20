d3.json("samples.json").then(function(data) {
    console.log(data); // Use console.log to verify that you've loaded the data correctly
});

const sampledata = data.samples[0]; // Define 'sampleData' once

// Later in your code, you can reuse 'sampleData' without redeclaring it
const top10Values = sampleData.sample_values.slice(0, 10).reverse();
const top10Labels = sampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
const top10HoverText = sampleData.otu_labels.slice(0, 10).reverse();
// Create the bar chart trace
const barData = [{
    type: 'bar',
    x: top10Values,
    y: top10Labels,
    text: top10HoverText,
    orientation: 'h'
}];

// Define layout for the bar chart
const barLayout = {
    title: "Top 10 OTUs Found in the Individual",
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTU ID" }
};

// Create the bar chart using Plotly
Plotly.newPlot("bar-chart", barData, barLayout);

// Sample data for demonstration
const sampleData = data.samples[0]; // Change this to your selected sample

// Create the bubble chart trace
const bubbleData = [{
    x: sampleData.otu_ids,
    y: sampleData.sample_values,
    mode: 'markers',
    marker: {
        size: sampleData.sample_values,
        color: sampleData.otu_ids,
        colorscale: 'Earth',
        text: sampleData.otu_labels
    }
}];

// Define layout for the bubble chart
const bubbleLayout = {
    title: "Bubble Chart for Each Sample",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Sample Values" }
};

// Create the bubble chart using Plotly
Plotly.newPlot("bubble-chart", bubbleData, bubbleLayout);

// Sample data for demonstration
const sampleMetadata = data.metadata[0]; // Change this to your selected sample

// Get the element where you want to display the metadata
const metadataElement = document.getElementById("metadata");

// Create an HTML string to display the metadata
let metadataHTML = "<ul>";
for (const [key, value] of Object.entries(sampleMetadata)) {
    metadataHTML += `<li><strong>${key}:</strong> ${value}</li>`;
}
metadataHTML += "</ul>";

// Update the element with the metadata HTML
metadataElement.innerHTML = metadataHTML;