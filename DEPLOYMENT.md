# 🌐 Guide Complet de Déploiement

Guide étape par étape pour déployer votre portfolio en ligne.

## 🚀 Option 1 : GitHub Pages (GRATUIT - Recommandé)

C'est la solution la plus simple et gratuite !

### Étapes :

#### 1. Créer un Repository GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **+** → **New repository**
3. Nommez-le `myportfolio` (ou le nom que vous préférez)
4. Cliquez sur **Create repository**

#### 2. Initialiser Git Localement

```bash
cd /Users/yassmeissa/MyPortfolio

git init
git add .
git commit -m "Initial commit - Portfolio setup"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/myportfolio.git
git push -u origin main
```

Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub.

#### 3. Activer GitHub Pages

1. Allez sur votre repo GitHub
2. Cliquez sur **Settings** → **Pages**
3. Sous "Build and deployment", sélectionnez **GitHub Actions**
4. Attendez quelques minutes, votre site sera accessible à :
   ```
   https://VOTRE_USERNAME.github.io/myportfolio
   ```

#### 4. Configurer le Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé :

1. Allez à votre registrar (GoDaddy, Namecheap, etc.)
2. Mettez à jour les DNS :
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   ```

3. Dans **Settings → Pages**, ajoutez votre domaine

### Mettre à Jour le Domaine dans Vite

Si votre repo n'est pas la page utilisateur, modifiez `vite.config.ts` :

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/', // Si votre repo s'appelle 'myportfolio'
  // ou
  base: '/', // Si c'est votre page utilisateur
});
```

Puis committez et poussez :
```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

---

## 🎯 Option 2 : Vercel (GRATUIT)

La solution la plus rapide et moderne.

### Étapes :

#### 1. Créer un Compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **Sign Up** → **Continue with GitHub**
3. Autorisez Vercel à accéder à votre compte GitHub

#### 2. Importer le Projet

1. Cliquez sur **Add New... → Project**
2. Sélectionnez votre repo `myportfolio`
3. Cliquez sur **Import**
4. Les paramètres sont généralement corrects par défaut
5. Cliquez sur **Deploy**

#### 3. Attendre et Vérifier

Vercel va automatiquement :
- Cloner votre repo
- Installer les dépendances
- Builder le projet
- Déployer

Votre site sera accessible à : `https://myportfolio.vercel.app`

#### 4. Configurer un Domaine Personnalisé

1. Allez à votre projet dans Vercel
2. Cliquez sur **Settings → Domains**
3. Ajoutez votre domaine
4. Suivez les instructions pour mettre à jour les DNS

---

## 🔥 Option 3 : Netlify (GRATUIT)

Alternative populaire et très facile.

### Étapes :

#### 1. Se Connecter à Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur **Sign up** → **GitHub**
3. Autorisez Netlify

#### 2. Créer un Nouveau Site

1. Cliquez sur **Add new site** → **Import an existing project**
2. Choisissez **GitHub**
3. Sélectionnez votre repo `myportfolio`
4. Les paramètres sont généralement :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Cliquez sur **Deploy site**

#### 3. Attendre le Déploiement

Netlify construira et déploiera automatiquement. Vous recevrez une URL comme :
```
https://cool-name-12345.netlify.app
```

#### 4. Configurer un Domaine

1. Cliquez sur **Domain settings**
2. Ajoutez votre domaine personnalisé
3. Mettez à jour les DNS chez votre registrar

---

## 💰 Option 4 : Hébergement Payant

Pour plus de contrôle et de performance.

### Hostinger (Recommandé pour débutants)

1. Achetez un plan d'hébergement sur [hostinger.com](https://hostinger.com)
2. Téléchargez le contenu du dossier `dist/`
3. Uploadez via FTP dans le dossier `public_html`
4. Mettez à jour les DNS vers votre hébergement

### Bluehost

1. Enregistrez votre domaine
2. Achetez un plan d'hébergement
3. Via cPanel → File Manager → Uploadez les fichiers de `dist/`

### AWS S3 + CloudFront

Pour un déploiement professionnel :

```bash
# Installez AWS CLI
pip install awscli

# Configurer vos credentials
aws configure

# Buildez votre projet
npm run build

# Uploadez sur S3
aws s3 sync dist/ s3://mon-portfolio-bucket/

# Créez une distribution CloudFront pour le CDN
```

---

## ⚙️ Configuration Avancée

### Redirection HTTPS

Assurez-vous que votre site force HTTPS :

**GitHub Pages** : Automatique ✅
**Vercel** : Automatique ✅
**Netlify** : Automatique ✅

### Configuration Email (Recommandé)

Pour que votre formulaire de contact fonctionne :

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Vous recevrez un ID de formulaire
4. Intégrez-le dans `src/components/Contact.tsx`

---

## 🔄 Mises à Jour Futures

Après votre déploiement initial, pour mettre à jour votre portfolio :

```bash
# Faites vos modifications
# Modifiez vos fichiers...

# Committez et poussez
git add .
git commit -m "Update portfolio content"
git push

# Voilà ! Votre site se met à jour automatiquement en quelques secondes
```

---

## ✅ Checklist Avant Déploiement

- [ ] Remplacez les infos de contact par les vôtres
- [ ] Ajoutez vos projets réels
- [ ] Testez le site en local : `npm run dev`
- [ ] Testez les modes dark/light
- [ ] Testez le changement de langue
- [ ] Testez sur mobile
- [ ] Vérifiez les liens externes
- [ ] Optimisez les images
- [ ] Vérifiez le code : `npm run lint`
- [ ] Buildez pour la production : `npm run build`

---

## 🆘 Troubleshooting

### Site ne se met pas à jour

```bash
# Videz le cache
git push --force

# Ou attendez 5 minutes pour un rebuild
```

### Erreur 404 sur GitHub Pages

Si vous utilisez GitHub Pages avec un repo non-utilisateur, assurez-vous que `vite.config.ts` a :
```typescript
base: '/nom-du-repo/',
```

### Images ne s'affichent pas

Utilisez des chemins absolus : `/image.jpg` au lieu de `image.jpg`

### Formulaire de contact ne fonctionne pas

1. Vérifiez que vous avez intégré un service d'email
2. Testez en local avec `npm run dev`
3. Vérifiez la console du navigateur pour les erreurs

---

## 📊 Améliorer le SEO

Après le déploiement :

1. Installez [Google Search Console](https://search.google.com/search-console)
2. Soumettre votre sitemap
3. Vérifiez les performances
4. Optimize pour le mobile (essentiellement déjà fait)

---

## 🎯 Prochaines Étapes

✅ **Déployer votre portfolio**
→ **Partager le lien sur LinkedIn, Twitter, etc.**
→ **Recueillir des retours**
→ **Améliorer continuellement**

---

**Félicitations ! Votre portfolio est maintenant en ligne ! 🎉**

Partagez le lien avec vos contacts, employeurs potentiels et clients !
