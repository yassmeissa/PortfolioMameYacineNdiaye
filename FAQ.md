# 🆘 FAQ & Troubleshooting

Solutions rapides aux problèmes courants.

## 🔴 Problèmes de Démarrage

### "Module not found" ou erreur de dépendance

```bash
# Solution 1 : Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install

# Solution 2 : Mettez à jour npm
npm install -g npm
npm install
```

### Le serveur ne démarre pas

```bash
# Vérifiez si le port 5173 est libre
lsof -i :5173

# Si occupé, tuez le processus
kill -9 <PID>

# Ou utilisez un autre port
npm run dev -- --port 3000
```

### Erreur TypeScript "Cannot find module"

```bash
# Supprimez le cache TypeScript
rm -rf dist/

# Reconstruisez
npm run build
```

---

## 🟠 Problèmes de Personnalisation

### Le texte ne change pas après édition de JSON

```
❌ Problème : Vous avez modifié en.json mais le site n'a pas changé

✅ Solution :
1. Sauvegardez votre fichier (Ctrl+S)
2. Attendez que Vite hot-reload (quelques secondes)
3. Rafraîchissez le navigateur (Ctrl+R ou Cmd+R)
4. Vérifiez que vous avez édit la bonne langue
```

### Les icônes ne s'affichent pas

```bash
# Réinstallez react-icons
npm install react-icons

# Redémarrez le serveur
npm run dev
```

### La photo de profil n'apparaît pas

```
❌ Problème : J'ai mis une image mais elle ne s'affiche pas

✅ Solution :
1. Vérifiez le chemin (doit être /image.jpg pas image.jpg)
2. Mettez le fichier dans public/ folder
3. Utilisez le chemin correct dans Hero.tsx
4. Rafraîchissez le navigateur
```

---

## 🟡 Problèmes de Style

### Les couleurs ne changent pas

```
❌ Problème : J'ai modifié les variables CSS mais rien ne change

✅ Solution :
1. Ouvrez src/index.css
2. Cherchez :root { --primary-color: #0066ff; }
3. Changez la valeur
4. Sauvegardez
5. Rafraîchissez le navigateur
```

### Le mode dark ne fonctionne pas

```bash
# Vérifiez que ThemeContext.tsx est bien importé dans App.tsx
# Vérifiez que ThemeProvider enveloppe tout dans App.tsx

# Redémarrez le serveur
npm run dev
```

### Le design ne s'affiche pas correctement sur mobile

```
✅ Solutions :
1. Ouvrez les DevTools (F12)
2. Activez le responsive mode (Ctrl+Shift+M)
3. Vérifiez les media queries dans les fichiers .module.css
4. Testez sur un vrai téléphone également
```

---

## 🔵 Problèmes de Déploiement

### "Build failed" sur GitHub/Vercel

```bash
# Vérifiez que le build fonctionne en local
npm run build

# Cherchez les erreurs
npm run lint
```

### Mon site montre 404 sur GitHub Pages

```
❌ Problème : GitHub Pages montre 404

✅ Solution :
1. Vérifiez vite.config.ts
2. Si le repo n'est pas la page utilisateur :
   base: '/nom-du-repo/',
3. Committez et poussez
   git push
```

### Le site ne met pas à jour après le push

```bash
# Solution 1 : Attendez 5 minutes
# Solution 2 : Force push
git push --force

# Solution 3 : Videz le cache du navigateur
# Ctrl+Shift+Suppr (ou Cmd+Shift+Suppr sur Mac)
# Cochez "Cached images and files"
```

### Erreur "DNS not pointing"

```
Attendez 24-48h pour la propagation DNS
Vérifiez que vous avez correctement configuré les A records
Utilisez mxtoolbox.com pour vérifier
```

---

## 🟢 Problèmes Généraux

### Comment tester le site avant de déployer?

```bash
npm run build    # Crée le dossier dist/
npm run preview  # Prévisualise exactement comme en production
```

### Comment voir mon site sur mon téléphone (WiFi)?

```bash
npm run dev -- --host

# Utilise l'URL Network affichée (ex: http://192.168.1.x:5173)
```

### Où trouver mon adresse IP locale?

**Windows:**
```
ipconfig
# Cherchez "IPv4 Address"
```

**Mac/Linux:**
```bash
ifconfig
# Cherchez inet sous votre réseau WiFi
```

### Comment activer HTTPS en développement?

```bash
# Installez mkcert
brew install mkcert  # Mac
# ou sur Windows/Linux, voir https://mkcert.dev/

# Créez les certificats
mkcert localhost

# Utilisez avec Vite
npm run dev -- --https
```

---

## 💬 Messages d'Erreur Courants & Solutions

| Erreur | Cause | Solution |
|--------|-------|----------|
| `Cannot find module 'react'` | dépendances manquantes | `npm install` |
| `Port 5173 already in use` | port occupé | `kill -9 <PID>` ou `npm run dev -- --port 3000` |
| `Unexpected token '<'` | erreur syntax JSX | Vérifiez la syntaxe JSX |
| `undefined is not an object` | objet null/undefined | Vérifiez les imports et utilisation |
| `ENOENT: no such file or directory` | fichier manquant | Vérifiez le chemin du fichier |

---

## 📝 Checklist Debug

Avant de demander de l'aide :

- [ ] Vérifiez la console du navigateur (F12)
- [ ] Vérifiez le terminal npm pour les erreurs
- [ ] Sauvegardez tous les fichiers
- [ ] Réinstallez les dépendances
- [ ] Redémarrez le serveur
- [ ] Videz le cache du navigateur
- [ ] Testez dans un autre navigateur
- [ ] Testez sur une instance privée (InPrivate/Incognito)

---

## 🔗 Ressources Utiles

- **Erreurs React** : https://react.dev/reference/react
- **Documentation Vite** : https://vite.dev/guide/
- **TypeScript Handbook** : https://www.typescriptlang.org/docs/
- **i18next** : https://www.i18next.com/
- **CSS Modules** : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

---

## 📞 Quand Demander de l'Aide

Avant de demander, préparez :

1. **Le message d'erreur complet**
2. **Les fichiers modifiés** (copier-coller le code)
3. **Les étapes pour reproduire** le problème
4. **Des screenshots** si c'est un problème visuel
5. **Votre système d'exploitation** et navigateur

---

## 🎓 Apprentissage Continu

Si vous êtes bloqué, ces ressources peuvent aider :

- [React Documentation](https://react.dev) - Guide officiel React
- [TypeScript](https://www.typescriptlang.org/docs/) - Pour les types
- [MDN Web Docs](https://developer.mozilla.org) - JavaScript & CSS
- [Stack Overflow](https://stackoverflow.com) - Questions & réponses
- [GitHub Discussions](https://github.com) - Communauté

---

## ✅ Vous Pouvez le Faire !

La programmation c'est comme cuisiner :
- 👨‍🍳 Lisez la recette (documentations)
- 🔪 Préparez les ingrédients (dépendances)
- 🍳 Cuisinez étape par étape (codez)
- ⚡ Goûtez et ajustez (testez et debuggez)

**Résultat : Un délicieux portfolio ! 🍰**

---

Si vous êtes vraiment coincé, n'hésitez pas à :
1. Relire la documentation
2. Chercher sur Google/Stack Overflow
3. Consulter les GitHub Issues
4. Demander sur un forum/Discord

Bon courage ! 💪
