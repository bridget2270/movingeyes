const pupils = document.getElementsByClassName('pupil');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    pupils[i].style.left = x;
    pupils[i].style.top = y;
    pupils[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
