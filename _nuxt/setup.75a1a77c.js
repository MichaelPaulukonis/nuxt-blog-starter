let t;function w(...o){}function k(o,e={log:w,warn:w}){if(!window.WebSocket)return e.warn("Your browser does not support WebSocket"),null;const d=()=>e.log("WS connected!"),f=n=>{switch(n.code){case"ECONNREFUSED":a(!0);break;default:e.warn("Socket error:",n);break}},s=n=>{n.code===1e3||n.code===1005?e.log("Socket closed"):a(!0)},i=[],S=n=>{let c;try{c=JSON.parse(n.data)}catch{e.warn("Error parsing message:",n.data);return}i.forEach(l=>l(c))},h=n=>{t&&t.send(JSON.stringify(n))};let u=0;const a=(n=!1)=>{if(n){u++,u<5?(e.log("Reconnecting..."),setTimeout(a,1e3)):e.warn("Giving up!");return}if(t){try{t.close()}catch{}t=void 0}if(o){const c=`${o}ws`;e.log(`WS connect to ${c}`),t=new WebSocket(c),t.onopen=d,t.onmessage=S,t.onerror=f,t.onclose=s}};return t||a(),{connect:a,send:h,addHandler(n){typeof n=="function"&&i.push(n)}}}let r;const p="[Content Assets]",E={log:(...o)=>console.log(p,...o),warn:(...o)=>console.warn(p,...o)};function W(o,e,d){if(!r&&(r=k(o,E),r===null))return null;const f={addHandler(s){return r&&typeof s=="function"&&r.addHandler(i=>{if(i.channel===e)return s(i)}),this},send(s){return r&&r.send({channel:e,data:s}),this}};return d&&f.addHandler(d),f}export{W as setupSocketClient};
