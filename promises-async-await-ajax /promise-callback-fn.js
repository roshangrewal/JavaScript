const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([61, 38, 23, 57]);
  }, 2000);
});
// console.log(getIDs);

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = { title: 'Butter Milk', chef: 'Roshan' };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = chef => {
  return new Promise((resolve, reject) => {
    setTimeout(
      chef => {
        const recipe = { title: 'Cold Coffee', chef: 'Roshan' };
        resolve(`${chef}: ${recipe.title}`);
      },
      2000,
      chef
    );
  });
};

getIDs
  .then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log(recipe);
    return getRelated('Roshan');
  })
  .then(recipe => {
    console.log(recipe);
  })
  .catch(error => {
    console.log('Error', error);
  });
