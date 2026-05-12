let distanceInMiles = 100;

function estimatedArrivalTime = () {
    let milesPerHour = 50;
    return distanceInMiles / milesPerHour;
}


document.getElementById("result").innerHTML = estimatedArrivalTime();