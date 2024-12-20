---
title: Reliverse CLI
description: A powerful command-line interface (CLI) tool that helps you effortlessly create new web projects, manage existing ones, and apply advanced, automated modifications to your codebase. It’s like having a superapp right in your terminal.
---

**📚 Docs**: [docs.reliverse.org](https://docs.reliverse.org/cli) | **💙 Discord**: [discord.gg/Pb8uKbwpsJ](https://discord.gg/Pb8uKbwpsJ) | [NPM](https://npmjs.com/@reliverse/cli) | [GitHub](https://github.com/reliverse/cli)

@reliverse/cli is a powerful command-line interface tool that helps you effortlessly create new web projects, manage existing ones, and apply advanced, automated modifications to your codebase. Having Reliverse CLI is like having a superapp right in your terminal!

## Get Started

_Make sure you have [Node.js](https://nodejs.org), [Git](https://git-scm.com/downloads), and [Bun](https://bun.sh) installed. Then:_

- Install: `bun i -g @reliverse/cli`
- Use: `reliverse cli`
- Update: `bun -g update --latest`

## Project Features

- **Effortless Project Creation**: Quickly start new web projects or initialize from existing templates or GitHub repositories.  
- **Flexible Project Management**: Easily maintain and update existing projects with modern best practices.  
- **Intelligent & Interactive Setup**: Choose tools, frameworks, and libraries through a guided process with smart defaults and conflict resolution.  
- **Comprehensive Configuration**: Automatically manage settings for ESLint, Prettier, Biome, `.env` files, Git, and IDE integration.  
- **Versatile Code Transformations**: Enhance existing codebases with codemods, refactoring, and smooth integration of popular libraries.  
- **Framework Compatibility**: Full support for Next.js, React, Vue, Svelte, and Astro.  
- **Template-Driven Customization**: Instantly clone, configure, and adapt fully customizable templates.  
- **GitHub & Deployment Automation**: Streamline repository setup, synchronization, and deployment workflows.  
- **JavaScript/TypeScript Support**: Optimized for JS/TS projects, focusing on React and Next.js, yet adaptable to many frameworks.  
- **shadcn/ui Integration**: Seamlessly add shadcn/ui or community component libraries to supported frameworks.  
- **Future Expansion**: Designed to evolve beyond web development into a universal project tooling solution.

***

Show your ❤️ and support for this project by ⭐ starring it and following its creator, [Nazar Kornienko](https://github.com/blefnk).

***

## 🛠️ Commands

- `reliverse cli` — Start the interactive CLI wizard.
- `reliverse --help` — Show help information.
- `reliverse login` — Login to Reliverse services.
- `reliverse logout` — Logout from Reliverse services.
- `reliverse studio` — Launch the Reliverse Studio interface.

## ⚙️ Configuration

You can configure the CLI with a `.reliverse` file at your project root:

```json
{
  // Project details
  "projectAuthor": "blefnk",
  "projectState": "",
  "projectDomain": "",
  "projectType": "",
  "projectCategory": "",
  "projectSubcategory": "",
  
  // Development preferences
  "projectFramework": "nextjs",
  "projectPackageManager": "bun",
  "preferredLibraries": {
    "stateManagement": "zustand",
    "formManagement": "react-hook-form",
    "styling": "tailwind",
    "uiComponents": "shadcn-ui",
    "testing": "bun",
    "authentication": "clerk",
    "database": "drizzle",
    "api": "trpc"
  },
  
  // Project features
  "features": {
    "i18n": true,
    "analytics": false,
    "themeMode": "dark-light",
    "authentication": true,
    "api": true,
    "database": true,
    "testing": false,
    "docker": false,
    "ci": false,
    "commands": [],
    "webview": [],
    "language": [],
    "themes": []
  },
  
  // Code style preferences
  "codeStyle": {
    "dontRemoveComments": true,
    "shouldAddComments": true,
    "typeOrInterface": "type",
    "importOrRequire": "import",
    "quoteMark": "double",
    "semicolons": true,
    "lineWidth": 80,
    "indentStyle": "space",
    "indentSize": 2,
    "importSymbol": "~"
  },
  
  // Prompts behavior (prompt | autoYes | autoNo)
  "deployBehavior": "prompt",
  "depsBehavior": "prompt",
  "gitBehavior": "prompt",
  "i18nBehavior": "prompt",
  "scriptsBehavior": "prompt",
  
  // Project metadata
  "projectName": "@reliverse/cli",
  "projectDescription": "A CLI tool that offers a convenient way to bootstrap a new web project and prepare it for work.",
  "projectVersion": "1.3.30",
  "projectLicense": "MIT",
  "projectRepository": "git+https://github.com/reliverse/cli.git",
  
  // Config revalidation (1h | 1d | 2d | 7d)
  "configLastRevalidate": "2024-12-18T19:14:42.844Z",
  "configRevalidateFrequency": "2d"
}
```

## 🤝 Contributing

Contributions are always welcome! Check out our [Contributing Guide](https://github.com/reliverse/cli/blob/main/CONTRIBUTING.md) to get started. Please follow the project's [Code of Conduct](https://github.com/reliverse/cli/blob/main/CODE_OF_CONDUCT.md) while contributing.

## 📝 License

[MIT](https://github.com/reliverse/cli/blob/main/LICENSE.md) © [Nazarii Korniienko](https://github.com/blefnk)

## 💖 Support

If you find this project helpful, consider supporting its development:

- [GitHub Sponsors](https://github.com/sponsors/blefnk)
- [Buy Me a Coffee](https://buymeacoffee.com/blefnk)
- [Patreon](https://patreon.com/blefnk)
- [PayPal](https://paypal.me/blefony)

## 🔗 Links

- [GitHub Repository](https://github.com/reliverse/cli)
- [Bug Reports](https://github.com/reliverse/cli/issues)
- [Feature Requests](https://github.com/reliverse/cli/issues)
- [Discord Community](https://discord.gg/Pb8uKbwpsJ)

```bash
bun i -g @reliverse/cli
reliverse cli
```

## Introduction

**Reliverse** is a CLI tool designed to streamline the setup of JavaScript and TypeScript projects, with a strong focus on Next.js templates and beyond. It effortlessly bootstraps projects or applies advanced modifications to your existing codebase, saving time and effort.

## Collaborate

We’re open to partnerships and collaborations. If you’re interested in working with us, please join our [Discord community](https://discord.gg/Pb8uKbwpsJ).

## FAQ

**Bun doesn’t install the latest version of @reliverse/cli?**

```bash
bun pm cache rm -g
bun i -g @reliverse/cli
reliverse cli
```

**Why not a monorepo?**

We aim to keep things accessible and straightforward. Monorepos can introduce complexity and tool incompatibilities. If the ecosystem evolves to support it, we may revisit this decision.

## Reliverse Addons

Reliverse Addons (extensions/plugins) will extend the ecosystem’s functionality. The Reliverse Extension API is coming soon. Stay tuned for community-driven enhancements!

## Conflict Management

When encountering existing configuration files (e.g., `.eslintrc.cjs`), **@reliverse/cli** offers a choice to remove, rename, or leave them untouched, giving you full control over your setup.

## Installing Other Templates

You can install any GitHub repository—templates, libraries, or tools:

```bash
reliverse cli
```

Then follow the interactive prompts to specify a GitHub URL. Reliverse will clone and prepare the project automatically.

## Bootstrapping Tool Comparison

| **Feature**                 | **Reliverse**  | **create-t3-app**  | **create-astro** |
|-----------------------------|----------------|--------------------|------------------|
| **Type Safety**             | 🟡             | 🟡                | 🟡               |
| **Crash Resilience**        | 🟡             | 🟡                | 🟡               |
| **Project Template Options**| 🟡             | 🟡                | 🟡               |
| **Customizable Setup**      | 🟡             | 🟡                | 🟡               |
| **Preconfigured Routing**   | 🟡             | 🟡                | 🟡               |
| **Integrated Testing**      | 🟡             | 🟡                | 🟡               |
| **Environment Configs**     | 🟡             | 🟡                | 🟡               |
| **Code Linting/Formatting** | 🟡             | 🟡                | 🟡               |
| **Automatic Deps Install**  | 🟡             | 🟡                | 🟡               |
| **Monorepo Support**        | 🟡             | 🟡                | 🟡               |
| **Error Handling**          | 🟡             | 🟡                | 🟡               |
| **Documentation**           | 🟡             | 🟡                | 🟡               |
| **Ease of Setup**           | 🟡             | 🟡                | 🟡               |
| **Example Projects**        | 🟡             | 🟡                | 🟡               |

## Special Thanks

This project builds on the shoulders of many great tools and communities. We extend our gratitude to the maintainers and contributors of projects like Inquirer.js, unjs, and more.

## Wrap-Up

Reliverse is your all-in-one CLI companion. Whether you’re bootstrapping a new Next.js project, integrating a complex toolchain, or just exploring something new from GitHub, Reliverse streamlines the entire process. As the ecosystem evolves, so will Reliverse—always striving to be the single tool you’ll love using.

_Thanks for checking out Reliverse CLI! Feel free to open an issue or submit a pull request. Starring the project and following its author shows your support._

Happy, Reliversing!
