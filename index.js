// Code your solution in this file!
const returnFirstTwoDrivers = (namesArray) => [namesArray[0], namesArray[1]];

const returnLastTwoDrivers = (array) => [array[array.length-2], array[array.length-1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => function(){
    const fare = int * int;
    return fare;
}

const fareDoubler = (int) => {
    const fare = parseInt(int) * 2;
    return fare;
}


const fareTripler = (int) => {
    const fare = parseInt(int) * 3;
    return fare;
}

function selectDifferentDrivers(array , firstOrLast ){
    if (firstOrLast === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array);
    } else if (firstOrLast === returnLastTwoDrivers){
        return returnLastTwoDrivers(array);
    };
};