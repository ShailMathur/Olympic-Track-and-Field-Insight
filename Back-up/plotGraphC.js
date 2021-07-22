// Part 1 - Create the Trace
var year = olympics.map(years =>  years.Year);
var level = olympics.map(levels =>  levels.level_0);
var trace1 = {
  x: level,
  y: year,
  type: "scatter"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "What year USA won Gold in a 100M Dash - Women",
  xaxis: { title: "Level" },
  yaxis: { title: "Year" }
};

Plotly.newPlot("scatter-plot", data, layout);
