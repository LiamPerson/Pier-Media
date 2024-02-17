# Pier Media

⚠ This project is still under development and is not yet ready for general user usage. Please feel free to contribute. ⚠

A home media center made for use with Raspberry Pi 4 Model B (though should work on other devices).
Includes:

- graphql API for interfacing with other applications
- web interface for managing your media (coming soon)
- media player (developing)
- media downloader
- media converter
- media organizer
- genre inference
- automatic metadata assignment (coming soon)
- metadata editing (coming soon)

_@todo - Liam: Add screenshots of the web interface here 😇_

### Roadmap

Find the roadmap for this project in the GitHub Issues section of the project found here: https://github.com/LiamPerson/Pier-Media/issues

**Advantages over Pier Legacy**

- Requires only 2 dependencies
- Much easier to install
- More efficient runtime
- More responsive interface

## Dependencies:

- NodeJS V16.10+
- NPM V8+
- FFMPEG
- FFPROBE

## Supported Architectures

- All Windows versions from Vista SP2+ and onwards
- Linux/BSD armv7l, aarch64, x86, x64
- All MacOS versions 10.9+ and onwards

## Notes

### Automatic Updates

The included `yt-dlp` version automatically updates. Please replace the `yt-dlp` binary in the `/public/bin/yt-dlp/` folder with one compatible for your operating system and architecture if you do not want this functionality.

Find `yt-dlp` releases here: [yt-dlp releases](https://github.com/yt-dlp/yt-dlp#release-files)

---

# Developers

All information below is only necessary for those wanting to contribute to, or edit the project.

## Tests

Tests in this application define the product case. Do not modify these. If you are finding your tests are failing, please update the code to match the tests, not the other way around.

## Sample .ENV

```sh
DATABASE_URL="file:./dev.db" # Prisma db
DEBUG_MODE="true"
```

## Required VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Naming Conventions

All time units are stored in milliseconds (ms) unless otherwise specified.

## API

All API endpoints are handled, documented, and interfaced with via the Apollo Server GraphQL API.

## Packages

All packages added should have their reason stated on the [packages readme](./docs/packages/README.md). This project should have minimal dependencies and modifications to the `package.json`.

Read more here: [packages readme!](./docs/packages/README.md)

## Setup

To setup your local environment for development please run the following commands in the repository root:

- `npm install` install all dependencies
- `npm run prisma:generate` or `yarn prisma:generate` generate the prisma client
- `npm run prisma:migrate:dev` or `yarn prisma:migrate:dev` run the migrations to build your development database

# Licenses

- [Ion-Icons](./public/ion-icons/LICENSE) (MIT License)
