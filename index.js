var distanceInMiles = 100;

var estimatedArrivalTime = () {
    let milesPerHour = 50;
    return distanceInMiles / milesPerHour;
}


document.getElementById("result").innerHTML = estimatedArrivalTime();