import{H as t}from"./index-CxPYpI9t.js";function i(){document.querySelector("#login-form").hidden=!0;const o=document.createElement("section");o.className="aero-window dragonfly-login ghosty-migration",o.innerHTML=`<header class="aero-header">Гости переехали на Стрекозу!</header>
    <div class="dragonfly-login-body">
      <p>Теперь вход в Гости осуществляется через платформу Стрекоза. Если ты уже играл раньше, привяжи старый аккаунт, чтобы сохранить персонажа, монеты и предметы.</p>
      <ol><li>Зарегистрируйся или войди на dragonfly-flash.com.</li>
        <li>Открой раздел «Игры» и выбери «Гости».</li>
        <li>Нажми «Я уже Гостер».</li>
        <li>Введи старые логин и пароль Ghosty.</li></ol>
      <button id="migration-go" type="button" class="aero-button-primary">Перейти в Гости на Стрекозе</button>
      <p>Впервые в Гостях? Нажми „Я новенький“ в Стрекозе.</p>
      <button id="migration-recover" type="button" hidden>Забыли пароль старого аккаунта?</button>
      <p class="df-help">Восстановление возможно через ранее подтверждённую почту. Если такой почты нет, обратись в поддержку: потребуется проверка владения аккаунтом.</p>
    </div>`,document.querySelector("#login-form").after(o),o.querySelector("#migration-go").onclick=()=>{location.assign("https://dragonfly-flash.com/play/ghosty")},t({recoveryOnly:!0})}export{i as setupMigrationUI};
