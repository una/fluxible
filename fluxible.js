var now = new Date();
console.log(now.getHours());

if (now.getHours() >= 20 || now.getHours() <= 5) {
  document.getElementsByTagName('body')[0].classList.add('evening');
}
