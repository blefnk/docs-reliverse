---
title: FAQ
description: This is the FAQ of Relivator.
---

**Це не тільки FAQ для Reliverse, але й FAQ для розробників для Next.js та екосистеми React в цілому.**

- **RQ1:** Як увімкнути новий React-компілятор React 19? **RA1:** Будь ласка, перейдіть до файлу `next.config.js` і всередині секції `experimental` знайдіть `reactCompiler` та встановіть йому значення `true`. Додатково рекомендується встановити `bun add -D babel-plugin-react-compiler`. Існують чудові правила ESLint, але вони деінстальовані за замовчуванням, оскільки вмикають Babel/Webpack, що може сповільнити збірку. Якщо ви щойно встановили цей плагін, то відкрийте `eslint.config.js`, знайдіть і розкоментуйте все, що з ним пов'язано (використовуйте `Cmd/Ctrl+F` і шукайте `compiler`).

- **RQ2:** Як забезпечити повне автоматичне виправлення коду? **RA2:** Зверніть увагу, що вам може знадобитися натиснути Cmd/Ctrl+S кілька разів, щоб код був повністю виправлений різними інструментами.

- **RQ3:** Як перевірити стан проекту? **RA3:** Запустіть `bun appts` або `bun turbo:appts` (нестабільні, але інтерактивні та швидші), щоб перевірити стан проекту.

- **RQ4:** Як оновити всі пакунки до останньої версії? **RA4:** Для досвідчених розробників виконайте `bun latest`, щоб оновити всі пакунки до останньої версії. Або скористайтеся командою `bun reli:prepare`, щоб оновити всі залежності і перевірити, чи не потребує код коригувань.

- **RQ5:** Чому я іноді бачу сповіщення `Invalid JSON. JSON5: неприпустимий символ '#'`? **RA5:** Не хвилюйтеся, схоже, у вас встановлено розширення VSCode `thinker.sort-json`, і, схоже, це некоректна помилка, яку видає це розширення. Але ми не рекомендуємо використовувати зовнішні sort-json-подібні розширення, оскільки ми налаштували `eslint-plugin-jsonc`, який вже виконує сортування у більш передбачуваний спосіб. Якщо вам все ще потрібен `thinker.sort-json`, схоже, що він не може сортувати JSON-файли в рідкісних випадкових випадках, але він чудово працює при наступному збереженні файлу (якщо ваш файл не має проблем, звичайно). Якщо ця помилка спричиняє значні проблеми, наприклад, заважає вам додати слово до CSpell, ви можете встановити `ource.fixAll.sort-json` у `editor.codeActionsOnSave` у `.vscode/settings.json` у значення `never`.

- **RQ6:** Що робити, якщо я помітив застарілу інформацію або інші проблеми у файлі README.md або інших файлах? **RA6:** Намагаючись бути якомога кориснішим, цей README містить велику кількість інформації. Деякий текст може бути застарілим і буде оновлюватися по мірі нашого розвитку. Будь ласка, повідомте нас на [сторінці обговорення](https://github.com/blefnk/relivator/discussions/6), якщо ви помітите будь-які дрібні проблеми, такі як застаріла інформація, непрацюючі посилання або граматичні/орфографічні помилки у README.md або інших файлах.

- **RQ6:** Які версії React та Next.js зараз використовує проект? **RA6:** Наразі проект використовує `react@canary`, `react-dom@canary` та `next@canary`. Якщо React 19 та/або Next.js 15 вже повністю випущені, будь ласка, видаліть їх зі скрипта `latest` і виконайте, наприклад, `npx nypm add react@latest react-dom@latest next@latest` в терміналі. Ви можете зробити те саме з будь-якими іншими залежностями rc-alpha-beta-next-canary-dev-experimental-etc, на ваш вибір, якщо їх стабільна версія вже випущена.

- **RQ7:** Де зберігати файли, специфічні для проекту, і як вирішувати проблеми з ESLint? **RA7:** Ви можете використовувати теку `rc/cluster` для зберігання специфічних для проекту файлів. Це спрощує оновлення Relivator до нових версій. Дізнайтеся більше, відвідавши головну сторінку Dashboard у середовищі розробки. Після цього будьте готові побачити багато проблем, на які вказує конфігурація ESLint. Запустіть `bun lint`, щоб застосувати автоматичні виправлення; **виправлення може зайняти деякий час, тому будьте терплячі**. Можливо, вам доведеться запустити `lint` або `lint:eslint` ще раз, якщо деякі проблеми не буде виправлено автоматично. Ви також можете відкрити ці файли вручну і натиснути `Ctrl+S` кілька разів, доки на вкладці «Проблеми» VSCode не буде виявлено жодних проблем. Зазвичай, при використанні CLI проблеми вирішуються на другий або третій запуск. Далі встановіть розширення `Open Multiple Files` у VSCode; клацніть правою кнопкою миші на теці `src/cluster`, виберіть `Open Multiple Files` і натисніть Enter. Виправте всі помилки. Якщо ви дієте інкрементально, ви можете вимкнути певні правила ESLint/Biome (`// eslint-disable-next-line ...`, `// biome-ignore ...` або повністю вимкнути правило у відповідному конфігураторі) або помилки TypeScript (`@ts-expect-error`), хоча це не рекомендується.

- **RQ8:** Чи відбуваються дивні речі при форматуванні коду? Код виглядає одним чином, а наступної секунди він виглядає інакше? Наприклад, ви бачите, що кількість рядків коду збільшується, а потім зменшується одночасно при збереженні файлу? Чи не змінюючи код, Biome сповіщає вас, наприклад, «Виправлено 6 файлів» замість «Виправлення не потрібні», коли ви повторно запускаєте `bun appts`? **RA8:** Вітаємо! Ви зіткнулися з конфліктом між лінтерами або форматерами. По-перше, ми рекомендуємо відкрити файл `.vscode/settings.json`, знайти розділ `eslint.rules.customizations` і змінити значення параметра `severity` з `«off»` на `«info»` (якщо `«off»` присутнє). Встановлення значення `«info»` допоможе вам зрозуміти, що одна з конфліктуючих сторін потенційно є правилом у цьому розділі `eslint.rules.customizations`. Далі ви можете спробувати виправити такі файли, як `eslint.config.js` (наприклад, вимкнути конфліктуюче правило), `biome.json`, `.vscode/settings.json` тощо. Ви також можете спробувати повністю вимкнути форматори Biome або ESLint, встановивши `biome.enabled` або `eslint.enable` (або `eslint.format.enable`) у значенні «false» у файлі `.vscode/settings.json`. А як щодо прикладу «Виправлено 6 файлів»? Це означає, що Biome змінив код у деяких файлах у спосіб, відмінний від ESLint.

- **RQ9:** Що робити, якщо я отримую попередження Бабеля про деоптимізацію генератора коду? **RA9:** Це відома проблема і її можна ігнорувати. Однією з причин є те, що компілятор React ще не повністю підтримується Next.js, він тимчасово дозволяє Babel змусити компілятор працювати. Також, не хвилюйтеся, якщо ви бачите попередження від Clerk, next-auth або інших при запуску `bun run build` (в основному на Windows і Node.js); це нормально, це відома проблема, не пов'язана з Relivator. Також нічого страшного, якщо bun повідомить вам `Issues with peer dependencies found`; ви можете приховати це попередження, відредагувавши `pnpm.overrides` у файлі `package.json`. **P.S.** Ігноруйте помилку `Unexpected value or character.` від Biome, якщо побачите її у файлі `globals.css`. Це помилкова помилка, яку можна приховати, відфільтрувавши `!globals.css` або просто `!**.css` у вкладці Проблеми VSCode (використовуйте там `!**.css, !**/node_modules/**`, якщо розширення Biome VSCode з невідомих причин розбирає node_modules).

- **RQ10:** Чи можна відкрити кілька файлів у VSCode? **RA10:** Ми рекомендуємо використовувати розширення `Open Multiple Files`. Просто клацніть правою кнопкою миші на потрібній теці, наприклад, `src`, і виберіть «Відкрити декілька файлів».

- **RQ11:** У мене дивна вимога `Кожен дочірній елемент у списку повинен мати унікальний реквізит`ключ`. Порадьте, як це зробити? **RA11:** Якщо під цією помилкою ви бачите щось на кшталт`at meta / at head`або <locals>, але фабрика модулів недоступна. Можливо, його було видалено під час оновлення HMR.`, спершу спробуйте вимкнути`experimental.instrumentationHook`, якщо він у вас є, у`next.config.js`. Ви також можете спробувати видалити папку`.next`. Будь ласка, зв'яжіться з нами, якщо проблема не зникне.

- **RQ12:** Million Lint повідомляє про помилку імпорту: '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED' не експортується з 'react' (імпортується як 'L').` під час A12#12 Що мені робити? **Найпростіше рішення - скопіювати шлях до файлу компонента, який з'являється під час цієї помилки, і додати його до `filter.exclude` у файлі `next.config.js`. Загалом, ключовим словом є`use`. Натисніть на шлях до компонента під цією помилкою. Схоже, Million перерахував не всі можливі зовнішні`useSomething`. Багато хуків`useSomething` працюють нормально, але деякі можуть викликати проблеми. Ця помилка також з'являється, якщо ви використовуєте `«use client»;`, але не використовуєте жодних специфічних для клієнта можливостей. У цьому випадку видаліть цю директиву. Крім того, Million.js іноді не розпізнає інструкцію`import * as React з «react»;` - тому вам потрібно видалити її і явно імпортувати кожен хук React, тип тощо. З цієї причини цей рядок було видалено з понад 80 файлів у Relivator v1.2.6.

- **RQ13:** Чому в терміналі з'являється попередження, що містить повідомлення `terminating connection due to immediate shutdown command`? **RA13:** Це попередження з'являється тому, що такі провайдери, як Neon, від'єднують користувачів від `localhost`, якщо вони неактивні протягом приблизно 5 хвилин. Просто оновіть сторінку, щоб відновити з'єднання.

- **RQ14:** Як видалити невикористані ключі з файлів JSON? **RA14:** Встановіть розширення VSCode `i18n Ally`, відкрийте його вкладку, натисніть на оновлення у «звіті про використання», клацніть правою кнопкою миші на знайдених невикористаних ключах і виберіть видалити.

- **RQ15:** Як надати права адміністратора собі або іншому користувачеві? **RA15:** Запустіть `bun db:studio`, перейдіть до таблиці `${databasePrefix}_user` і встановіть `role: admin` для потрібного користувача. В майбутньому, якщо у вас є права адміністратора, ви зможете змінювати привілеї користувача безпосередньо зі сторінки адміністратора фронтенду.

- **RQ16:** Що означає змінна середовища `DEMO_NOTES_ENABLED`? **RA16:** Не використовуйте її. Вона використовується лише на офіційному [демонстраційному веб-сайті Relivator](https://relivator.com) для демонстрації певних можливостей, які не потрібні у реальних програмах.

- **RQ17:** Я використовую PlanetScale як постачальника баз даних. Після перерви в роботі над проектом я зіткнувся з помилкою «не вдається підключитися до гілки». Як я можу її виправити? **UA17:** Перейдіть на інформаційну панель PlanetScale і натисніть на кнопку «прокинутися». Будь ласка, зв'яжіться з нами, якщо база даних не заснула, а проблема не зникла.

- **RQ18:** У мене виникають помилки збірки/виконання, які вказують на те, що утиліти Node.js, такі як `net`, `tls`, `perf_hooks` та `fs` не знайдено. Що мені слід зробити? **RA18:** Не встановлюйте ці утиліти; це не вирішить проблему. Пам'ятайте, що ніколи не зберігайте у теці `utils` код, який *може виконуватися лише на сервері*. Інакше ви зіткнетеся з аномаліями під час збирання проекту. Наприклад, помилки на кшталт `node:` і `file:` не знайдено, або не знайдено пакунки `fs`, `crypto` тощо. Хочете побачити помилку на власні очі? Перемістіть файл `src/server/react.ts` в `src/utils`, імпортуйте його в цей файл, запустіть `bun run build`, злякайтеся, зніміть імпорт і поверніть файл на місце. Ви можете знайти в інтернеті рішення, що пропонують додавати конфігурації типу `«node»: { «net»: «empty», “tls”: «empty», “perf_hooks”: «empty», “fs”: «empty« }` або `»browser": { «net»: false, «tls»: false, «perf_hooks»: false, «fs»: false }` в `package.json` або в конфігурацію webpack, але це може вам не допомогти. **Основна проблема, ймовірно, полягає в наступному:** Ви запустили код на стороні клієнта. Наприклад, у вас може бути файл хука в папці `utils` з відповідним хуком React `useEffect`. Для налагодження спробуйте скористатися функцією глобального пошуку в IDE. Зверніть увагу, що коментування рядків може бути не найшвидшим рішенням у цьому випадку, на відміну від інших сценаріїв налагодження.

- **RQ19:** Я люблю всілякі цікаві штуки! Чи можете ви порекомендувати якісь круті розширення для VSCode? **RA19:** Звичайно! Просто замініть поточний код у `.vscode/extensions.json` на код з `addons/scripts/reliverse/presets/vscode/[default|minimal|ultimate]/extensions.json`. Пам'ятайте, що можливі проблеми з продуктивністю, тому ви можете просто встановити те, що вам потрібно. Крім того, ви можете просто виконати команду `bun reli:vscode` для швидкого перемикання і скористатися `Cmd/Ctrl+Shift+P` ➞ `>Розширення: Показати рекомендовані розширення`.

  Найкращий спосіб встановити цей список розширень, які є у `ультимативному` попередньому налаштуванні (хоча ми рекомендуємо `за замовчуванням`), це відкрити теку проекту у VSCode. Потім встановіть їх, натиснувши `Ctrl+Shift+P` (або просто `F1`) і набравши `>Extensions: Показати рекомендовані розширення». Натисніть на піктограму хмари (`Install Workspace Recommended Extensions`). Дочекайтеся завершення. Натисніть`File > Exit` (це збереже всі ваші відкриті вікна). Знову відкрийте VSCode, і ви готові до роботи. Конфігурацію для цих розширень вже підготовлено для вас. Ви можете дізнатися більше про ці розширення, які міститься у `ультимативному` пресеті, на відповідних сторінках.

  *І пам'ятайте! Якщо у вас щось зламалося, ви завжди можете знайти вміст файлів за замовчуванням папки `.vscode` у папці `.vscode/presets/default`.*

  <details>
    <summary>[Розкрити спойлер]</summary>

  Цей список може бути застарілим і буде оновлений у Relivator v1.3.x.

  1. [aaron-bond.better-comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
  2. [adpyke.codesnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
  3. [astro-build.houston](https://marketplace.visualstudio.com/items?itemName=astro-build.houston)
  4. [biomejs.biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
  5. [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) // tw v3 == release version | tw v4 == pre-release version
  6. [chunsen.bracket-select](https://marketplace.visualstudio.com/items?itemName=chunsen.bracket-select)
  7. [davidanson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint)
  8. [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  9. [evondev.indent-rainbow-palettes](https://marketplace.visualstudio.com/items?itemName=evondev.indent-rainbow-palettes)
  10. [fabiospampinato.vscode-open-multiple-files](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-multiple-files)
  11. [github.copilot-chat](https://marketplace.visualstudio.com/items?itemName=github.copilot-chat)
  12. [github.github-vscode-theme](https://marketplace.visualstudio.com/items?itemName=github.github-vscode-theme)
  13. [lokalise.i18n-ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)
  14. [mattpocock.ts-error-translator](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator)
  15. [mikekscholz.pop-icon-theme](https://marketplace.visualstudio.com/items?itemName=mikekscholz.pop-icon-theme)
  16. [mylesmurphy.prettify-ts](https://marketplace.visualstudio.com/items?itemName=mylesmurphy.prettify-ts)
  17. [neptunedesign.vs-sequential-number](https://marketplace.visualstudio.com/items?itemName=neptunedesign.vs-sequential-number)
  18. [oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
  19. [streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  20. [unifiedjs.vscode-mdx](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
  21. [usernamehw.errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
  22. [usernamehw.remove-empty-lines](https://marketplace.visualstudio.com/items?itemName=usernamehw.remove-empty-lines)
  23. [yoavbls.pretty-ts-errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
  24. [yzhang.markdown-all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  25. [zardoy.ts-essential-plugins](https://marketplace.visualstudio.com/items?itemName=zardoy.ts-essential-plugins)

  **Зауваження щодо розширення «TypeScript Essential Plugins »**: Ви можете налаштувати параметри розширення, відкривши інтерфейс налаштувань VSCode і знайшовши там `@ext:zardoy.ts-essential-plugins`. Цитата з [VSCode Extension Repository](https://github.com/zardoy/typescript-vscode-plugins#readme): «Повнофункціональний плагін TypeScript, який покращує кожну вбудовану функцію, таку як завершення, визначення, посилання тощо, а також додає нові функції для знищення TypeScript, щоб ви могли швидше працювати з великими кодовими базами! Ми зробили доповнення більш інформативними. Визначення, посилання (а іноді і завершення) - менш шумними. І, нарешті, наша головна мета - забезпечити максимально зручний досвід роботи з TypeScript для функцій IDE».

  </details>

- **RQ20:** *[Пов'язане з попереднім запитанням]* Як я можу покращити свій візуальний досвід роботи з VSCode? **RA20:** Проект вже має добре налаштований файл `.vscode/settings.json`, але ми рекомендуємо використовувати наші власні пресети конфігурацій. Ви можете встановити `default` або `ultimate` (рекомендується `default`). **Щоб активувати пресет виконайте `bun reli:vscode`.** Для пресету `ultimate` не забудьте встановити необхідні речі: статичні, тобто не змінні, версії [JetBrains Mono](https://jetbrains.com/lp/mono) (рекомендується) та/або [Geist Mono](https://vercel.com/font) та/або [Monaspace](https://monaspace.githubnext.com) (невелика ручна конфігурація не потрібна або може знадобитися, якщо ви не хочете використовувати `JetBrains Mono` на `ultimate` пресеті). Далі, для `ultimate`, встановіть рекомендоване розширення `pop-icon-theme` пакунка піктограм VSCode. Нарешті, обов'язково встановіть розширення з `Q19`, зокрема, встановіть рекомендовані нами теми `GitHub Light` та `Houston` (від розробників Astro). Зверніть увагу, що після встановлення теми Houston ви знайдете нову відповідну вкладку на бічній панелі (🧑‍🚀 - це ваш новий друг, який реагує на проблеми з кодом!), ви, звичайно, можете видалити цю вкладку, клацнувши правою кнопкою миші, але ми рекомендуємо просто перетягнути цю панель в нижню частину вкладки Папки.

  - TODO: Виправити «Geist Mono» і «Monaspace Argon Var», які виглядають так, ніби використовують варіацію Medium/Bold замість Regular (`«editor.fontWeight»: «normal»` тут не допомагає). 'JetBrains Mono' працює чудово.*
  - TODO: Чи дійсно нам потрібно дублювати шрифти для кожної речі?* 🤔

<!--
  - **RQ??:** [Пов'язано з попереднім запитанням] Чому ви змінили поведінку клавіш `Cmd/Ctrl` та `alt/opt`?
    **RA??:** Зверніть увагу, що вам може знадобитися натиснути Cmd/Ctrl+S кілька разів, щоб код було повністю виправлено різними інструментами.
-->

<!--
  - **RQ??:** [Relivator 1.3.0] Як покращити роботу з розширенням CSpell (Code Spell Checker)?
    **RA??:** Встановіть [Розширення CSpell VSCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), встановіть пакунок CSpell npm як залежність dev, якщо його не встановлено (перевірте ваш `package. json` файл), встановіть необхідні пакунки за допомогою вашого менеджера пакетів (за допомогою `npx nypm add -D @cspell/dict-companies @cspell/dict-de-de @cspell/dict-es-es @cspell/dict-fr- fr @cspell/dict-fullstack @cspell/dict-it-it @cspell/dict-markdown @cspell/dict-npm @cspell/dict-pl_pl @cspell/dict-tr-tr @cspell/dict-typescript @cspell/dict-uk-ua cspell`), і додайте ці рядки до файлу `cspell. json`:

    ```json
    {
      «import": [
        «@cspell/dict-typescript/cspell-ext.json»,
        «@cspell/dict-companies/cspell-ext.json»,
        «@cspell/dict-fullstack/cspell-ext.json»,
        «@cspell/dict-markdown/cspell-ext.json»,
        «@cspell/dict-npm/cspell-ext.json»,
        «@cspell/dict-de-de/cspell-ext.json»,
        «@cspell/dict-es-es/cspell-ext.json»,
        «@cspell/dict-fr-fr/cspell-ext.json»,
        «@cspell/dict-it-it/cspell-ext.json»,
        «@cspell/dict-pl_pl/cspell-ext.json»,
        «@cspell/dict-tr-tr/cspell-ext.json»,
        «@cspell/dict-uk-ua/cspell-ext.json»
      ]
    }
    ```
-->

- **RQ21:** Як перемкнути менеджер пакунків з `pnpm` на bun , yarn або npm? **RA21:** Ось варіант `скриптів` для `bun`, але ми його не надто тестували. Налаштування скриптів для інших менеджерів пакунків постачається з Relivator 1.3.0. Просто замініть його у `package.json` (і переконайтеся, що нічого не пропустили).

  <details>
    <summary>[Показати спойлер]</summary>

  Просто знайдіть і видаліть ключ `packageManager`, якщо він присутній, а потім замініть лише ці конкретні рядки на альтернативи bun:

  ```json
  {
    «scripts": {
      «check:compiler": «bunx react-compiler-healthcheck@latest»,
      «fix:codemod-next-community": «bunx @next/codemod --dry --print»,
      «fix:codemod-react": «bunx codemod react/19/replace-use-form-state --target src»,
      «install:global": «bun add -g vercel@latest codemod@latest eslint_d@latest»,
      «latest:all": «bun update --latest»,
      «putout:dont-run-manually": «bun lint:putout . --fix»,
      «reli:prepare": «bun install && bun latest && bun appts»,
      «rm:other": «bun fse remove .million && bun fse remove .eslintcache && bun fse remove tsconfig.tsbuildinfo»
    }
  }
  ```

  </details> </details

  Після заміни скриптів відкрийте теку проекту і закрийте VSCode. Видаліть файли `node_modules` та `pnpm-lock.yaml`. Відкрийте проект у терміналі і виконайте `npx nypm install`. Після цього ви можете знову відкрити VSCode. Усе готово!

- **RQ22:** Я застосував у VSCode попередні налаштування `default`/`ultimate`, і тепер моя IDE повільно працює при збереженні файлу. **RA22:** Перейдіть до комбінацій клавіш у VSCode, встановіть `Зберегти без форматування` на `Ctrl+S` (`Cmd+S`), а `Файл: Зберегти` на `Ctrl+Shift+S` (`Cmd+Shift+S`). Не хвилюйтеся, що код може бути безладним при збереженні без форматування. Просто запустіть bun apps і все буде покращено і відформатовано. Будь ласка, користуйтеся! P.S. Ви також можете прочитати статтю VSCode [Проблеми продуктивності](<https://github.com/microsoft/vscode/wiki/Performance-Issues>).

  <details>
    <summary>[Згорнути спойлер]</summary></summary

  **keybindings.json** (`F1`->`>Параметри: Відкрити комбінації клавіш (JSON)`):

  ```json
  [{
    «command": «workbench.action.files.save»,
    «key": «ctrl+shift+s»
  }, {
    «command": «workbench.action.files.saveWithoutFormatting»,
    «key": «ctrl+s»
  }, {
    «command": «workbench.action.nextEditor»,
    «key": «ctrl+tab»
  }, {
    «command": «workbench.action.previousEditor»,
    «key": «ctrl+shift+tab»
  }]
  ```

  </details> </details

- **RQ23:** Що робить index.ts у теках server та utils? **RA23:** Вони називаються файлами-бочонками. Ви можете зробити імпорт зручнішим у вашому проекті, використовуючи бочковий підхід. Для цього використовуйте файли index.ts для реекспорту елементів з інших файлів. Зверніть увагу: код, який може виконуватися тільки на сервері, зберігайте в папці сервера. Код, який може виконуватися як на сервері, так і на клієнтській стороні, слід зберігати у теці utils. Relivator 1.2.6 наразі порушує цей опис, тому ми маємо виправити це в v1.3.0. Зазвичай, серверні функції мають вигляд getDoSomething. Крім того, не імпортуйте код з папки сервера в .tsx файли, які використовують хуки React (useHookName), за винятком випадків, коли компонент має useTransition або подібний, що дозволяє виконати дію сервера з клієнтського компонента.

- **RQ24:** Чому я бачу console.[log|info|warn|error|...] тільки в консолі браузера, а не в терміналі, з якого було запущено додаток? **RA24:** Якщо я (@blefnk) правильно дослідив, це тому, що ви викликаєте console() у клієнтському компоненті (який має директиву «use client» у верхній частині файлу або використовує React-хуки). Схоже, що термінал працює як серверне середовище. Спробуйте викликати console() у файлі, який не має цієї директиви та хуків. Або просто використовуйте тости, які добре працюють як на стороні клієнта, так і на стороні сервера.

- **RQ25:** Я отримую дивні помилки розширення VSCode, що мені робити? **RA25:** Не хвилюйтеся, це просто аномалії редактора. **Просто перезапустіть VSCode, і все буде гаразд.** Іноді, через недостатню кількість оперативної пам'яті, внутрішні збої розширення або інші причини, певне розширення може вийти з ладу. Особливо аномальним є повідомлення від TypeScript ESLint про те, що він може мати не більше 8 вхідних файлів (ми спробуємо виправити це у версії 1.3.0). Або Biome може почати лінтувати `node_modules` з якихось причин, що також є дивним для нас; наші спроби виправити це поки що не увінчалися успіхом, але ми спробуємо ще раз у 13.0. Крім того, аварійне завершення розширення може статися, якщо ви просто використали `bun reli:setup` і не перезапустили редактор. Або якщо ви вручну відредагували конфігураційний файл і, оскільки було увімкнено автозбереження, редактор встиг надіслати конфігурацію з синтаксичними помилками до розширення, що призвело до аварійного завершення роботи. Отже, перезапустіть VSCode, і все буде виправлено! Якщо це не допомогло, перевірте, чи немає проблем у ваших конфігураційних файлах.

- **RQ26:** Як змінити положення панелі VSCode? **RA26:** Просто клацніть правою кнопкою миші на панелі, виберіть «Положення панелі» і виберіть потрібне положення, наприклад, «Внизу».

- **RQ27:** У мене є правильні дані (ключ-значення), вказані у файлі `.env`, але певна бібліотека, наприклад, Clerk, не бачить цих даних або бачить застарілі дані. Що я можу зробити? **RA27:** Найпростішим рішенням є перейменування теки вашого проекту, запуск `bun install` і перевірка, чи проблему вирішено. Якщо ні, зверніться до служби технічної підтримки та спільноти відповідної бібліотеки.

- **RQ28:** Як налаштувати `pnpm` або `bun` (як менеджер пакунків) для моїх потреб? **RA28:** Ви можете відвідати [цю сторінку `pnpm`](https://pnpm.io/package_json) або [цю сторінку `bun`](<https://bun> .sh/docs/runtime/bun fig#package-manager) в офіційних документах, щоб дізнатися більше.

**RQ29:** Чи слід модифікувати компоненти за допомогою [shadcn/ui](https://ui.shadcn.com) (починаючи з Relivator 1.2.6, їх розташовано у теці `addons/components/ui`)? **RA29:** Ви можете втратити ваші зміни, якщо @shadcn або [Reliverse](https://github.com/orgs/reliverse/repositories) оновить будь-який з цих компонентів у випуску Relivator 1.3.x+. Тому наразі найкращим варіантом є використання, наприклад, теки `addons/cluster/reliverse/shadcn/ui`, де ви можете зберігати файли, якими ви можете безпечно перезаписати оригінальні файли, гарантуючи, що ви не втратите ваші зміни. Наприклад, у цій теці вже міститься файл `cluster-readme.tsx`, який лише реекспортує оригінальний файл `button.tsx`. Отже, ви можете створити файл `button.tsx` тут і скопіювати і вставити цей рядок у ваш новостворений файл. Крім того, ви можете продублювати код з оригінального файлу і внести будь-які зміни, які вам потрібні. Використовуйте `Cmd/Ctrl+Shift+H` і просто замініть `addons/components/ui` на `addons/cluster/reliverse/shadcn/ui` (різниця лише у словах `browser` і `cluster`). Тека `addons/cluster` - це ваш дім; ви можете робити тут все, що завгодно, розвалювати його або прибирати, як вам заманеться. Це ваш власний дім, і ніхто не має права забрати його у вас.

- **RQ30:** Яка команда дозволяє легко керувати встановленням залежностей у проекті? **RA30:** `bun deps:install`. Однак, перш ніж запускати цей скрипт, вам слід вручну встановити все необхідне:

  - npx nypm add typescript tsx nypm @mnrendra/read-package @clack/prompts
  - npx nypm add fs-extra pathe fast-npm-meta semver @types/semver redrun axios
  - bun |yarn|bunx jsr add @reliverse/core (або: npx jsr add @reliverse/core)

- **RQ31:** Я помітив файл [Turborepo](https://turbo.build) з назвою `turbo.disabled.json. Як я можу увімкнути`turbo`? **RA31:** Просто видаліть`.disabled` з назви файлу. Ви також можете додати `«scripts»` з файлу `turbo.scripts.json` до файлу `package.json` (якщо їх там ще немає).

- **RQ32:** Де я можу дізнатися більше про Relivator та Reliverse? **RA32:** Прочитайте поточний файл README.md, щоб дізнатися більше про кожен конкретний аспект проекту. Ви також можете знайти більше інформації на сервері проекту [Discord](https://discord.gg/Pb8uKbwpsJ) та на сторінці [GitHub Issues](https://github.com/blefnk/relivator/issues).
