# 📸 GUIDE : Comment ajouter vos photos

## 🎯 Étape par étape

### 1️⃣ Préparez vos photos

#### Photo 1 : Photo Hero (photo principale)
- **Nom du fichier** : `photo-hero.jpg`
- **Dimensions** : 400x400px minimum (peut être plus grand)
- **Ratio** : Carré (1:1) ou portrait
- **Type** : Photo de profil, portrait
- **Conseil** : Choisissez une photo de face, bien éclairée, avec fond uni

#### Photo 2 : Photo About
- **Nom du fichier** : `photo-about.jpg`
- **Dimensions** : 400x500px minimum
- **Ratio** : Portrait (4:5)
- **Type** : Photo professionnelle ou en situation de travail
- **Conseil** : Photo avec ordinateur, dans un bureau, ou environnement tech

---

### 2️⃣ Où placer vos photos

```
portfolio-mohamed/
├── public/
│   └── images/              ← ICI !
│       ├── photo-hero.jpg   ← Votre photo principale
│       ├── photo-about.jpg  ← Votre photo "À propos"
│       └── README.md
├── src/
├── index.html
└── package.json
```

**Chemin complet** : `portfolio-mohamed/public/images/`

---

### 3️⃣ Comment copier vos photos

#### Sur Windows :
1. Ouvrez le dossier `portfolio-mohamed`
2. Ouvrez le dossier `public`
3. Ouvrez le dossier `images`
4. Copiez vos 2 photos ici
5. Renommez-les en `photo-hero.jpg` et `photo-about.jpg`

#### Sur Mac/Linux :
1. Naviguez vers `portfolio-mohamed/public/images/`
2. Glissez-déposez vos photos
3. Renommez-les si nécessaire

---

### 4️⃣ Lancer le projet

```bash
cd portfolio-mohamed
npm run dev
```

Vos photos apparaîtront automatiquement ! ✨

---

## 🔧 Options avancées

### Si vos photos ont d'autres noms

**Option A** : Renommez vos fichiers
- `ma-photo.png` → `photo-hero.jpg`
- `mon-image.jpg` → `photo-about.jpg`

**Option B** : Modifiez le code

**Dans `src/components/Hero.jsx`** (ligne ~20) :
```jsx
<img 
  src="/images/VOTRE-NOM-DE-FICHIER.jpg"  // ← Changez ici
  alt="Mohamed" 
  className="hero-image"
/>
```

**Dans `src/components/About.jsx`** (ligne ~30) :
```jsx
<img 
  src="/images/VOTRE-NOM-DE-FICHIER.jpg"  // ← Changez ici
  alt="About Mohamed" 
  className="about-image"
/>
```

---

### Si vos photos sont en PNG

Pas de problème ! Nommez-les :
- `photo-hero.png`
- `photo-about.png`

Et modifiez les extensions dans le code :
```jsx
src="/images/photo-hero.png"
src="/images/photo-about.png"
```

---

## 📐 Optimiser vos photos

### Outils en ligne gratuits :
1. **Redimensionner** : https://squoosh.app
2. **Compresser** : https://tinypng.com
3. **Recadrer** : https://crop-circle.imageonline.co (pour photo ronde)

### Conseils :
- Gardez vos photos sous 500 KB
- Format JPG pour photos
- Format PNG pour transparence (si besoin)
- Résolution : 72-96 DPI suffit pour le web

---

## ❓ Questions fréquentes

**Q : Mes photos n'apparaissent pas ?**
- Vérifiez que les noms sont exacts : `photo-hero.jpg` et `photo-about.jpg`
- Vérifiez qu'elles sont dans `public/images/`
- Relancez le serveur (`Ctrl+C` puis `npm run dev`)

**Q : Une seule photo apparaît ?**
- Vérifiez que vous avez bien les 2 fichiers
- Vérifiez les noms de fichiers

**Q : La qualité est mauvaise ?**
- Utilisez des photos en plus haute résolution
- Minimum 400x400 pour hero, 400x500 pour about

**Q : Puis-je utiliser la même photo pour les deux ?**
- Oui ! Copiez simplement la même photo 2 fois avec les 2 noms différents

---

## 🎨 Alternatives

Si vous n'avez pas de photos :
1. Utilisez un avatar généré : https://avatar.iran.liara.run/public
2. Créez un avatar sur : https://www.avatarmaker.com
3. Photo de profil GitHub ou LinkedIn

---

**Besoin d'aide ?** Consultez le README.md dans le dossier `public/images/`
