let user = {
    lastActivityTime: null,
    posts: []
  };
  
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost() {
    return new Promise((resolvs) => {
      setTimeout(() => {
        const deletedPost = user.posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  
  Promise.all([createPost('New Post'), updateLastUserActivityTime()])
    .then(() => {
      console.log(user.posts);
      console.log(user.lastActivityTime);
      return deletePost();
    })
    .then(() => {
      console.log(user.posts);
    });
  