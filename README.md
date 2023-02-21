# Vehicles CRUD application

Simple web application to showcase fundamental CRUD operations

## Technologies

Project is created with:

- React.js 18.2.0
- Tailwind CSS 3.2.4
- MobX 6.7.0
- MobX-react 7.6.0
- Axios 1.3.2
- Baasic (BaaS)

## Development dependencies

For always consistent formatting across all files I've used the following:

- [Prettier](https://www.npmjs.com/package/prettier) (Core)
- Plugins for Prettier :
  - [sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) 4.0.0
  - [tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) 0.2.2

## Setup

To run this project, install it locally using npm:

```
$ cd ../project-folder
$ npm install
$ npm start
```

## Sources

#### All sources used to help me build this project. <br> From handling global state in MobX to details like certain javascript quirks or TailwindCSS grouped hover states.

> - [Baasic](https://dev.baasic.com/) docs
> - [MobX](https://mobx.js.org/README.html) docs
> - [MDN](https://developer.mozilla.org/en-US/) docs
> - [TailwindCSS](https://tailwindcss.com/docs/installation) docs
> - [Monsterlessons Academy](https://www.youtube.com/@MonsterlessonsAcademy/videos) Youtube
> - [Maksim Ivanov](https://www.youtube.com/@satansdeer1) Youtube
> - [ChatGPT](https://openai.com/blog/chatgpt/) 🤖

## To-Do

1. **Notification** (e.g. toast notification) when the request was successful or when it throws an error.
2. **Better UI/UX**:
   - Filter and sort section redesign, a pop up sidebar is not really intuitive but neither a header dropdown seemed like a better option.
   - List container with sticky header for column indicators needs redesign.
3. **Mobile responsive** optimization, might not be necessary but I will let you decide 😄
