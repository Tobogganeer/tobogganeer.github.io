// https://stackoverflow.com/questions/67815853/how-do-i-make-an-image-full-screen-on-click
const imgs = document.querySelectorAll('.click-to-zoom');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});