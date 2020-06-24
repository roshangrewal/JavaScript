const posts = [
  { title: 'First Post', body: 'This is my first post' },
  { title: 'Second Post', body: 'This is my second post' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    // console.log(output);
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}

// Async / Await;
async function init() {
  await createPost({ title: 'Third Post', body: 'This is my third post' });
  getPosts();
}
init();
