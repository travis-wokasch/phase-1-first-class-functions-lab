const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier) {
    return function(x) {
        return fareMultiplier * x
    }
}

 const fareDoubler = function(createFareMultiplier){
     return createFareMultiplier * 2
 }
 
 const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, parm1){
    if (parm1 === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (parm1 === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}