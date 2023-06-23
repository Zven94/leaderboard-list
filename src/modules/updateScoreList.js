import { getScore, dataLeaderBoard } from './getScore';

const listItemsParent = document.querySelector('.body-main-section-div1-lu-list');

const refreshList = async () => {
  while (listItemsParent.firstChild) {
    listItemsParent.removeChild(listItemsParent.firstChild);
    dataLeaderBoard.length = 0;
  }

  await getScore();
  dataLeaderBoard.forEach((element) => {
    const listItem = document.createElement('li');
    listItemsParent.appendChild(listItem);
    listItem.innerHTML = `${element.user}: ${element.score}`;
    const index = dataLeaderBoard.indexOf(element);
    if (index % 2 === 0) {
      listItem.classList.add('makeMeGray');
    }
  });
};

export default refreshList;