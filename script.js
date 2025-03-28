// 1. List of ALL image filenames
// const artImages = [
//   "art2.jpg",
//   "art3.jpg",
//   "art4.jpg",
//   "art5.jpg",
//   "art6.jpg",
//   "art7.jpg",
//   "art8.jpg",
//   "art9.jpg",
//   "art10.jpg",
//   "art11.jpg",
//   "art12.jpg",
//   "art13.jpg",
//   "art14.jpg",
//   "art15.jpg",
//   "art16.jpg",
//   "art17.jpg",
//   "art18.jpg",
//   "art19.jpg",
//   "art20.jpg",
//   "art21.jpg",
//   "art22.jpg",
//   "art23.jpg",
//   "art24.jpg",
//   "art25.jpg",
// ];

// 2. Automatic grid creation
// $(".grid").masonry({
//   itemSelector: ".grid-item",
//   columnWidth: ".grid-sizer",
//   percentPosition: true,
// });

// init Masonry
document.addEventListener("DOMContentLoaded", function () {
  let grid = document.querySelector(".grid");

  let msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: 10,
    percentPosition: true,
    horizontalOrder: false
  });

  imagesLoaded(grid).on("progress", function () {
    // layout Masonry after each image loads
    msnry.layout();
  });
});
