// Floating social proof notifications
const MOUNT_ID = 'notification-mount';
function ensureMount(){
  let m = document.getElementById(MOUNT_ID);
  if(!m){
    m = document.createElement('div');
    m.id = MOUNT_ID;
    Object.assign(m.style,{
      position:'fixed',right:'16px',bottom:'16px',zIndex:999,
      display:'flex',flexDirection:'column',gap:'10px',maxWidth:'320px'
    });
    document.body.appendChild(m);
  }
  return m;
}

function cardHtml(item){
  const amount = new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES'}).format(item.amount);
  return `<div role="status" aria-live="polite" style="padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.05));backdrop-filter:blur(10px);box-shadow:0 8px 24px rgba(0,0,0,.35);color:#f2f6f9">
    <strong style="color:#39ff14">${item.name}</strong> from ${item.city} just earned <strong>${amount}</strong>
    <div style="font-size:.85rem;opacity:.8;margin-top:4px">${item.minutesAgo} min ago</div>
  </div>`;
}

async function loadPayouts(){
  try{
    const res = await fetch('/api/payouts');
    if(!res.ok) return [];
    return await res.json();
  }catch{return []}
}

(async function init(){
  const mount = ensureMount();
  const data = await loadPayouts();
  if(!data.length) return;
  let i = 0;
  setInterval(()=>{
    const it = data[i++ % data.length];
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardHtml(it);
    mount.prepend(wrapper.firstChild);
    if(mount.children.length>4){
      mount.removeChild(mount.lastChild);
    }
  }, 4000);
})();
