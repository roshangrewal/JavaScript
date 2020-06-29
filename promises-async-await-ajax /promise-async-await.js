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

async function getRecipeAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Roshan');
  console.log(related);

  return recipe;
}
// async function always returns PROMISE
getRecipeAW().then(result => console.log(`${result} is my recipe :) `));
