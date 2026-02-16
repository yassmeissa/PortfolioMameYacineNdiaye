# 🎨 Portfolio Personnel - Yass

Un portfolio moderne et élégant construit avec **React**, **TypeScript**, et **Vite**. Avec support du **mode dark/light** et **bilingue (Français/Anglais)**.

## ✨ Caractéristiques

- 🌙 **Mode Dark/Light** - Basculez entre les thèmes clair et sombre
- 🌐 **Bilingue** - Français et Anglais avec i18next
- 📱 **Responsive Design** - Parfait sur tous les appareils (mobile, tablette, desktop)
- ⚡ **Performance** - Construit avec Vite pour une performance optimale
- 🎯 **Modern Stack** - React 19, TypeScript, CSS Modules
- 📦 **Optimisé** - Icons avec react-icons
- 🔗 **Navigation Fluide** - Scroll smooth entre les sections
- 🎨 **Design Élégant** - Animations fluides et transitions

## 📂 Structure du Projet

```
src/
├── components/           # Composants React
│   ├── Header.tsx       # Navigation et barre supérieure
│   ├── Hero.tsx         # Section d'accueil
│   ├── About.tsx        # À propos de vous
│   ├── Projects.tsx     # Portfolio de projets
│   ├── Skills.tsx       # Compétences techniques
│   ├── Contact.tsx      # Formulaire de contact
│   ├── Footer.tsx       # Pied de page
│   └── [Component].module.css  # Styles des composants
├── context/
│   └── ThemeContext.tsx # Gestion du thème dark/light
├── i18n/
│   ├── config.ts        # Configuration i18next
│   └── locales/
│       ├── en.json      # Traductions anglaises
│       └── fr.json      # Traductions françaises
├── App.tsx              # Composant principal
├── App.css              # Styles globaux
├── index.css            # Variables CSS et résets
└── main.tsx             # Point d'entrée

```

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo>

# Accéder au répertoire
cd MyPortfolio

# Installer les dépendances
npm install
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### Build Production

```bash
# Construire pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🎨 Personnalisation

### Modifier le Contenu

Modifiez les fichiers de traduction pour personnaliser le contenu :
- `src/i18n/locales/en.json` - Contenu anglais
- `src/i18n/locales/fr.json` - Contenu français

### Ajouter vos Projets

Dans `src/components/Projects.tsx`, modifiez le tableau `projects` :

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Votre Projet',
    description: 'Description du projet',
    image: 'URL de l\'image',
    tags: ['React', 'Node.js'],
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://...',
  },
  // ...
];
```

### Personnaliser les Couleurs

Modifiez les variables CSS dans `src/index.css` :

```css
:root {
  --primary-color: #0066ff;
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  /* ... */
}

.dark {
  --primary-color: #00a8ff;
  --bg-primary: #0f0f0f;
  --text-primary: #ffffff;
  /* ... */
}
```

### Ajouter vos Compétences

Dans `src/components/Skills.tsx`, modifiez le tableau `skillCategories`.

## 📱 Sections Disponibles

1. **Header** - Navigation sticky avec sélecteur de langue et mode sombre
2. **Hero** - Section d'accueil avec CTA et réseaux sociaux
3. **About** - Présentation avec statistiques
4. **Projects** - Portfolio de projets avec tags et liens
5. **Skills** - Compétences par catégories
6. **Contact** - Formulaire de contact
7. **Footer** - Liens sociaux et copyright

## 🌐 Internationalisation (i18n)

Le projet utilise **i18next** pour le support multilingue. 

Pour ajouter une nouvelle langue :
1. Créez un nouveau fichier `src/i18n/locales/code.json`
2. Copiez la structure depuis `en.json`
3. Traduisez le contenu
4. Ajoutez à `src/i18n/config.ts` :

```tsx
import code from './locales/code.json';

i18n.init({
  resources: {
    // ...
    code: { translation: code },
  },
});
```

## 🎨 Thème Dark/Light

Le thème est stocké dans le localStorage et se bascule via le contexte `ThemeContext`. L'état du thème est appliqué à la classe `dark` sur l'élément racine.

## 📝 Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Construire pour la production |
| `npm run preview` | Prévisualiser le build production |
| `npm run lint` | Exécuter ESLint |

## 🛠️ Technologies Utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Bundler moderne et rapide
- **React Icons** - Icônes SVG
- **i18next** - Gestion multilingue
- **CSS Modules** - Styles scoped
- **CSS Variables** - Thèmes dynamiques

## 📦 Dépendances

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^4.x.x",
    "react-i18next": "^11.x.x",
    "i18next": "^22.x.x"
  }
}
```

## 🚀 Déploiement

### GitHub Pages

1. Mettez à jour `vite.config.ts` avec votre base URL
2. Push sur GitHub
3. Activez les GitHub Pages depuis les settings

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Déployez le dossier 'dist' sur Netlify
```

## 📄 Licence

Ce projet est ouvert à l'utilisation personnelle. Libre de modification.

## 💡 Conseils

- Ajoutez votre photo dans la section Hero
- Mettez à jour les liens de réseaux sociaux
- Complétez votre email et téléphone dans Contact
- Ajoutez votre vrai contenu dans les traductions
- Créez un alias email pour le formulaire de contact

## 🤝 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Fait avec ❤️ par Yass**
