(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("homeContent");const n=document.createElement("img");n.src="/home/san/Restaurant-page/restaurant-page/img/tacos.jpg",n.height="500",t.appendChild(n);const d=document.createElement("h1");d.textContent=" California BAbu's restaurant",t.appendChild(d);const c=document.createElement("p");c.textContent=" We serve the best Tacos!!!  ",t.appendChild(c),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".homeContent");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),d=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div");d.setAttribute("id","home-btn"),c.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),d.classList.add("tab"),c.classList.add("tab"),o.classList.add("tab"),d.textContent=" Home",c.textContent=" Menu",o.textContent=" Contact",n.appendChild(d),n.appendChild(c),n.appendChild(o),d.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("homeContent");const n=document.createElement("h1");n.textContent=" !--)MENU(--! ";const d=document.createElement("ul"),c=document.createElement("li");c.textContent="item1";const o=document.createElement("li");o.textContent="item2";const a=document.createElement("li");a.textContent=" item3",d.appendChild(c),d.appendChild(o),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("homeContent");const n=document.createElement("h1");n.textContent=" !--)CONTACT US(--! ";const d=document.createElement("ul"),c=document.createElement("li");c.textContent="email - huhuh@gmail.tem1";const o=document.createElement("li");o.textContent="phone_number - 987654321";const a=document.createElement("li");a.textContent=" land_line - 789-012-564",d.appendChild(c),d.appendChild(o),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t);const l=document.createElement("h1");l.textContent=" !--)contact(--! ";const m=document.createElement("form");m.classList.add("contact-form");const i=document.createElement("input");i.type("text"),i.placeholder=" enter you name.",m.appendChild(i);const p=document.createElement("input");p.type("text"),p.placeholder=" enter your address",m.appendChild(p);const s=document.createElement("input");s.type("text"),s.placeholder=" enter your phone no.",m.appendChild(s);const r=document.createElement("input");r.type="submit",r.value="submit",m.appendChild(r),t.appendChild(l),t.appendChild(m),e.appendChild(t)})()}))})(),e()})();