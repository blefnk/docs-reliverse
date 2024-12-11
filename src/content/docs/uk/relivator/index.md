---
title: Get Started with Relivator
description: This is the introduction of Relivator.
---

**Додайте цю сторінку в закладки у своєму браузері**: Цей проект буде тільки покращуватися в майбутньому. Ви також можете натиснути зірочку вгорі сторінки і додати репозиторій до своєї колекції, щоб мати до нього швидкий доступ.

Наразі ми мігруємо документацію з існуючого Relivator README.md на офіційний, нещодавно запущений [Relivator & Reliverse Docs веб-сайт (https://reliverse.org)](https://reliverse.org). Вміст буде організовано у відповідні розділи на новому сайті. Під час міграції деякі елементи можуть не працювати належним чином. Поточний файл README.md міститиме лише мінімальну інформацію. Будь ласка, повідомте нам, якщо у вас виникнуть якісь проблеми

---

<div align=«center»>
[🌐 Демонстрація](https://relivator.com) | [👋 Вступ](./INTRODUCTION.md) | [🏗️ Встановлення](./INSTALLATION.md) | [ Спонсори](./SPONSORS.md)
[⚙️ Скрипти](./SCRIPTS.md) | [🤔 FAQ](./FAQ.md) | [🔍 Деталі](./DETAILS.md) | [✅ Дорожня карта](./ROADMAP.md) | [📖 Журнал змін](./CHANGELOG.md)
</div>
<!-- 🚀 Ура! Дякуємо за встановлення та ласкаво просимо! Якщо вам подобається, будь ласка, дайте нам зірку! ⭐ -->
<!-- 👉 https://github.com/blefnk/relivator 🙏 -->
Перестаньте стрибати від одного стартера до іншого. З [Relivator](https://github.com/blefnk/relivator#readme) ваші можливості безмежні! Ви можете створити все, що завгодно; всі інструменти вже готові і чекають на вас.
Весь проект Relivator був розроблений однією людиною, [Назаром Корнієнком (blefnk)](https://github.com/blefnk)! Деякі люди вже зробили свій внесок, і ви можете зробити те ж саме - будь-який внесок вітається! Ваші внески не будуть забуті; [наша чудова спільнота](https://discord.gg/Pb8uKbwpsJ) високо цінує їх, і в майбутньому ви навіть можете отримати фінансову подяку від творця проекту. Давайте разом створимо найкрутіший Next.js шаблон у світі! Це буде спільна робота і спільна перемога, справжній win-win. Дякуємо всім за ваш внесок і [фінансову підтримку](./SPONSORS.md)!
Будь ласка, знайдіть хвилинку, щоб ознайомитися з інформацією нижче. Ви знайдете корисну інформацію про те, як все працює в проекті, а також широкий перелік функцій.
<div align=«center»>
<p>
    <span>
      <a href="https://relivator.com">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="/screenshot-dark.png" />
            <source media="(prefers-color-scheme: light)" srcset="/screenshot-light.png" />
            <img alt="Показує цільову сторінку шаблону Relivator Next.js, з його логотипом та фразою 'Relivator розширює можливості вашої електронної комерції за допомогою Next.js'." src="/screenshot-light.png" width="40%" />
        </picture>
      </a>
    </span>
    <span>
      <a href="https://github.com/blefnk/relivator/blob/main/og.png">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="/og.png" />
            <source media="(prefers-color-scheme: light)" srcset="/og.png" />
            <img alt="Зображення на темну тему, що демонструє різні технології та інструменти, які використовуються в проекті Relivator. У заголовку висвітлено Next.js 15, React 19, shadcn та шаблон Tailwind Template. Зображення розділене на декілька секцій, в яких перераховані такі технології, як shadcn, tailwind, next 15, react 19, clerk, authjs, drizzle, neon, ts 5.6, python, eslint 9, ts-eslint 8, knip, biome, unjs та reliverse. Фон має сітчастий макет з мінімалістичним дизайном, натхненний стилем інтерфейсу Figma та Loading UI." src="/og.png" width="45%" />
        </picture>
      </a>
    </span>
</p>
[![Discord chat][badge-discord]][link-discord]
[![Версія npm][badge-npm]][link-npm]
[![Ліцензія MIT](https://img.shields.io/github/license/blefnk/relivator.svg?color=blue)](ЛІЦЕНЗІЯ)
[𝕏](https://x.com/blefnk) | [GitHub](https://github.com/blefnk) | [Slack](https://join.slack.com/t/reliverse/shared_invite/zt-2mq703yro-hKnLmsgbIQul0wX~gLxRPA) | [LinkedIn](https://linkedin.com/in/blefnk) | [Facebook](https://facebook.com/blefnk) | [Discord](https://discord.gg/Pb8uKbwpsJ) | [Fiverr](https://fiverr.com/blefnk)
</div>
> *"Я не зміг знайти ~~спортивний автомобіль~~ Next.js стартер моєї мрії, тому я побудував його сам. »* © ~~Фердинанд Порше~~ [@blefnk](https://github.com/blefnk)
Наша мета - створити найбільш багатофункціональний і глобально доступний Next.js-стартер у світі. Він пропонує більше, ніж просто код - це досвід. Прокрутіть вниз, щоб побачити вражаючий список можливостей проекту, включаючи можливість перемикатися між Clerk/Auth.js (next-auth@beta/NextAuth.js) і Drizzle's MySQL/PostgreSQL на льоту. Ласкаво просимо до Relivator і спільноти Reliverse!
<!-- <p align=«center»>
    <span>
      <a href=«https://relivator.com»>
        <picture>
            <source media=«(prefers-color-scheme: dark)» srcset=«/screenshot-dark.png» />
            <source media=«(prefers-color-scheme: light)» srcset=«/screenshot-light.png» />
            <img alt=«Показує цільову сторінку шаблону Relivator Next.js, з його логотипом та фразою “Relivator розширює можливості вашої електронної комерції за допомогою Next.js”.» src=«/screenshot-light.png» width=«50%» />
        </picture> </picture
      </a>
    <span>
    <span style=«text-align: justify;»>
      <a href=«https://star-history.com/#blefnk/relivator&Timeline»>
      <picture>
        <source media=«(prefers-color-scheme: dark)» srcset=«https://api.star-history.com/svg?repos=blefnk/relivator&type=Timeline&theme=dark» />
        <source media=«(prefers-color-scheme: light)» srcset=«https://api.star-history.com/svg?repos=blefnk/relivator&type=Timeline» />
        <img alt=«Chart of Star History» src=«https://api.star-history.com/svg?repos=blefnk/relivator&type=Timeline» width=«50%» />
      </picture> </picture
      </a>
    </Я знаю, що це не так.
</p> -->
[![Дискорд-чат][badge-discord]][link-discord]
[badge-discord]: https://badgen.net/discord/members/Pb8uKbwpsJ?icon=discord&label=discord&color=purple
[badge-npm]: https://badgen.net/npm/v/reliverse?icon=npm&color=green&label=%40blefnk%2Freliverse
[link-discord]: https://discord.gg/Pb8uKbwpsJ
[link-npm]: https://npmjs.com/package/reliverse/v/latest
<!-- Посібники проводять користувача через певне завдання, яке він хоче виконати, часто з послідовністю кроків.
Для написання хорошого посібника потрібно подумати про те, що намагаються зробити ваші користувачі.
## Читати далі
- Почитайте [про посібники](https://diataxis.fr/how-to-guides/) у фреймворку Diátaxis -->.
