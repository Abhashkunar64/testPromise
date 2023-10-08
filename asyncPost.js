let user = {
    lastActivityTime: null,
    posts: []
  };
  
  async function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  async function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  
  async function deletePost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = user.posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  async function main() {
    await createPost('New Post');
    await updateLastUserActivityTime();
    
    console.log(user.posts);
    console.log(user.lastActivityTime);
  
    await deletePost();
  
    console.log(user.posts);
  }
  
  main();