function getRecipe() {
  setTimeout(() => {
    const recipeId = [61, 38, 23, 57];
    console.log(recipeId);

    setTimeout(
      id => {
        const recipe = {
          title: 'WaiWai Chaw Chaw',
          chef: 'Roshan',
        };
        console.log(`${id}: ${recipe.title}`);

        setTimeout(
          publisher => {
            const recipe2 = {
              title: 'Elaichi Tea',
              chef: 'Roshan',
            };
            console.log(recipe);
          },
          1500,
          recipe.chef
        );
      },
      1500,
      recipeId[3]
    );
  }, 1500);
}
getRecipe();
