/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Sandy's Blog",
  description: "Welcome to my new blog.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: './image/pic.jpg' ,
  avatarClass: "rounded-full",
  author: "Sandy Vu",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
