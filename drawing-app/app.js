window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // REsizing
  canvas.width = window.innerWidth - 4;
  canvas.height = window.innerHeight - 4;

  let painting = false;
  function startPainting(e) {
    painting = true;
    draw(e);
  }

  function finishedPainting(e) {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.strokeStyle = 'green';
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', finishedPainting);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchstart', (e) => {
    painting = true;
  });
  canvas.addEventListener('touchend', finishedPainting);
  canvas.addEventListener('touchmove', (e) => {
    if (!painting) return;
    var touch = e.touches[0] || e.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;

    ctx.lineWidth = 10;
    ctx.strokeStyle = 'green';
    ctx.lineCap = 'round';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  });
  canvas.addEventListener('touchcancel', finishedPainting);

});