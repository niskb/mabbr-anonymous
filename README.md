# MABBR-Anonymous - Supabase React App

A desktop-only React application with Supabase authentication, featuring an OLED-friendly dark theme.
Stop your gambling addiction today!

## Features
- Sign-up, login, and sign-out with Supabase authentication.
- Password reset via email.
- Loading states for authentication actions.
- Full-screen layout with centered content (optimized for 1024px+ screens).
- OLED-friendly dark theme (black background, light grey text).
- Manual CSS for styling.

## Setup
1. **Install Dependencies**:
   ```bash
   npm install

2. **Configure Environment**:
Create a .env.local file in the root directory.

Add your Supabase credentials:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

3. **Run the Application**:
Build and start the dev server:
npm run dev

Open http://localhost:5173/ in your browser.

4. **Dependencies**:
React 19.1.0
Vite 6.3.5
Supabase 2.49.4
TypeScript 5.8.3
React Router DOM 6.27.0
React Error Boundary 4.0.13

5. **Usage**:
Sign Up: Navigate to /signup to create a new account.
Login: Go to /login to sign in. Use "Forgot Password?" to reset your password.
Dashboard: After login, you’ll be redirected to /dashboard to see your user email.
Sign Out: Click "Sign Out" in the navigation bar to log out.

6. **Development**:
Build: npm run build to create a production build in the dist/ directory.
Lint: npm run lint to run ESLint (if configured).

7. **package.json Structure:**:
```json
{
  "name": "mabbr-anonymous",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint src/",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.49.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-error-boundary": "^4.0.13",
    "react-router-dom": "^6.27.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.26.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "@typescript-eslint/parser": "^8.32.1",
    "@typescript-eslint/eslint-plugin": "^8.32.1",
    "typescript": "^5.8.3",
    "vite": "^6.3.5"
  }
}
```