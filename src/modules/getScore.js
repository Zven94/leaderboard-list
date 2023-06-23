// tomo la info nuevamente desde la API
// import { forEach } from "lodash";
// import dataLeaderBoard from ".."
const dataLeaderBoard = [];

let previousData = [];

// function to check if data had changed

const checkForChanges = (previousData, newData) => {
  if (previousData.length !== newData.length) {
    return true;
  }

  for (let i = 0; i < previousData.length; i += 1) {
    if (previousData[i] !== newData[i]) {
      return true;
    }
  }

  return false; // No ha habido cambios
};

const getScore = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GTAV/scores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const newData = data.result;
      const hasChanges = checkForChanges(previousData, newData);
      if (hasChanges) {
        newData.forEach((element) => {
          dataLeaderBoard.push(element);
        });
        previousData = newData;
      }
    });
};

export { dataLeaderBoard, getScore };
