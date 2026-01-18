# GOTMAIL.JP Archival

A Flash game archival project powered by Ruffle, allowing you to play classic Flash games in a modern browser.

## Setup

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Push this repository to GitHub as a public repository
2. Go to your repository settings → Pages
3. Ensure "GitHub Actions" is selected as the deployment source
4. Update the `homepage` field in `package.json` with your actual GitHub URL:
   ```json
   "homepage": "https://yourusername.github.io/gotmailjp"
   ```

### How It Works

- Every push to the `main` branch triggers the GitHub Actions workflow
- The project is built automatically
- The contents of the `dist` folder are deployed to GitHub Pages
- Your site will be available at `https://yourusername.github.io/gotmailjp`

### Manual Deployment

To test the production build locally:

```bash
bun run build
bun run preview
```

The preview will be available at `http://localhost:4173/gotmailjp/`

## Project Structure

- `src/routes/` - TanStack Router page components
- `src/assets/` - Static assets
- `public/` - Public assets and Flash game files
- `dist/` - Built production files (generated)

## Credits

- Developed by A1UM1
- Archive by Flashpoint Archive & darkmoe9433
- Powered by Ruffle, GitHub, Vite

---

## React + TypeScript + Vite Info

For more information on the template, see below:

### Available plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
