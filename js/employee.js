var employeePromise = d3.json("../employee.json");

var successFCN = function(employees)
{console.log("Data collected", employees);

 var rows = d3.select("tbody")
.selectAll("tr")
.data(employees)
.enter()
.append("tr")
rows.append("td")
.text(function(person){return person.firstName;})

var last = d3.select("tbody")
.selectAll("tr")
.data(employees)
.enter()
.append("tr")
rows.append("td")
.text(function(person){return person.lastName;})


 var getImage = function(person)
 {return person.photo;}
 var photos = employees.map(getImage)
 
 var image = d3.select("tbody")
.selectAll("tr")
.data(employees)
.enter()
.append("tr")
rows.append("td")
.append("img")
 .attr("src", getImage);
 
 var title = d3.select("tbody")
 .selectAll("tr")
 .data(employees)
 .enter()
 .append("tr")
 rows.append("td")
 .text(function(person) {return person.title;})
 
 var unit = d3.select("tbody")
 .selectAll("tr")
 .data(employees)
 .enter()
 .append("tr")
 rows.append("td")
 .text(function(person) {return person.unit;})
 
}

var failFCN = function(errorMsg)
{console.log("Something went wrong", errorMs);}

employeePromise.then(successFCN, failFCN);


