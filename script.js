document.getElementById("travelForm").addEventListener("submit", function(e){
    e.preventDefault();

    let days = document.getElementById("days").value;
    let transport = document.getElementById("transport").value;

    let costPerDay = 1000;

    if(transport === "Train") costPerDay = 1500;
    if(transport === "Flight") costPerDay = 3000;

    let totalCost = days * costPerDay;

    document.getElementById("result").innerHTML =
        "Estimated Budget: ₹" + totalCost;
});
