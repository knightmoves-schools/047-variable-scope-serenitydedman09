let distanceInMiles = 100;

let estimatedArrivalTime = () {
    let milesPerHour = 50;
    return distanceInMiles / estimatedArrivalTime;
}


document.getElementById("result").innerHTML = estimatedArrivalTime();