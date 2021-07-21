// Part 1
var year = olympics.map(years =>  years.Year);
var level = olympics.map(levels =>  levels.level_0);
var trace1 = {
  x: level,
  y: year,
  type: "scatter"
};

var data = [trace1];

var layout = {
  title: "What year USA won Gold in a 100M Dash - Men"
};

Plotly.newPlot("scatter-plot", data, layout);
