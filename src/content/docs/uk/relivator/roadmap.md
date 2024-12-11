---
title: Relivator's ROADMAP.md
description: Key features and improvements planned for the Relivator Next.js template and the Reliverse CLI.
---

## Дорожня карта Relivator та Reliverse

[![Приєднатися до сервера Reliverse та Relivator Discord](https://discordapp.com/api/guilds/1075533942096150598/widget.png?style=banner2)][badge-discord]
*Наведена нижче дорожня карта може бути застарілою. Ми повністю оновимо цей файл README.md зі стабільними випусками Reliverse 1.0.0 та Relivator 1.3.0.*.
*Наведена нижче дорожня карта описує ключові функції та покращення, заплановані для цього початкового Reliverse Next.js та Reliverse CLI. Елементи, які не позначені, можуть бути вже налаштовані, але не були ретельно протестовані. Якщо ви помітили будь-які проблеми, будь ласка, створіть проблему*.

- [x] 1. Збирайте на основі [Next.js 15](https://nextjs.org) [App Router](https://nextjs.org/docs/app) та [Route Handlers](https://nextjs.org/docs/app/building-the-application/routing/route-handlers), з підтримкою [Million Lint](https://million.dev) та [Turbopack](https://turbo.build/pack) (з додатковим [Turborepo v2](https://turbo.build/blog/turbo-2-0) для швидшої збірки). Використовуйте [React 19](https://react.dev) (з новим [React Compiler](https://react.dev/learn/react-compiler) та [eslint-plugin-react-compiler](https://react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler)), [TailwindCSS](https://tailwindcss.com) та [TypeScript 5](https://typescriptlang.org) як основні технології.
- [x] 2. Реалізувати [Drizzle ORM](https://orm.drizzle.team) для підтримки **баз даних  MySQL та PostgreSQL** та інтегрувати з сервісами [Neon](https://neon.tech), [Railway](https://railway.app?referralCode=sATgpf), [PlanetScale](https://planetscale.com) та [Vercel](https://vercel.com).
- [x] 3. Налаштуйте `next.config.js` з i18n, MDX, з підтримкою [Million.js Compiler & Million Lint](https://million.dev/blog/lint-rc). Увімкніть ці круті експерименти: after, forceSwcTransforms, instrumentationHook (вимкнено за замовчуванням), mdxRs, optimisticClientCache, [optimizePackageImports](https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports), optimizeServerReact, [ppr (Partial Prerendering)](https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering), reactCompiler (вимкнено за замовчуванням), serverMinification, turbo.
- [x] 4. Прагніть до ретельної документації та дружнього до початківців підходу протягом усього проекту.
- [x] 5. Налаштувати та прокоментувати `middleware.ts` для i18n та next-auth.
- [x] 6. Налаштування системи Content-Security-Policy (CSP) для запобігання XSS-атакам (за замовчуванням вимкнено).
- [x] 7. Налаштуйте параметри VSCode та рекомендовані розширення (встановіть `«extensions.ignoreRecommendations»` у значення `true`, якщо ви не хочете бачити рекомендації).
- [x] 8. Оптимізуйте [Next.js Metadata API](https://nextjs.org/docs/app/building-the-application/optimizing/metadata) для SEO, інтегрувавши обробники файлової системи.
- [x] 9. Інтегрувати індикатор розміру екрану TailwindCSS для локальних запусків проекту.
- [x] 10. Реалізувати широку інтернаціоналізацію на 11 мовах (англійська, німецька, іспанська, перська, французька, хінді, італійська, польська, турецька, українська, китайська) за допомогою бібліотеки [next-intl](https://next-intl-docs.vercel.app), яка працює як на сервері, так і на клієнті, та включити підтримку `next dev --turbo`.
- [x] 11. Реалізувати автентифікацію за допомогою **як [Clerk](https://clerk.com), так і [Auth.js (next-auth@beta/NextAuth.js)](https://authjs.dev)**.
- [x] 12. Реалізувати [tRPC](https://trpc.io) та [TanStack Query](https://tanstack.com/query) (з [React Normy](https://github.com/klis87/normy#readme)) для розширеної вибірки даних з сервера та клієнта.
- [x] 13. Створити систему підписки та оплати за допомогою [Stripe](https://github.com/stripe/stripe-node#readme).
- [x] 14. Забезпечити перевірку безпеки типів для схем проекту та полів інтерфейсу за допомогою бібліотеки [zod](https://zod.dev).
- [x] 15. Використовуйте [ESLint v9](https://eslint.org) з [TypeScript-ESLint v8](https://typescript-eslint.io) і налаштуйте `eslint.config.js` (**Налагодження може зайняти деякий час, тому будьте терплячі**) для роботи як з [Biome](https://biomejs.dev) ~~, так і з [Prettier](https://prettier.io) (включно з плагіном Sort Imports Prettier)~~ для отримання читабельного, чистого і безпечного коду. **Наразі недоступно | ЗАВДАННЯ:** скористайтеся `pnpm ui:eslint`, щоб відкрити інструмент інтерфейсу [ESLint Flat Config Viewer](https://github.com/antfu/eslint-flat-config-viewer#eslint-flat-config-viewer). **Примітка:** Починаючи з Relivator 1.3.0 Prettier можна додати вручну за допомогою команди `reliverse` (прочитайте [оголошення](https://github.com/blefnk/relivator-nextjs-starter/issues/36)).
- [x] 16. Елегантно реалізовано систему шрифтів, використовуючи [Inter](https://rsms.me/inter) та додаткові шрифти.
- [x] 17. Розробити вітрину магазину з функціоналом товарів, категорій та підкатегорій.
- [x] 18. Розробити сучасний, чітко скомпонований інтерфейс користувача, використовуючи [Radix](https://radix-ui.com), з привабливими компонентами інтерфейсу з [shadcn/ui](https://ui.shadcn.com).
- [x] 19. Скласти вичерпний, зручний для початківців `README.md`, включно з описами [змінних середовища](https://nextjs.org/docs/basic-features/environment-variables).
- [ ] 20. Реалізувати функціональність блогу за допомогою файлів MDX.
- [ ] 21. Використовувати абсолютні шляхи скрізь, де вони застосовуються в проекті. Проект має передбачувану та послідовну логіку імпорту, без зайвого використання речей на кшталт `import * as React`.
- [ ] 22. Використовуйте [Kysely](https://kysely.dev) з Drizzle для досягнення повної типової безпеки конструктора SQL-запитів TypeScript.
- [ ] 23. Перекладіть README.md та пов'язані файли іншими мовами.
- [ ] 24. Перетворитися з простого магазину електронної комерції на універсальний засіб для створення веб-сайтів.
- [ ] 25. Привести до ладу `package.json` з правильно встановленими і впорядковано відсортованими пакунками у `dependencies` і `devDependencies`.
- [ ] 26. Автору проекту слід опублікувати серію детальних відео про те, як користуватися цим проектом. Також мають знайтися ентузіасти, готові опублікувати власні відео про проект на своїх ресурсах.
- [ ] 27. Максимально зменшити кількість пакунків проекту, конфігураційних файлів тощо.
- [ ] 28. Зменшити вкладеність HTML-тегів та забезпечити коректне використання HTML-тегів, коли це можливо.
- [ ] 29. Надавайте пріоритет доступності в усьому, як для користувачів програми UI (User Interface) і UX (User Experience), так і для розробників DX (Developer Experience). Підтримуйте юзабіліті без шкоди для естетики.
- [ ] 30. Надавайте перевагу використанню [const-arrow](https://freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26) та [type](https://million.dev/docs/manual-mode/block) над [function](https://freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions) та [interface](https://totaltypescript.com/type-vs-interface-which-should-you-use), де це можливо, і навпаки, де це можливо, відповідно, з використанням корисного плагіна ESLint [arrow-functions](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions#readme), щоб підтримувати читабельний і чистий код, дотримуючись конкретних [рекомендацій](https://youtu.be/nuML9SmdbJ4) для [функціонального програмування](https://toptal.com/javascript/functional-programming-javascript).
- [ ] 31. Оптимізуйте всі елементи програми для покращення швидкості холодного запуску та збірки.
- [ ] 32. Перемістіть кожну пов'язану систему у спеціальну папку (у папку `src/core`), щоб будь-яку систему можна було легко видалити з проекту за потреби.
- [ ] 33. Перенести стилі компонентів у файли .css або .scss, або використовувати пакети, які надають «синтаксичний цукор» для стилів у файлах .tsx за допомогою бібліотеки CSS [tokenami](https://github.com/tokenami/tokenami#readme). Реалізуйте можливість впровадження [Figma Tokens System](https://blog.devgenius.io/link-figma-and-react-using-figma-tokens-89e6cc874b4d) для безперешкодної роботи з проектом. Порада: перейдіть до пункту #90 цієї дорожньої карти, щоб дізнатися більше про нові способи використання CSS в JS.
- [ ] 34. Перехід на Auth.js (next-auth@beta/NextAuth.js)' [next-auth@beta](https://npmjs.com/package/next-auth?activeTab=versions) ([обговорення](https://github.com/nextauthjs/next-auth/releases/tag/next-auth%405.0.0-beta.4)) і на [React 19](https://19.react.dev/blog/2024/04/25/react-19).
- [ ] 35. Керуйте перевіркою електронної пошти, підпискою на розсилки та email-маркетингом за допомогою [Resend](https://resend.com) та [React Email](https://react.email).
- [ ] 36. Переконайтеся, що кожна сторінка та проміжне програмне забезпечення мають зелений або жовтий, але не червоний колір після збірки в терміналі розробки.
- [ ] 37. Зробіть кожну змінну оточення необов'язковою, що дозволить додатку працювати без будь-яких налаштувань, просто опускаючи певні ділянки коду за необхідності.
- [ ] 38. Підтримуйте проект на найкращому можливому шляху написання хорошого і чистого коду, дотримуючись таких рекомендацій, як [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/react) / [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react). Використовуйте `??` (нульове об'єднання) всюди замість `||` (логічне АБО) (якщо немає вагомих причин використовувати його в конкретних випадках) - [чому ми повинні використовувати нульове об'єднання](<https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or>); (Чи є якесь правило/плагін ESLint для цього?).
- [ ] 39. Зберігайте проект вільним від таких речей, як `@ts-expect-error`, `eslint-disable`, `biome-ignore` та інших, пов'язаних з не дуже безпечними речами.
- [ ] 40. Зменшити кількість файлів cookie до мінімуму, підготуватися до майбутнього без файлів cookie, впровадити управління файлами cookie та сповіщення.
- [ ] 41. Впровадити систему коментарів до продуктів, включаючи типи «Відгук» та «Питання».
- [ ] 42. Інтегруйте цінні речі з [Next.js' Examples](https://github.com/vercel/next.js/tree/canary/examples) в цей проект.
- [ ] 43. Інтегруйте цінні ідеї з [Next.js Weekly](https://nextjsweekly.com/issues) в цей стартап.
- [ ] 44. Реалізувати типо-безпечну підтримку [GraphQL](https://hygraph.com/learn/graphql) за допомогою фреймворку [Fuse.js](https://fusejs.org).
- [ ] 45. Реалізувати найкраще з [Payload CMS](https://github.com/payloadcms/payload) з покращеннями Relivator.
- [ ] 46. Реалізувати підтримку Storybook 8.x (прочитайте анонс «[Storybook for React Server Components](https://storybook.js.org/blog/storybook-react-server-components)»).
- [ ] 47. Реалізувати розумну та уніфіковану систему журналювання, як для розробки, так і для виробництва, як для консолі, так і для запису у певні файли.
- [ ] 48. Реалізувати Sentry для обробки помилок та звітів CSP для програми.
- [ ] 49. Реалізувати Relivator's/Reliverse власну версію [Saas UI](https://saas-ui.dev) для повної сумісності з нашим проектом з лише необхідною функціональністю, з використанням Tailwind та Shadcn замість Chakra.
- [ ] 50. Реалізувати наш власний форк бібліотеки [Radix Themes](https://radix-ui.com) з налаштуванням `<main>` як обгортки замість поточного `<section>`; АБО реалізувати наше власне рішення, яке генерує Tailwind замість класів Radix.
- [ ] 51. Реалізувати повну підтримку [Million.js](https://million.dev) (прочитайте [Million 3.0 Announcement](https://million.dev/blog/million-3), щоб дізнатися більше).
- [ ] 52. Реалізувати завантаження файлів за допомогою [UploadThing](https://uploadthing.com) та [Cloudinary](https://cloudinary.com) (ПРИМІТКА: «res.cloudinary.com» та «utfs.io» слід додати до `nextConfig.images.remotePatterns`).
- [ ] 53. Реалізувати динамічне перемикання між функціями програми, наприклад, провайдером баз даних, зробивши відповідні перевірки змінних оточення.
- [ ] 54. Реалізувати документацію до проекту та перенести кожне пояснення з коду у цю документацію.
- [ ] 55. Реалізувати глибоку сумісність функцій та легку міграцію з Reliverse.
- [ ] 56. Реалізувати можливості співпраці за допомогою таких речей, як [liveblocks](https://liveblocks.io).
- [ ] 57. Реалізувати CLI для швидкого отримання Relivator лише з вибраними опціями; спробуйте використати [Charm](https://charm.sh) для створення Reliverse CLI.
- [ ] 58. Реалізуйте функції штучного інтелекту, подібні до функцій чату GPT, за допомогою [Vercel AI SDK](https://sdk.vercel.ai/docs) (див.: [Представлення Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk)).
- [ ] 59. Реалізувати просунуте перемикання тем без перезавантаження, використовуючи Tailwind Dark Mode з підтримкою [React Server Side support](https://michaelangelo.io/blog/darkmode-rsc) та динамічні файли cookie.
- [ ] 60. Реалізовано тестування [Jest](https://jestjs.io), оптимізоване для Next.js.
- [ ] 61. Гарантувати, що кожна можлива сторінка буде обгорнута за допомогою попередньо визначених обгорток оболонки.
- [ ] 62. Щедро пишіть коментарі, тільки якщо вони дійсно потрібні. Перепишіть весь код таким чином, щоб усунути необхідність описувати код у коментарях (докладніше про це читайте у книзі Роберта Сесіла Мартіна «Чистий код»). Розгляньте можливість використання блочного коментаря `/** */` тільки у файлах `.mjs` та `.js`.
- [ ] 63. Повністю розробити просунуті сторінки реєстрації та входу, інтегруючи як соціальні мережі, так і класичні методи форм.
- [ ] 64. Дотримуйтесь найкращих практик зі статей та відео, таких як «[10 React-антипаттернів, яких слід уникати](<https://youtube.com/watch?v=b0IZo2Aho9Y)»> (також перевірте їхній розділ коментарів).
- [ ] 65. Дотримуйтесь рекомендацій з [Material Design 3](https://m3.material.io) та інших систем дизайну, коли це доречно.
- [ ] 66. Встановіть, задокументуйте і дотримуйтеся угод, таких як підтримка єдиного стилю регістру імен для файлів і змінних.
- [ ] 67. Створити всеосяжний i18n, використовуючи коди країни та місцевості, і підтримувати ще більше мов. Переконайтеся, що носії мови перевіряють кожну мову після машинного перекладу. Розгляньте можливість використання бібліотеки [next-international](https://github.com/QuiiBz/next-international).
- [ ] 68. Забезпечити максимальну безпеку типів, використовуючи суворий режим у [TypeScript](https://typescriptlang.org), включаючи рекомендації [«Робити і не робити»](https://typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) (без використання [небезпечних тверджень про тип](https://youtube.com/watch?v=K9pMxqb5IAk) і з [необов'язковим коректним використанням типів](https://youtube.com/watch?v=qy6IBZggXSQ), також використовуючи `pnpm typestat` - після запуску [TypeStat](https://github.com/JoshuaKGoldberg/TypeStat) почне автоматичне виправлення типізації TS); а також забезпечити безпеку типів за допомогою typedRoutes, zod, проміжного ПЗ, тощо).
- [ ] 69. Переконайтеся, що у проекті немає невикористовуваних елементів, таких як пакунки, бібліотеки та змінні. Також переконайтеся, що код проекту відповідає принципам [Never Nester principles](<https://youtube.com/watch?v=CFRhGnuXG-4>). Тому що, як колись сказав Лінус Торвальдс, *Якщо вам потрібно більше 3 рівнів відступів, ви в будь-якому випадку облажалися і повинні виправити програму*.
- [ ] 70. Переконайтеся, що проект має повну підтримку бібліотеки [GSAP](https://gsap.com) (GreenSock Animation Platform), зі зручними способами використання @gsap/react [useGSAP() hook](https://gsap.com/docs/v3/React/tools/useGSAP).
- [ ] 71. Забезпечити повну підтримку та сумісність Next.js Edge.
- [ ] 72. Забезпечити повну підтримку та сумісність [Biome](https://biomejs.dev), [Bun](https://bun.sh) та [Docker](https://docker.com).
- [ ] 73. Переконайтеся, що всі мови веб-сайту граматично правильні та відповідають останнім правилам для кожної мови.
- [ ] 74. Переконайтеся, що всі елементи в проекті відсортовані в порядку зростання, якщо інше сортування не вимагається деінде.
- [ ] 75. Переконайтеся, що проект уникає використання надлишкового імпорту, наприклад, імпорту всього з React, коли достатньо імпортувати лише необхідні хуки. Проект не використовує речі, які автоматично обробляються компілятором React (тільки там, де він не справляється), що робить код набагато більш читабельним. Million Lint має безперешкодно працювати з React Compiler.
- [ ] 76. Забезпечити доступність для **користувачів**, **розробників** (як початківців, так і експертів), **ботів** (таких як [Googlebot](https://developers.google.com/search/docs/crawling-indexing/googlebot) або [PageSpeed Insights Crawler](https://pagespeed.web.dev)), для **кожного**.
- [ ] 77. Вдосконалити конфігурацію `middleware.ts` з реалізацією мультипроміжного програмного забезпечення.
- [ ] 78. Використовувати усі відповідні бібліотеки [TanStack](https://tanstack.com).
- [ ] 79. Усунути всі вимкнення у файлі `eslint.config.js`, налаштувати конфігурацію на сувору, але дружню до початківців.
- [ ] 80. Елегантно налаштувати `app.ts`, запропонувавши єдиний конфіг замість усіх можливих інших.
- [ ] 81. Розробити робочі процеси як для продавців, так і для клієнтів.
- [ ] 82. Розробити ще більш складну реалізацію підписок користувачів і системи оформлення замовлення через Stripe; а також написати Jest/Ava тести для Stripe і використовувати файли даних `.thing/hooks/stripe_*.json` [webhookthing](https://docs.webhookthing.com) для цих тестів.
- [ ] 83. Розробити розширену вітрину магазину з продуктами, категоріями та підкатегоріями.
- [ ] 84. Розробити вдосконалену сторінку 404 «Не знайдено» з повною підтримкою інтернаціоналізації.
- [ ] 85. Розробити розширені функції реєстрації, входу та відновлення за допомогою електронної пошти-пароля та магічних посилань.
- [ ] 86. Зменшити кількість файлів шляхом об'єднання схожих елементів тощо.
- [ ] 87. Створіть максимально дружній до новачків і естетично привабливий стартовий екран.
- [ ] 88. Створити розширену систему сповіщень, включаючи тостери, спливаючі вікна та сторінки.
- [ ] 89. Створити нову цільову сторінку з виразним дизайном та оновленими компонентами, а також повністю переробити всі інші сторінки та компоненти.
- [ ] 90. Розгляньте можливість додавання [StyleX] від Facebook (<https://stylexjs.com/blog/introducing-stylex>). Однак StyleX наразі вимагає встановлення Babel/Webpack у проекті, чого ми уникаємо, щоб підтримувати повну підтримку Turbopack. Як альтернативу можна розглянути [Tokenami](https://github.com/tokenami/tokenami#readme) від jjenzz або [Panda CSS](https://panda-css.com) від Chakra. Можливо, ми зможемо зробити вибір між ними під час завантаження проекту за допомогою Reliverse CLI. Ці бібліотеки допоможуть уникнути застарілої [початкової ідеї](https://stylexjs.com/blog/introducing-stylex/#the-origins-of-stylex) для [CSS-in-JS](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757). Дізнайтеся більше [тут](https://github.com/reactwg/react-18/discussions/110) і в [Next.js docs](https://nextjs.org/docs/app/building-the-application/styling/css-in-js).
- [ ] 91. Переконайтеся, що проект не містить дублікатів, таких як файли, компоненти тощо.
- [ ] 92. Проведіть корисні тести, включаючи можливі стрес-тести, щоб змоделювати та оцінити продуктивність додатку в умовах високого трафіку.
- [ ] 93. Комплексно налаштовувати RSC і всі інші нові функції Next.js 13-15. Легко переміщайте вибірку даних між клієнтською та серверною сторонами за допомогою [useSWR](https://twitter.com/shuding_/status/1794461568505352693).
- [ ] 94. Заповнити контрольний список BA11YC (Bleverse Accessibility Convention); який в майбутньому може спиратися на наступний принцип: [DesignPrototype](https://uiprep.com/blog/ultimate-guide-to-prototyping-in-figma)-[CodePrototype](https://medium.com/@joomiguelcunha/the-power-of-prototyping-code-55f4ed485a30)-CodeTests-HqDesign-[TDD](https://en.wikipedia.org/wiki/Test-driven_development)-HqCode-[CI](https://en.wikipedia.org/wiki/CI/CD).
- [ ] 95. Заповнити частини контрольного списку [BA11YC (Bleverse Accessibility Convention)](<https://github.com/bs-oss/BA11YC>). Це включає використання програмного забезпечення [Design Patterns](https://refactoring.guru/design-patterns/what-is-pattern) для рефакторингу коду.
- [ ] 96. Перевірте всі компоненти з побічними ефектами на предмет перерендерингу, рекомендується перерендерити кожен компонент максимум 2 рази ([гарне відео про це (українською мовою)](<https://youtu.be/uH9uMH2e5Ts>)).
- [ ] 97. Підвищуйте показники продуктивності додатку на таких платформах, як Google PageSpeed Insights. Переконайтеся, що додаток проходить всі суворі тести.
- [ ] 98. Застосовуйте бібліотеку [nuqs](https://nuqs.47ng.com) там, де це доречно; для старих версій «next-usequerystate» (стара назва пакета) [прочитайте статтю](https://francoisbest.com/posts/2023/storing-react-state-in-the-url-with-nextjs).
- [ ] 99. Всі сторонні бібліотеки та компоненти React повинні бути належним чином ізольовані. Це включає перевірку даних з цих бібліотек, таких як Clerk, та обгортання компонентів директивою «use client» за необхідності.
- [ ] 100. Додайте розділ відгуків на цільову сторінку. Отримайте відгуки про Relivator від п'яти широко відомих людей в Інтернеті.
- [ ] 101. Додайте інформаційну панель адміністратора, яка включає магазини, продукти, замовлення, підписки та платежі.
- [ ] 102. Додати глобальні змінні кольору до всіх місць, де вони застосовуються, замість жорстко закодованих кольорів.
- [ ] 103. Додати спливаючі вікна для сповіщень про файли cookie/GDPR (з відповідною сторінкою налаштувань управління), а також плаваючі сповіщення Google для швидкого входу в систему тощо.
- [ ] 104. Додайте до проекту кілька цікавих і корисних типів, наприклад, за допомогою бібліотеки [type-fest](https://github.com/sindresorhus/type-fest).
- [ ] 105. Додати інтеграцію розумної системи git-хуків з різним додатковим корисним функціоналом.
- [ ] 106. Додати найцінніші та найкорисніші речі ESLint з колекції [awesome-eslint](https://github.com/dustinspecker/awesome-eslint).

[![Приєднуйтесь до Relivator Discord](https://discordapp.com/api/guilds/1075533942096150598/widget.png?style=banner2)][badge-discord]

[badge-discord]: <https://badgen.net/discord/members/Pb8uKbwpsJ?icon=discord&label=discord&color=purple>
