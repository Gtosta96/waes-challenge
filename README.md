This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author Decisions and Motivations

I took the liberty to take some personal decisions based on my code style/thoughts that I think aggregates value to the final product. However, I took strict care in order to not add any third party library that would help me to deliver the final product.
In the next sections I explain which tools/libraries the project uses and why.

#### 1. Create React App

I'm using CREA in order to skip the configuration step and fast-forward to the development.
This is very valuable, since the less time the team spends on configurations, more time they have to focus on deliverables.

Also, CREA provides by default a service worker which "makes" the app work offline an load faster.

#### 2. Typescript

Typescript is a powerful superset which aggregates high value to the code, increasing readability, maintenance, and enhancing the development speed over time. Although it adds certain complexity, Typescript features are all optional, so that, the team can turn them on gradually.

Bellow some benefits from typescript:

- Auto Imports / Auto Resolvers
- Intelisense
- Type checking - objects / components / etc.
- Easy refactory
- High Customizable (Toggle Features)

> **Why** Typescript over flow?
> Typescript has a large community, twice as flow in Github stars, and a way better integration with VSCode, which is the most used editor in the day this doc is written. Typescript is also used by default by Angular applications.

#### 3. Tests

CREA provides Jest out of the box, I would add `Enzyme`, but I did not in order to follow the requirements.

## Enhancements (Todos)

- Improve HighlightMarker logic
- Improve UI/UX
- Improve test coverage

## Available Scripts

Inside the project directory, you can run:

**App Start**

```shell-script
yarn install -g
yarn install
yarn start
```

**Tests**

```shell-script
yarn test
yarn test -- coverage
```

**Build**

```shell-script
yarn build
```

You can check the application running [clicking here.](https://gtosta96-waes-challenge.netlify.com/)

---

Many Thanks,
Gabriel Tosta, gabrieltosta3@gmail.com
