// Simple neon particle background
const canvas = document.getElementById('particles');
if (canvas){
  const ctx = canvas.getContext('2d');
  const DPR = Math.max(1, window.devicePixelRatio || 1);
  let w, h;
  const particles = [];
  const COUNT = 80;

  function resize(){
    w = canvas.clientWidth = window.innerWidth;
    h = canvas.clientHeight = window.innerHeight;
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(min,max){return Math.random()*(max-min)+min}

  for(let i=0;i<COUNT;i++){
    particles.push({
      x: rand(0, w),
      y: rand(0, h),
      r: rand(1.2, 3.5),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.25, 0.25),
      hue: Math.random()<0.6? 120: (Math.random()<0.5? 190: 60) // neon green / cyan / yellow
    });
  }

  function step(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>w) p.vx*=-1;
      if(p.y<0||p.y>h) p.vy*=-1;
      const x = p.x * DPR, y = p.y * DPR, r = p.r * DPR;
      const grad = ctx.createRadialGradient(x,y,0,x,y,r*6);
      const color = `hsla(${p.hue} 100% 60% /`;
      grad.addColorStop(0, `${color}0.95)`);
      grad.addColorStop(1, `${color}0)`);
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(x,y,r*6,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
