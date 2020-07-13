function scrollAppear() {
  var introText = document.querySelector(".intro-txt");
  var introImg = document.querySelector(".intro-img");
  var textPosition = introText.getBoundingClientRect().top;
  var imgPositon = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (textPosition < screenPosition && imgPositon < screenPosition) {
    introText.classList.add("intro-txt-appear");
    introImg.classList.add("intro-img-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
