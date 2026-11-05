import{$ as e}from"./index-CioAw4z_.js";function o(){document.querySelector("#login-form").hidden=!0;const a=document.createElement("section");a.className="aero-window dragonfly-login ghosty-migration",a.innerHTML=`<header data-studio-message="message.auth.migration.b06a5b11ba6f" class="aero-header">Гости переехали на Стрекозу!</header>
    <div class="dragonfly-login-body">
      <p data-studio-message="message.auth.migration.bd096ea7e6d3">Теперь вход в Гости осуществляется через платформу Стрекоза. Если ты уже играл раньше, привяжи старый аккаунт, чтобы сохранить персонажа, монеты и предметы.</p>
      <ol><li data-studio-message="message.auth.migration.78f07cfb46ed">Зарегистрируйся или войди на dragonfly-flash.com.</li>
        <li data-studio-message="message.auth.migration.ba2398c97bce">Открой раздел «Игры» и выбери «Гости».</li>
        <li data-studio-message="message.auth.migration.deccbad3cb72">Нажми «Я уже Гостер».</li>
        <li data-studio-message="message.auth.migration.7349669c0afe">Введи старые логин и пароль Ghosty.</li></ol>
      <button data-studio-message="message.auth.migration.2990645142aa" id="migration-go" type="button" class="aero-button-primary">Перейти в Гости на Стрекозе</button>
      <p data-studio-message="message.auth.migration.b6fc372f8aa1">Впервые в Гостях? Нажми „Я новенький“ в Стрекозе.</p>
      <button data-studio-message="message.auth.migration.df98a7a5f4dc" id="migration-recover" type="button" hidden>Забыли пароль старого аккаунта?</button>
      <p data-studio-message="message.auth.migration.800c19bc3db2" class="df-help">Восстановление возможно через ранее подтверждённую почту. Если такой почты нет, обратись в поддержку: потребуется проверка владения аккаунтом.</p>
    </div>`,document.querySelector("#login-form").after(a),a.querySelector("#migration-go").onclick=()=>{location.assign("https://dragonfly-flash.com/play/ghosty")},e({recoveryOnly:!0})}export{o as setupMigrationUI};
