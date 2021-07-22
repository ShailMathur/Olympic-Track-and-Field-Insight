
// Variable Declaration
let tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Function Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        
        filterData = filterData.filter((row) => row.datetime === date);
    }
    
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
