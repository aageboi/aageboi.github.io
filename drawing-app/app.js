window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // REsizing
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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
  canvas.addEventListener('touchstart', startPainting);
  canvas.addEventListener('touchend', finishedPainting);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchcancel', finishedPainting);

});