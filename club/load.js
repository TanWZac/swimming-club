const readingProgress = document.querySelector('#reading-progress-fill');
const footerHeight = 250;
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
});