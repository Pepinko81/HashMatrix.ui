// Matrix Rain effect
function initMatrixRain() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0'; // Place behind content
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  // Set canvas size to window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
    
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Matrix characters
  const chars = 'ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charArray = chars.split('');
    
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    // Semi-transparent black background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and font
    ctx.fillStyle = 'rgba(0, 255, 0, 0.35)';
    ctx.font = `${fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      // Reset drop to top when it reaches bottom
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  // Animation loop
  return setInterval(draw, 33);
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMatrixRain);
} else {
  initMatrixRain();
}
