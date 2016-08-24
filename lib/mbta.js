'use strict';

// Code here.


const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let mbta = {
    'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  };

  let totalStops;
  if(startLine === endLine) {
    totalStops = Math.abs(mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation));
  }
  else {
    let firstTransfer = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'));
    let lastTransfer = Math.abs(mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street'));
    totalStops = firstTransfer + lastTransfer;
  }
  return totalStops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
