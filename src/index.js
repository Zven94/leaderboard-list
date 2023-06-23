import './style.css';
import addNewScore from './modules/addNewScore';
// import getScore from './modules/getScore';
import refreshList from './modules/updateScoreList';

const inputButton = document.querySelector('.inputButton');
const refreshButton = document.querySelector('.refreshButton');

inputButton.addEventListener('click', await addNewScore);
refreshButton.addEventListener('click', await refreshList);

refreshList();
