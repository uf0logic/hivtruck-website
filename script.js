// init Masonry
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: 20,
    percentPosition: true,
    horizontalOrder: false,
    transitionDuration: '0.6s',
    stagger: 30
  });

  imagesLoaded(grid).on("progress", () => msnry.layout());
});
