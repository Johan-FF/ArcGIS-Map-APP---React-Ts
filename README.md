# ArcGIS Map APP

![arcgis_map_app_video](https://github.com/Johan-FF/ArcGIS-Map-APP---React-Ts/assets/94552691/97206849-db80-4d64-8ae5-777c2079dc59)

## Description

This is a project that uses the @arcgis/core library to visualize the world map, so it is possible to switch between different views. This project implements Material UI and Tailwind CSS, this design is responsive.

## Installation

1. Clone the repository:

```
git clone https://github.com/Johan-FF/ArcGIS-Map-APP---React-Ts.git
cd ArcGIS-Map-APP---React-Ts
```

2. Install the required dependencies:

```
npm install
```

## Running the app

```
npm run dev
```

## Operation

The root page ('/') starts the application or directs to this repository. When starting the application a login is simulated by saving a variable in the localstorage, without this variable it is not possible to access to the rest of the paths, with this it is possible to access to the other paths ('/map' and wrong path '/\*').

On the map page it is possible to view the world map by switching between different views. There is a structure with a header navigation menu and a footer.

On the wrong route page only a message is displayed and the option to return to the map route is given.

## React + Vite + Typescript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
