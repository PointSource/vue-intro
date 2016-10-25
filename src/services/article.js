const articles = [
  {
    id: 1,
    title: 'GameInformer | Civilization VI Review',
    url: 'http://www.gameinformer.com/games/sid_meiers_civilization_vi/b/pc/archive/2016/05/25/making-all-the-right-moves.aspx'
  },
  {
    id: 2,
    title: 'WIRED | Nintendo Switch Reveal',
    url: 'https://www.wired.com/2016/10/nintendo-nx-switch/'
  },
  {
    id: 3,
    title: 'Polygon | Deus Ex: Mankind Divided Review',
    url: 'http://www.polygon.com/2016/8/19/12491450/deus-ex-mankind-divided-review-xbox-one-PC-PS4'
  }
];

function fetch() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {

      return resolve(shuffle(articles));
    }, 500);
  });
}

function fetchById(id) {
  return articles.filter((article) => {
    return article.id === id;
  })[0];
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default {
  fetch,
  fetchById
};
