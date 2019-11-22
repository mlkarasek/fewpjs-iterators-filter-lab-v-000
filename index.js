// Code your solution here

function findMatching(list, name){
  return list.filter(function (driverName) {
    return driverName.toLowerCase( === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let nameLength = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, nameLength) === partialName;
  });
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
