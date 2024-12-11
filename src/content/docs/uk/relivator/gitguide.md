---
title: Git Guide
description: This is the git guide of Relivator.
---

*Рекомендується встановити Relivator, дотримуючись детальних інструкцій в [README.md](https://github.com/blefnk/relivator#readme), щоб відчувати себе більш впевнено на початку вивчення Git'у.*

Це правда - [Git](<https://git-scm.com>) спочатку може бути складним. Подумайте про використання таких ресурсів, як цей посібник, [Git Book](<https://git-scm.com/book>) та [GitHub Skills](<https://skills.github.com>), щоб поглибити своє розуміння. Команда *git commit --help* спрямує вас до інформації про команду `git commit` та її опції, тому ця команда довідки також може бути корисною. Найкращий спосіб освоїтися з Git'ом - це регулярно ним користуватися. Створіть невеликий проект або скористайтеся великим шаблоном веб-проекту, таким як [Relivator](<https://github.com/blefnk/relivator>), і поекспериментуйте з різними командами. Якщо ви не впевнені в чомусь, пов'язаному з Git'ом, зверніться до цього детального керівництва, щоб дізнатися більше.

## Початкове налаштування Git'у

*Дотримуючись вказівок у цьому посібнику, ви зможете почати працювати з Git'ом, налаштувати своє середовище та використовувати зручні псевдоніми для оптимізації робочого процесу. Щасливого гітингу!

### Основні інструменти

Переконайтеся, що у вас встановлено [*Git*](<https://learn.microsoft.com/en-us/devops/develop/git/install-and-set-up-git>). Також рекомендується встановити *Node.js LTS* ([Windows/macOS](https://nodejs.org) | [Linux](https://youtu.be/NS3aTgKztis)). Потім запустіть *corepack enable pnpm*, щоб встановити [*pnpm*](https://pnpm.io/installation). Додатково ми рекомендуємо встановити [*VSCode*](https://code.visualstudio.com) та *GitHub Desktop* ([Windows/macOS](https://desktop.github.com) | [Linux](https://dev.to/rahedmir/is-github-desktop-available-for-gnu-linux-4a69)). Якщо ви користувач Windows, також встановіть [PowerShell 7.4+](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4#installing-the-msi-package).

### Налаштування ідентичності

Перш ніж ви почнете створювати будь-які комміти в Git'і, вам потрібно встановити свою ідентичність. Це важливо, тому що ваше ім'я та email будуть додані до кожного створеного вами коміту. Оскільки ця інформація є публічною, використовуйте щось прийнятне.

```bash
git config --global user.name "<ВАШЕ_ІМ'Я>"
git config --global user.email "<ВАША_ЕЛЕКТРОННА_АДРЕСА>"
```

### Перевірка налаштувань

Щоб побачити всі налаштування Git'а і переконатися, що вони правильні, запустіть його:

```bash
git config --global --list
```

## Посилання в Git'і

Написання хороших коммітів є цінною навичкою. Щоб дізнатися, як писати ефективні повідомлення про комміти, зверніться до наступних ресурсів:

- [Покращення вашого Git-балки за допомогою звичайних коммітів](https://dev.to/maxpou/enhance-your-git-log-with-conventional-commits-3ea4)
- [Повідомлення про карму коммітів](http://karma-runner.github.io/6.4/dev/git-commit-msg.html)
- [Семантичні повідомлення про фіксацію](https://seesparkbox.com/foundry/semantic_commit_messages)
- [Зауваження про повідомлення про комміти в Git'і](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [Написання повідомлень про комміти Git'а](https://365git.tumblr.com/post/3308646748/writing-git-commit-messages)

## Псевдоніми

Псевдоніми Git'а - це скорочення для довгих команд. Вони можуть заощадити вам багато тексту і зробити ваш робочий процес більш ефективним.

### Отримання оновлень

Цей псевдонім оновлює ваш локальний репозиторій, витягуючи останні зміни, перезавантажуючи та оновлюючи підмодулі.

```bash
# git down
git config --global alias.down '!git pull --rebase --autostash; git submodule update --init --recursive'
```

### Надсилання оновлень

Цей псевдонім переміщує ваші зміни до віддаленого сховища, включно з тегами.

```bash
# git up
git config --global alias.up '!git push; git push --tags'
```

### Скасування постановки одного або декількох файлів

Іноді ви помилково розбиваєте файли на етапи. Цей псевдонім допоможе вам вилучити їх зі стадії.

```bash
# git unstage <ФАЙЛИ>.
git config --global alias.unstage 'reset HEAD --'
```

### Тегування релізів відповідно до семантичної версійності (SemVer)

Семантичне керування версіями - це спосіб позначати ваші випуски змістовними номерами версій. Ці псевдоніми допомагають автоматизувати процес.

```bash
# git release-major
git config --global alias.release-major '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; major=$((major+1)); minor=0; patch=0; next=v$major.$minor.$patch; git tag -a $next -m ""; echo "Попередній випуск:"; echo -n " "; echo $latest; echo "Новий випуск:"; echo -n " "; echo $next'

# git release-minor
git config --global alias.release-minor '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; minor=$((minor+1)); patch=0; next=v$major.$minor.$patch; git tag -a $next -m ""; echo "Попередній випуск:"; echo -n " "; echo $latest; echo "Новий випуск:"; echo -n " "; echo $next'

# git release-patch
git config --global alias.release-patch '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; patch=$((patch+1)); next=v$major.$minor.$patch; git tag -a $next -m ""; echo "Попередня версія:"; echo -n ""; echo $latest; echo "Нова версія:"; echo -n ""; echo $next'
```

### Ігнорування надлишкових бінарних імен `git` у командах

Ви можете не вводити `git git`, встановивши псевдонім:

```bash
# git git status, git git commit тощо.
git config --global alias.git '!cd "$GIT_PREFIX" && git'
```

### Відображення журналу змін з часу останнього тегу

Щоб переглянути журнал змін від останньої мітки до поточної фіксації, використовуйте цей псевдонім:

```bash
# git changelog
git config --global alias.changelog '!git log $(git describe --abbrev=0 --tags)..HEAD --no-merges --pretty=online --abbrev-commit'
```

### Виявлення залишків і відходів від забудови

Знайдіть у своєму коді загальні маркери залишків, такі як TODO або налагоджувальні відбитки:

```bash
# git leftover

git config --global alias.leftover '!git grep -P -i -I --untracked "((?<![a-zA-Z0-9])(TODO|FIXME|XXX|console\.log|System\.out|var_dump)(?![a-zA-Z0-9]))|([\t ]+$)"'

```

## Рекомендація

### Використання вашого улюбленого редактора для Git'а

Ви можете налаштувати ваш улюблений текстовий редактор для використання з Git'ом для написання повідомлень про комміти тощо. Наприклад, якщо ви віддаєте перевагу `gedit` на Ubun tu:

```bash
git config --global core.editor "gedit --wait"
```

### Коректна обробка закінчень рядків у Windows

Windows та Unix-системи (наприклад, Linux та macOS) по-різному обробляють закінчення рядків. Щоб уникнути проблем, налаштуйте Git'у так, щоб він автоматично обробляв їх за вас. Це перетворить закінчення рядків у власний формат Windows (CRLF) при оформленні замовлення і назад у формат Unix (LF), коли ви збережете зміни.

```bash
git config --global core.autocrlf true
```

### Запам'ятовування (кешування) паролів для HTTPS

Коли ви клонуєте сховища по HTTPS, вам потрібно щоразу вводити ім'я користувача і пароль, на відміну від SSH-ключів. Щоб змусити Git'а запам'ятовувати ваші паролі і полегшити собі життя, використовуйте наведені нижче команди відповідно до вашої операційної системи:

```bash
# У Windows

git config --global credential.helper wincred

# На Ubun tu

sudo apt-get install libgnome-keyring-dev
cd /usr/share/doc/git/contrib/credential/gnome-keyring
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential/gnome-keyring/git-credential-gnome-keyring

# На macOS

git config --global credential.helper osxkeychain

```

## Використання

### Оновлення розгалуженого репозиторію (синхронізація з оригіналом)

1. **Додайте оригінальне сховище як віддалене (зробіть це лише один раз):**.

   ```bash
   git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>
   ```

2. **Отримайте оновлення з оригінального репозиторію та перенесіть їх до вашого форку:**.

   ```bash
   git pull upstream <BRANCH_NAME> <BRANCH_NAME>
   git push origin
   ```

### Скидання сховища до стану розгалуженого сховища

1. **Додайте оригінальне сховище як віддалене (зробіть це лише один раз):**.

   ```bash
   git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>
   ```

2. **Скиньте стан вашого сховища:**.

   ```bash
   git віддалене оновлення
   git reset --hard upstream/<BRANCH_NAME></BRANCH_NAME
   git push origin +<BRANCH_NAME>.
   ```

### Показати всі проігноровані файли для сховища

Перерахувати всі ігноровані файли:

```bash
git clean -ndX
# або
git status --ignored
```

### Отримати список усіх віддалених команд для сховища

Щоб переглянути всі віддалені сховища, пов'язані з вашим локальним сховищем:

```bash
git remote -v
```

### Видалити всі нещодавно проігноровані файли

Коли ви додали до `.gitignore` файл, який раніше був у сховищі, видаліть його зі сховища:

```bash
git rm -r --cached .
git add .
```

### Зміна URL-адреси віддаленого доступу до сховища

Щоб змінити віддалену URL-адресу:

```bash
git віддалений set-url <REMOTE_NAME> <NEW_REMOTE_URL>
```

### Відкинути непоставлені зміни

Відкинути всі непоставлені зміни:

```bash
git checkout -- .
```

Відкинути зміни для певного файлу або шляху:

```bash
git checkout -- "<ШЛЯХ_ДО_ДИСКЕТКИ_ЗМІН_ДЛЯ>"
```

### Скасування вже опублікованого коміту

**Безпечний метод:**

```bash
git checkout HEAD~1 .
git commit -m "Відмінити деяку фіксацію"
git push <ІМ'Я_ВІДДІЛЕННЯ> <ІМ'Я_ВІДДІЛЕННЯ>
```

**Небезпечний метод:**.

```bash
git reset --hard HEAD~1
git push -f <ІМ'Я_ВІДДІЛЕННЯ> <ІМ'Я_ВІДДІЛЕННЯ>
```

### Скасування локальної фіксації (ще не опублікована)

Зберегти зміни у вашій робочій копії:

```bash
git reset --soft HEAD~1
```

Зовсім відмовитися від змін:

```bash
git reset --hard HEAD~1
```

### Показати зміни, внесені до робочої копії

Показувати тільки неінсценовані зміни:

```bash
git diff
```

Показувати лише поетапні зміни:

```bash
git diff --staged
```

Показати як неінсценовані, так і інсценовані зміни:

```bash
git diff HEAD
```

### Видалити гілку

Щоб видалити гілку локально:

```bash
git branch -d <BRANCH_NAME> </BRANCH_NAME
```

Видалення гілки на пульті:

```bash
git push <ІМ'Я_ВІДДІЛЕННЯ> :<ІМ'Я_ВІДДІЛЕННЯ>
```

### Додавання опису до коміту

Додавання повідомлення про фіксацію з заголовком та описом:

```bash
git commit -m "<TITLE>" -m "<DESCRIPTION>"
```

### Видалити всі невідстежувані файли та каталоги

Попередній перегляд того, що буде видалено:

```bash
git clean -ndf
```

Щоб дійсно видалити файли:

```bash
git clean -df
```

### Показати журнал у короткій версії

Відображати журнал фіксації у стислому форматі:

```bash
git log --pretty=online --abbrev-commit
```

### Створити гілку

Створити нову гілку, але залишитися в поточній гілці:

```bash
гілка git'а <NEW_BRANCH_NAME>
```

Створити та перейти до нової гілки:

```bash
git checkout -b <NEW_BRANCH_NAME>
```

### Перехід до іншої гілки

Перейти до іншої гілки:

```bash
git checkout <ІМ'Я_ІНШОЇ_ВІДДІЛЕННЯ>
```

### Тегування випусків

Ви можете позначити певні моменти в історії вашого сховища, додавши мітки. Мітки зазвичай використовуються для релізів, але можуть застосовуватися і для інших цілей.

Щоб позначити поточний комміт, скористайтеся наступними командами. Замініть `<TAG_NAME>` на унікальну назву тегу (наприклад, `v1.0.4` для версій) і `<DESCRIPTION>` на опис змін (необов'язково).

```bash
git tag -a "<TAG_NAME>" -m "<DESCRIPTION>"
git push <ІМ'Я_ВІДДАЛЕНОГО_ТЕГУ> --tags
```

### Імпорт комітів, запитів на витягування та інших змін через файли виправлень

1. Отримайте файл виправлення для коміту, pull-запиту або зміни, яку ви хочете імпортувати. Для pull-запитів GitHub ви можете отримати файл виправлення, додавши `.patch` до URL-адреси pull-запиту:

   ```bash
   curl -L https://github.com/<USER>/<REPO>/pull/<ID>.patch
   ```

2. Застосуйте файл виправлення за допомогою `git apply`:

   ```bash
   curl -L https://github.com/<USER>/<REPO>/pull/<ID>.patch | git apply
   ```

3. За бажанням, внесіть додаткові зміни до імпортованого коду.

4. Зафіксуйте зміни, вказавши автора оригінального патчу:

   ```bash
   git commit --author "<ПРИЗНАЧЕННЯ_АВТОРА> <<ПРИЗНАЧЕННЯ_АВТОРА_ЕЛЕКТРОННА ПОШТА>>" -m "<ВАШЕ_ПОВІДОМЛЕННЯ_КОМІТУВАННЯ>"
   ```

### Копіювання гілки

Створити локальну копію старої гілки під новим ім'ям і перенести її на віддалений сервер:

```bash
git checkout -b <NEW_BRANCH_NAME> <OLD_BRANCH_NAME
git push -u <НАЗВА_ВІДДІЛЕННЯ> <НАЗВА_ВІДДІЛЕННЯ>
```

### Переміщення філії

Перейменування гілки локально та віддалено:

```bash
git checkout -b <NEW_BRANCH_NAME> <OLD_BRANCH_NAME
git push -u <ВІДДАЛЕНА_НАЗВА> <НОВА_НАЗВА_ВІДДІЛЕННЯ_ВІДДІЛЕННЯ>
git branch -d <OLD_BRANCH_NAME> <стара_назва_гілки
git push origin :<OLD_BRANCH_NAME>.
```

### Очищення гілки та скидання її до порожнього стану

Створити нову гілку без історії і почати з чистого аркуша:

```bash
git checkout --orphan <NEW_BRANCH_NAME>.
rm -rf ./*
# Додайте ваші нові файли
git add .
git commit -m "Початкова фіксація"
git push -uf <ВІДДАЛЕНА_НАЗВА> <НОВА_НАЗВА_ВІДДІЛЕННЯ>
```

### Підрахунок коммітів на гілці

Підрахунок загальної кількості коммітів на гілці:

```bash
git rev-list --count <BRANCH_NAME>
# Приклад: git rev-list --count main
```

Підрахунок коммітів на автора:

```bash
git shortlog -s -n
```

## Скасування змін

### Скасування скидання Git'а

Якщо ви помилково запустили `git reset --hard HEAD^` і втратили комміти, скористайтеся `git reflog`, щоб знайти комміт і скинутись до нього:

```bash
git reflog
git reset 'HEAD@{1}'
```

### Скасувати останню фіксацію

Скасувати останню фіксацію, але зберегти зміни у робочому каталозі:

```bash
git reset --soft HEAD~1
```

### Визначення розміру теки

Щоб знайти розмір папки:

```bash
du -hs
```

### Очищення історії Git'а

Щоб видалити файли з історії, використовуйте `git filter-branch`:

```bash
git filter-branch --index-filter 'git rm --cached --ignore-unmatch <pathname>' <commitHASH>'
```

Або використовуйте `bfg`:

1. Встановіть `bfg`:

   ```bash
   brew install bfg
   ```

2. Запустіть `bfg`, щоб очистити історію комітів:

   ```bash
   bfg --delete-files *.mp4
   bfg --replace-text passwords.txt
   bfg --delete-теки .git
   ```

3. Видалити файли:

   ```bash
   git reflog expire --expire=now --all && git gc --prune=now --aggressive
   ```

Щоб замінити текст, створіть файл `passwords.txt` з наступним форматом:

```plaintext
PASSWORD1 # Замінити буквальний рядок 'PASSWORD1' на '***REMOVED***' (за замовчуванням)
PASSWORD2==>examplePass # Замінити на 'examplePass'
PASSWORD3==> # Замінити на порожній рядок
regex:password=\w+==>password= # Замінити за допомогою регексу
```

### Сквош-фікс

Об'єднати кілька коммітів в один:

```bash
git rebase -i HEAD~<n>.
# або
git rebase -i <COMMIT_HASH> # git rebase -i <COMMIT_HASH>
```

### Відмінити зміни

Відкинути всі зміни:

```bash
git reset
git checkout .
git clean -fdx
```

### Видалити `node_modules`, якщо випадково зареєстровано

```bash
git rm -r --cached node_modules
```

### Внести зміни до ваших повідомлень про зобов'язання

Щоб змінити повідомлення про останню фіксацію:

```bash
git commit --amend
```

### Збираю вишні

Застосування коміту з іншої гілки як нового коміту:

```bash
git cherry-pick <ВАШ_КОММІТ_ХЕШ>
```

## Управління філіями

### Перейменувати філію

Щоб перейменувати гілку, ви можете скористатися наступними командами:

```bash
# Перейменуйте гілку зі старої назви на нову
git branch -m old-name new-name
# Або, якщо ви перебуваєте на гілці, яку хочете перейменувати
git branch -m new-name

# Видаліть стару гілку на віддаленому комп'ютері і виштовхніть нову гілку
git push origin :old-name new-name

# Встановіть висхідну гілку для нової гілки
git push origin -u new-name
```

### Скидання гілки локального сховища для відповідності віддаленому

Щоб скинути локальну гілку, щоб вона відповідала "головній" гілці віддаленого сховища:

```bash
git fetch origin
git reset --hard origin/main
git clean -f # Очистити локальні файли
```

### Видалити всі об'єднані віддалені гілки

Видалити всі віддалені гілки, які вже були об'єднані:

```bash
git branch -r --merged | grep -v main | sed 's/origin\///' | xargs -n 1 git push --delete origin
```

### Скидання до початкових налаштувань

Щоб скинути локальну гілку, щоб вона відповідала віддаленій:

```bash
git fetch --all

# Варіант 1: Скидання до основної гілки

git reset --hard origin/main

# Варіант 2: Скидання до певної гілки

git reset --hard origin/<назва_гілки>.

### Отримати останню фіксацію сховища

Щоб отримати останній комміт сховища:

```bash
git log -1
```

Натисніть `Q`, щоб вийти з журналу.

### Отримати хеш з останньої фіксації

Щоб отримати повний хеш останнього коміту:

```bash
git log -1 --pretty=%H
# Виведення
706b92ba174729c6a1d761a8566a74f0a0bf8672
```

Отримати скорочений хеш:

```bash
git log -1 --pretty=%h
# Виведення
706b92b
```

Зберігати хеш у змінній:

```bash
echo $(git log -1 --pretty=%H)
```

### Тегування для керування версіями Docker

Позначте сховище і виконайте фіксацію:

```bash
# Позначте сховище тегами
git tag -a v0.0.1 -m "версія v0.0.1"

# Перевірте тег
git describe
# Вивід: v0.0.1

# Виконайте фіксацію
git commit -am 'chore: зробити щось'

# Опишіть ще раз
git describe
# Виведення: v0.0.1-1-g9ba5c76
```

### Ярлики Git'а

Налаштуйте псевдоніми, щоб спростити типові команди Git'а:

```bash
псевдонім gst='git status'
псевдонім gcm='git commit -S -am'
аліас gco='git checkout'
аліас gl='git pull origin'
аліас gpom="git pull origin main"
alias gp='git push origin'
alias gd='git diff | mate'
alias gb='git branch'
alias gba='git branch -a'
alias del='git branch -d'
```

### Отримання імені та власника репозиторію GitHub

Отримати URL-адресу та ім'я сховища:

```bash
git config --get remote.origin.url
git ls-remote --get-url
git remote get-url origin
# Виведення: https://github.com/username/repository.git

basename $(git remote get-url origin) .git
# Виведення: репозиторій
```

### Видалити гілку локально

Щоб видалити гілку локально:

```bash
git push origin --delete <назва_галузі>
```

### Очистити локальні видалені гілки та отримати всі інші гілки

```bash
git віддалене оновлення --prune
```

### Видалити всі локальні гілки, окрім поточної

```bash
git branch | grep -v "main" | xargs git branch -D
```

### Сортування гілок за датою останньої фіксації

Перелік гілок, відсортованих за датою останнього коміту:

```bash
git fetch --prune
git branch --sort=-committerdate
```

## Управління зобов'язаннями

### Git-повідомлення про фіксацію

- **подвиг**: Нова функція, видима для кінцевих користувачів.
- **виправлення**: Виправлення помилки, видиме кінцевим користувачам.
- **рутина**: Зміни, які не впливають на кінцевих користувачів (наприклад, зміни в конвеєрі CI).
- **docs**: Зміни в документації.
- **refactor**: Зміни у виробничому коді, що стосуються читабельності, стилю або продуктивності.

### Список філій, які було об'єднано

```bash
гілка git --merged
```

### Список філій, які не були об'єднані

```bash
гілка git --no-merged
```

### Очищення та оптимізація репозиторію

Видалення непотрібних файлів та оптимізація локального сховища:

```bash
# Видалення непотрібних файлів
git gc

# Видалення всіх недоступних об'єктів з бази даних об'єктів
git prune

# Перевірка зв'язності та валідності об'єктів у базі даних
git fsck

# Обріжте ваш віддалений робочий каталог
git remote update --prune
```

### Автоматично надсилати коміти з тегами

```bash
git config --global push.followTags true
```

### Відновлення файлу до заданого коміту

Відновлення певного файлу до його стану на момент фіксації:

```bash
git restore -s <SHA1> -- <ім'я_файлу
```

## Корисні команди та техніки Git'у

### Завантажити лише папку з GitHub за допомогою Subversion (SVN)

Щоб завантажити певну папку з репозиторію GitHub за допомогою SVN:

```bash
# Замініть tree/main на trunk в URL-адресі
svn експорт https://github.com/alextanhongpin/pkg.git/trunk/authheader
```

Створення псевдоніма для завантаження шаблонів `docker-compose`:

```bash
alias init-db='svn export https://github.com/alextanhongpin/docker-samples/trunk/postgres/docker-compose.yml'
```

### Попередньо зафіксовані хуки

Переконайтеся, що у поточній гілці відредаговано журнал змін. Для цього використовуйте гачок попередньої фіксації:

```bash
# !/bin/bash

if [[ $(git diff develop -- CHANGELOG.md | wc -l) -eq 0 ]]; then
  echo "Не забудьте додати CHANGELOG.md"
  exit 1
fi
```

### Git Rebase Favor Current Branch

Надавати перевагу поточній гілці під час перезавантаження:

```bash
git rebase -X їхній ${branch}
```

[Більше інформації про стратегії злиття для rebase](https://stackoverflow.com/questions/2945344/how-do-i-select-a-merge-strategy-for-a-git-rebase)

### Git-хук після оформлення замовлення

Щоб автоматизувати завдання після перевірки гілки, використовуйте хук пост-перевірки:

1. Створіть і встановіть дозволи для хука:

   ```bash
   торкніться .git/hooks/post-checkout
   chmod u+x .git/hooks/post-checkout
   ```

2. Додайте наступний скрипт до `.git/hooks/post-checkout`:

   ```bash
   #!/bin/bash

   # Параметри

   # $1: Посилання на попередню голову

   # $2: Посилання на новий заголовок

   # $3: Чи це вилучення файлу (0), чи вилучення гілки (1)

   # Це перевірка файлу - нічого не робіть

   if [ "$3" == "0" ]; then exit; fi

   BRANCH_NAME=$(git symbolic-ref --short -- HEAD)
   NUM_CHECKOUTS=$(git reflog --date=local | grep -o ${BRANCH_NAME} | wc -l)

   # Якщо рефи попередньої та нової гілок однакові

   # і кількість чеків дорівнює одиниці, то створено нову гілку

   if [ "$1" == "$2" ] && [ ${NUM_CHECKOUTS} -eq 1 ]; then
     echo "нову гілку створено"
   else
     echo "гілку переключено на ${BRANCH_NAME}"
   fi

   ```

### Git-перевірка одного файлу з головного коміту

Повернути файл до стану в головній гілці:

```bash
git checkout $(git rev-parse main) -- шлях до файлу
```

### Додавання нових змін до останнього коміту

Доповнити останній комміт новими змінами:

```bash
git add --all
git commit --amend
# Примітка: Вам може знадобитися примусове виштовхування, якщо коміт вже було виштовхнуто
git push --force
```

### Очищення PR філії

Якщо у вашій гілці безлад і ви хочете почистити коміти:

1. Створіть нову тимчасову гілку:

   ```bash
   git checkout -b feature/foo-tmp
   ```

2. Створіть патч-файл змін:

   ```bash
   git diff origin/feature/foo origin/main > out.patch
   ```

3. Застосуйте патч до тимчасової гілки:

   ```bash
   git apply out.patch
   ```

4. Очистіть і перебазуйте за потреби, а потім видаліть стару гілку:

   ```bash
   гілка git'а -D feature/foo
   ```

5. Перейменуйте тимчасову гілку на оригінальну назву:

   ```bash
   гілка git -m feature/foo
   ```

6. З силою проштовхніть очищену гілку:

   ```bash
   git push --force feature/foo
   ```

### Краще штовхни з більшою силою

Використовуйте `git push --force-with-lease` замість `git push --force` для безпечнішого примусового оновлення.

[Дізнатися більше про force-with-lease](<https://stackoverflow.com/questions/52823692/git-push-force-with-lease-vs-force>)

### Git Fixup

Виправити попередній комміт:

1. Створіть фіксований коміт:

   ```bash
   git commit --fixup <first-commit-hash> <first-commit-hash
   ```

2. Rebase для витіснення фіксованого коміту:

   ```bash
   git rebase -i --autosquash --root
   ```

## Ресурси

- [Шаблон Relivator Next.js](https://github.com/blefnk/relivator#readme)
- [Theo's Post](https://youtube.com/post/UgkxE4zRFagfPNviZN2OgYMhozOa7MJSbktM)
- [Блог Мартіна Хайнца](https://martinheinz.dev/blog/109)
- [Delight-IM's Git Knowledge](https://github.com/delight-im/Knowledge/blob/master/Git.md)
- [Alex Tan Hong Pin's Cheat Sheet](https://github.com/alextanhongpin/cheat-sheet/blob/master/git.md)

## Підсумок

*Цей посібник охоплює різноманітні корисні команди та техніки Git'у, натхненні різними ресурсами та створені Reliverse, щоб полегшити як початківцям, так і досвідченим користувачам керування та оптимізацію своїх репозиторіїв.*
