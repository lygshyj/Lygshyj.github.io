var posts=["2024/09/02/hello-world/","2024/09/04/Hexo学习之路-命令篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };