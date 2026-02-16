# 🚀 Cas d'Usage Avancés

Guide pour les améliorations et intégrations avancées de votre portfolio.

## 📧 Intégrer un Service d'Email

### Option 1 : EmailJS (Recommandé)

1. Installez EmailJS :
```bash
npm install @emailjs/browser
```

2. Inscrivez-vous sur [emailjs.com](https://www.emailjs.com/)

3. Modifiez `src/components/Contact.tsx` :
```tsx
import emailjs from '@emailjs/browser';

// Initialisez EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'your@email.com',
    });
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    alert('Failed to send message');
    console.error(error);
  }
};
```

### Option 2 : Formspree

1. Allez sur [formspree.io](https://formspree.io/)
2. Créez un nouveau formulaire
3. Changez la balise form dans `Contact.tsx` :
```tsx
<form
  className={styles.form}
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

### Option 3 : Netlify Forms

Si vous déployez sur Netlify, ajoutez simplement :
```tsx
<form
  className={styles.form}
  name="contact"
  method="POST"
  netlify
>
  <input type="hidden" name="form-name" value="contact" />
  {/* Vos champs... */}
</form>
```

## 🔐 Ajouter l'Authentification

Pour un espace admin ou contenu protégé :

```bash
npm install firebase
```

Créez `src/firebase/config.ts` :
```tsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Votre configuration Firebase
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## 📊 Analytics

### Google Analytics

```bash
npm install react-ga4
```

Modifiez `src/main.tsx` :
```tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-YOUR_MEASUREMENT_ID');
```

### Plausible Analytics (Privacy-friendly)

```bash
npm install react-plausible
```

Modifiez `index.html` :
```html
<script defer data-domain="votredomaine.com" src="https://plausible.io/js/script.js"></script>
```

## 🎭 Animations Avancées

### Framer Motion

```bash
npm install framer-motion
```

Exemple dans un composant :
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Contenu animé
</motion.div>
```

## 📱 PWA (Progressive Web App)

Pour faire fonctionner votre site hors ligne :

```bash
npm install vite-plugin-pwa
```

Modifiez `vite.config.ts` :
```tsx
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mon Portfolio',
        short_name: 'Portfolio',
        description: 'Mon portfolio personnel',
        theme_color: '#0066ff',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
```

## 🔍 SEO Optimisation

### Helmet pour React

```bash
npm install react-helmet-async
```

Utilisez dans vos composants :
```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Mon Portfolio - Développeur Full Stack</title>
  <meta name="description" content="Portfolio personnel..." />
  <meta property="og:title" content="Mon Portfolio" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://..." />
</Helmet>
```

## 🌍 Multilingue Avancé

### Ajouter Plus de Langues

1. Créez `src/i18n/locales/es.json` pour l'espagnol
2. Importez dans `src/i18n/config.ts` :
```tsx
import es from './locales/es.json';

i18n.init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es }, // ← Nouveau
  },
});
```

3. Modifiez `src/components/Header.tsx` pour supporter plus de langues

## 📦 Compresser les Images

### Sharp

```bash
npm install sharp
```

Créez un script pour optimiser :
```js
const sharp = require('sharp');

sharp('original.jpg')
  .resize(1200, 800, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile('optimized.webp');
```

## 🔄 CI/CD Avancé

### Linter Plus Strict

```bash
npm install @typescript-eslint/recommended-type-checked
```

Mettez à jour `eslint.config.js` pour plus de règles

### Tests Unitaires

```bash
npm install --save-dev vitest @testing-library/react
```

Créez `src/components/__tests__/Hero.test.tsx` :
```tsx
import { render } from '@testing-library/react';
import { Hero } from '../Hero';

test('renders hero title', () => {
  render(<Hero />);
  expect(screen.getByText(/Hi, I'm Yass/i)).toBeInTheDocument();
});
```

## 🎯 Performance

### Code Splitting

Modifiez `src/App.tsx` avec `React.lazy` :
```tsx
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<div>Loading...</div>}>
  <Hero />
</Suspense>
```

### Lazy Loading Images

```tsx
<img
  src="/image.jpg"
  loading="lazy"
  alt="Description"
/>
```

## 💻 Environnements

### Variables d'Environnement

Créez `.env` :
```
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your_key
```

Utilisez dans votre code :
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🚀 Déploiement Avancé

### Docker

Créez `Dockerfile` :
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### GitHub Actions Avancé

Modifiez `.github/workflows/deploy.yml` pour des tests avant déploiement

## 🎨 Thème Personnalisé

### Créer un Système de Thème Complet

Créez `src/themes/customTheme.ts` :
```tsx
export const lightTheme = {
  primary: '#0066ff',
  background: '#ffffff',
  text: '#1a1a1a',
};

export const darkTheme = {
  primary: '#00a8ff',
  background: '#0f0f0f',
  text: '#ffffff',
};
```

## 📊 Dashboard Admin

Pour gérer votre portfolio facilement :

```bash
npm install react-admin
```

Créez un espace admin pour éditer le contenu sans toucher au code.

---

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)

Explorez et amusez-vous ! 🚀
