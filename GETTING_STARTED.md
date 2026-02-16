# 📚 Guide Complet de Personnalisation

Bienvenue ! Voici un guide étape par étape pour personnaliser votre portfolio.

## ✅ Étapes Rapides

### 1️⃣ **Personnaliser vos Informations**

Ouvrez `src/config/profile.json` et mettez à jour :
- `name` - Votre nom
- `email` - Votre email
- `phone` - Votre téléphone
- `github` - Votre profil GitHub
- `linkedin` - Votre profil LinkedIn
- `twitter` - Votre profil Twitter
- `description` - Courte description
- `location` - Votre localisation

### 2️⃣ **Modifier le Contenu Texte**

Allez dans `src/i18n/locales/` :

**Pour l'anglais** : Modifiez `en.json`
**Pour le français** : Modifiez `fr.json`

Chaque clé correspond à une section du site. Exemple :
```json
{
  "hero": {
    "title": "Hi, I'm Yass",
    "subtitle": "Full Stack Developer & UI/UX Enthusiast"
  }
}
```

### 3️⃣ **Ajouter une Photo de Profil**

1. Placez votre photo dans `public/` (ex: `public/profile.jpg`)
2. Ouvrez `src/components/Hero.tsx`
3. Remplacez le `<div className={styles.imagePlaceholder}>` par :
```tsx
<div className={styles.imageContainer}>
  <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
</div>
```
4. Ajoutez le style dans `src/components/Hero.module.css` :
```css
.profileImage {
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.3);
}
```

### 4️⃣ **Ajouter vos Projets**

Ouvrez `src/components/Projects.tsx` et remplacez le tableau `projects` :

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Titre du Projet',
    description: 'Description courte du projet',
    image: 'https://url-image.com/image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/votreusername/repo',
    demoUrl: 'https://mon-projet.com',
  },
  // Ajoutez d'autres projets...
];
```

**Pour les images** :
- Utilisez des URLs externes (Unsplash, Pexels, etc.)
- Ou placez des images dans `public/projects/` et utilisez le chemin local

### 5️⃣ **Ajouter votre Expérience Professionnelle**

1. Ouvrez `src/components/Experience.tsx`
2. Remplacez le tableau `experiences` :

```tsx
const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Nom de l\'entreprise',
    position: 'Votre poste',
    period: 'Jan 2023 - Présent',
    description: 'Description de vos responsabilités',
    highlights: [
      'Accomplissement ou réalisation 1',
      'Accomplissement ou réalisation 2',
      'Accomplissement ou réalisation 3',
    ],
  },
  // Ajoutez d'autres expériences...
];
```

### 6️⃣ **Personnaliser vos Compétences**

Ouvrez `src/components/Skills.tsx` et modifiez les catégories :

```tsx
const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    name: 'Outils',
    skills: ['Git', 'Docker', 'Figma', 'AWS'],
  },
];
```

### 7️⃣ **Configurer le Formulaire de Contact**

Ouvrez `src/components/Contact.tsx` et mettez à jour les liens :

```tsx
<div className={styles.infoCard}>
  <FiMail size={32} className={styles.icon} />
  <h3>{t('contact.email')}</h3>
  <p>votre@email.com</p> {/* ← Changez ceci */}
</div>

<div className={styles.infoCard}>
  <FiPhone size={32} className={styles.icon} />
  <h3>{t('contact.phone')}</h3>
  <p>+33 6 12 34 56 78</p> {/* ← Changez ceci */}
</div>
```

Pour activer l'envoi d'emails, intégrez un service comme :
- **EmailJS** (simple)
- **Formspree** (free)
- **Netlify Forms** (avec Netlify)

### 8️⃣ **Mettre à jour les Réseaux Sociaux**

Ouvrez `src/components/Footer.tsx` et modifiez les URLs :

```tsx
const links = [
  { icon: FiGithub, url: 'https://github.com/votreusername', label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://linkedin.com/in/votreusername', label: 'LinkedIn' },
  { icon: FiTwitter, url: 'https://twitter.com/votreusername', label: 'Twitter' },
  { icon: FiMail, url: 'mailto:votre@email.com', label: 'Email' },
];
```

## 🎨 Personnaliser les Couleurs

Ouvrez `src/index.css` et modifiez les variables CSS :

**Mode clair** :
```css
:root {
  --primary-color: #0066ff;      /* Couleur principale (bleu) */
  --bg-primary: #ffffff;         /* Fond blanc */
  --text-primary: #1a1a1a;       /* Texte noir */
}
```

**Mode sombre** :
```css
.dark {
  --primary-color: #00a8ff;      /* Couleur principale */
  --bg-primary: #0f0f0f;         /* Fond très foncé */
  --text-primary: #ffffff;       /* Texte blanc */
}
```

## 🚀 Déployer Votre Portfolio

### Option 1 : GitHub Pages (Recommandé)

1. Créez un repo sur GitHub
2. Poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votreusername/myportfolio.git
git push -u origin main
```

3. Allez dans **Settings → Pages** de votre repo
4. Sélectionnez **GitHub Actions** comme source
5. Le site se déploiera automatiquement ! 🎉

**URL finale** : `https://votreusername.github.io/`

### Option 2 : Vercel

1. Installez Vercel CLI :
```bash
npm i -g vercel
```

2. Déployez :
```bash
vercel
```

### Option 3 : Netlify

1. Connectez votre repo GitHub
2. Netlify détectera et construira automatiquement
3. Votre site sera en ligne en quelques secondes !

## 📊 Vérification Avant Publication

- ✅ Tous les liens sociaux sont à jour
- ✅ Votre email et téléphone sont corrects
- ✅ Les projets sont visibles avec de bonnes images
- ✅ Vos compétences et expérience sont listées
- ✅ Testez le mode dark/light
- ✅ Testez le changement de langue (FR/EN)
- ✅ Vérifiez sur mobile

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Vérifier le code
npm run lint

# Build production
npm run build

# Aperçu du build
npm run preview

# Nettoyer les dépendances
rm -rf node_modules package-lock.json
npm install
```

## 💡 Astuces

- 📸 Utilisez des images optimisées (compressez avant d'uploader)
- 🎨 Restez cohérent avec les couleurs
- ✍️ Rédigez des descriptions claires et concises
- 📱 Testez toujours sur mobile
- 🔍 Utilisez des mots-clés dans votre contenu (SEO)
- 📈 Montrez vos meilleures réalisations

## ❓ FAQ

**Q: Comment ajouter une nouvelle langue ?**
R: Créez un fichier `src/i18n/locales/code.json` et importez-le dans `src/i18n/config.ts`

**Q: Puis-je changer le design ?**
R: Oui ! Modifiez les fichiers `.module.css` dans `src/components/`

**Q: Comment intégrer un formulaire de contact ?**
R: Utilisez EmailJS, Formspree ou une autre solution d'emailing

**Q: Mon site ne se met pas à jour après le déploiement ?**
R: Videz le cache du navigateur (Ctrl+Shift+Del)

---

## 🆘 Besoin d'aide ?

- Consultez la documentation : [React](https://react.dev) | [Vite](https://vite.dev)
- Regardez les exemples dans le code
- Modifiez petit à petit et testez

Bon amusement avec votre portfolio ! 🎉
