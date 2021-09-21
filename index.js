const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = drivers => {
    return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (number) {
    return (fare) => {
        return fare * number;
    }
}

const fareDoubler = (fare) =>{
    return (fare) * 2
}

const fareTripler = (fare) =>{
    return (fare) * 3
}

const selectDifferentDrivers = (array, driverFunction) => {
    return driverFunction(array)
}