# Disscus.in as Front End

`Disscus.in` are web based application. built using react as front-end framework and mui as material ui. This app purpose are to manage Form Group Disccusion system as admin.

including

- Manage Users
- Manage Threads/Posts
- Manage Topics

## Getting Started

Using NPM

```bash
git clone https://github.com/daffadmr/discussin-react
npm install
npm start
```

### Color palette list

- ![#323C5C](https://placehold.co/15x15/323C5C/323C5C.png) Primary
- ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) Neutrals
- ![#69F607](https://placehold.co/15x15/69F607/69F607.png) Success
- ![#476cff](https://placehold.co/15x15/476cff/476cff.png) Info
- ![#ffd000](https://placehold.co/15x15/ffd000/ffd000.png) warning
- ![#FF151C](https://placehold.co/15x15/FF151C/FF151C.png) Semantic(Danger)

### Using Tailwind as Styling

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "4xl": "1900px",
      "3xl": "1600px",
      "2xl": "1535px",
      xl: "1279px",
      lg: "1023px",
      md: "767px",
      sm: "639px",
    },
    backgroundPosition: {
      "hero-bg": "center top -200px",
      "hero-bg-mobile": "center top -600px",
    },
    extend: {
      container: {
        padding: "40px",
        center: true,
      },
      colors: {
        primary: "#FBEB23",
        secondary: "#285FE7",
        danger: "#FF151C",
        gray: "#D8D8D8",
        navy: "#323C5C",
      },
    },
  },
  plugins: [],
};
```

### Styling Implement

```jsx
<button
  className="bg-navy rounded-default text-white w-full py-2"
  type="submit"
  data-testid="button-submit"
>
  Sign In
</button>
```

---

### License

Copyright © 2022 [Kelompok 13 Capstone Project SIB Alterra Academy Batch 3](https://github.com/daffadmr/discussin-react).<br />
This project is [MIT]() licensed.