---
title: Versator Next.js Template
description: Build your eCommerce platform in a matter of seconds
---

Будь ласка, слідкуйте за автором цього проекту, [Назаром Корнієнком] (<https://github.com/blefnk>), та розгляньте можливість стати зіркою проекту, щоб показати свою ❤️ та підтримку.

- **🚀 Live Demo**: [relivator.com](https://relivator.com/en)
- **💙 Discord**: [discord.gg/Pb8uKbwpsJ](https://discord.gg/Pb8uKbwpsJ)
- **📚 Docs**: [docs.reliverse.org](https://docs.reliverse.org/relivator)
![зображення обкладинки](/screenshot-dark.png)

## Як запустити або зібрати проект?

Переконайтеся, що у вас встановлені [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en) та [Bun](https://bun.sh). Далі:

1. `git clone https://github.com/blefnk/versator.git`.
2. `cd versator`
3. `bun i`
4. `cp .env.example .env` → Заповнити файл .env
5. `bun db:push`
6. `bun dev` / `bun run build` / `bun build

## Що таке Versator?

Шаблон Versator слугує основою для вашої платформи електронної комерції, допомагаючи створювати ефективні, цікаві та прибуткові інтернет-магазини. Versator розширює можливості будь-якої електронної комерції за допомогою сучасних Next.js, React, TypeScript, Tailwind та інших. Детальну інформацію про шаблон Versator та його завантажувач, [Reliverse](https://github.com/reliverse/cli), ви можете знайти на [веб-сайті документації](https://docs.reliverse.org/relivator).

## Стек технологій

- **Core**: Next.js 15.1, React 19, TypeScript 5.7
- **Інтернаціоналізація**: next-intl
- **Стилістика**: Tailwind & Shadcn/UI
- **Автор**: Clerk
- **Оплата**: Stripe
- **База даних**: Drizzle ORM & Neon Postgres
- **Зберігання файлів**: Uploadthing
- Інструменти: ESLint 9, Biome, Knip

## Що робити, якщо я хочу мати ще один стек?

1. `bun i -g @reliverse/cli@latest`
2. `reliverse`
3. Виберіть _Створити абсолютно нову річ з нуля_.
4. Надайте детальну інформацію про ваш новий проект
5. Оберіть технології, які ви хочете використовувати
6. Більше жодного кроку! Все готово! 😊🎉
