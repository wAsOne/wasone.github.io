import{a as m,b as h,c as w,d as q,e as T,r as E}from"./index-BUzwL3S-.js";/* empty css              */async function D(){document.documentElement.classList.add("standalone-scroll"),document.body.className="ideas-page reports-page",document.body.innerHTML=`
    <main class="aero-window ideas-window">
      <header class="aero-header"><h1>Сообщить об ошибке</h1><a href="../?play=1">Вернуться в игру</a></header>
      <div class="aero-body">
        <p>Заметили ошибку в Ghosty? Расскажите, что произошло, и по возможности приложите скриншот. Это поможет нам быстрее разобраться и исправить проблему</p>
        <form id="reports-login" class="idea-form" hidden>
          <label>Почта или имя<input name="username" autocomplete="username" required></label>
          <label>Пароль<input name="password" type="password" autocomplete="current-password" required></label>
          <button>Войти</button><a href="../?play=1">Вход и восстановление доступа в игре</a>
        </form>
        <form id="report-form" class="idea-form" hidden>
          <label>Название ошибки<input name="title" maxlength="120" required></label>
          <label>Описание<textarea name="description" maxlength="2000" aria-describedby="report-hint" required></textarea></label>
          <p id="report-hint">Опишите, что произошло и какие действия привели к ошибке</p>
          <label>Скриншот (необязательно)<input name="image" type="file" accept="image/png,image/jpeg,image/webp"></label>
          <p>Один PNG, JPEG или WebP до 5 МБ.</p>
          <button>Отправить сообщение</button>
        </form>
        <p id="report-status" role="status" aria-live="polite">Проверяем сессию…</p>
      </div>
    </main>`;const a=document.querySelector("#report-form"),s=document.querySelector("#reports-login"),e=document.querySelector("#report-status"),p=a.querySelector("button"),u=async()=>{const{account:t}=await m("session");a.hidden=!t,s.hidden=!!t,e.textContent=t?"":"Войдите в Ghosty, чтобы отправить сообщение."};s.onsubmit=async t=>{t.preventDefault();const o=new FormData(s);try{await m("login",{username:o.get("username"),password:o.get("password")}),s.reset(),await u()}catch(n){e.textContent=String(n instanceof Error?n.message:n)}};let g=crypto.randomUUID();a.oninput=()=>{g=crypto.randomUUID()},a.onsubmit=async t=>{if(t.preventDefault(),p.disabled)return;const o=new FormData(a),n=String(o.get("title")??"").trim(),b=String(o.get("description")??"").trim();if(!n||!b){e.textContent="Заполните название и описание ошибки.";return}const i=o.get("image"),S=g;p.disabled=!0,e.textContent="Отправляем сообщение…";try{let r;if(i instanceof File&&i.name){if(!i.size||i.size>5*1024*1024||!["image/png","image/jpeg","image/webp"].includes(i.type))throw Error("Выберите один PNG, JPEG или WebP до 5 МБ.");r=await new Promise((d,x)=>{const c=new FileReader;c.onload=()=>d(String(c.result).split(",")[1]),c.onerror=()=>x(Error("Не удалось прочитать скриншот.")),c.readAsDataURL(i)})}const l={"Content-Type":"application/json","X-Smile-Request":"1"};if(h)l["X-Smile-Transport"]="cookie";else if(w){l["X-Smile-Transport"]="bearer";const d=q();d&&(l.Authorization="Bearer "+d)}const f=await fetch(T+"/api/reports/",{method:"POST",headers:l,credentials:h?"include":w?"omit":"same-origin",body:JSON.stringify({title:n,description:b,image:r,requestId:S,clientVersion:"0.9.0"}),signal:AbortSignal.timeout(3e4)}),y=await E(f);if(!f.ok||!y.id)throw Error(y.error??"Не удалось отправить сообщение.");a.hidden=!0,e.textContent="Спасибо! Сообщение об ошибке отправлено",window.setTimeout(()=>location.assign("../?play=1"),2e3)}catch(r){e.textContent=r instanceof Error&&r.name!=="TimeoutError"&&!(r instanceof TypeError)?r.message:"Сервер не ответил. Повторите попытку.",p.disabled=!1}};try{await m("policy"),await u()}catch{e.textContent="Не удалось проверить сессию. Обновите страницу."}}export{D as setupReports};
