Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  dragToClose: false,

  showClass: false,
  hideClass: false,

  closeButton: "top",

  Image: {
    click: "close",
    wheel: "slide",
    zoom: false,
    fit: "cover",
  },
});