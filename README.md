touch blog.scss footer.scss home.scss navbar.scss offers.scss popular.scss

# Build with

- [Vitejs](https://vitejs.dev/)
- [RouterV6](https://reactrouter.com/en/main)
- Image from Pexels or Unsplash

# Install

```
npm create vite@latest
```

```
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev
```

## Run (different creacte-react-app)

```
npm run dev
```

## Tailwindcss for Vite

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Prettier

[Link](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

```
npm install -D prettier prettier-plugin-tailwindcss
```

rename file "prettier.config.js" to "prettier.config.cjs"

```
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}

```
