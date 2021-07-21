// Part 1
var index = olympics.map(indexs =>  indexs.index);
var medal = olympics.map(medals =>  medals.Medal);
var trace1 = {
  x: index,
  y: medal,
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Count of Medals by Nation"
};

Plotly.newPlot("bar-plot", data, layout);
