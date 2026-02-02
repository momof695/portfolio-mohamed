# 📸 Dossier Images

## Comment ajouter vos photos

### 1. Préparez vos photos
- **Photo Hero** (photo principale ronde) : `photo-hero.jpg`
  - Dimensions recommandées : 400x400px minimum
  - Format : JPG ou PNG
  - Idéalement : photo de profil, portrait

- **Photo About** (section À propos) : `photo-about.jpg`
  - Dimensions recommandées : 400x500px minimum
  - Format : JPG ou PNG
  - Idéalement : photo professionnelle ou en situation

### 2. Placez vos photos ici
Copiez vos photos dans ce dossier (`public/images/`) avec exactement ces noms :
- `photo-hero.jpg`
- `photo-about.jpg`

### 3. Lancez le projet
```bash
npm run dev
```

Vos photos apparaîtront automatiquement ! ✨

---

## 🎨 Conseils pour de belles photos

### Photo Hero (ronde)
✅ Photo de face, bien éclairée
✅ Fond uni ou flou
✅ Cadrage centré sur le visage
❌ Éviter les photos trop sombres ou floues

### Photo About
✅ Photo professionnelle
✅ Contexte : bureau, ordinateur, environnement tech
✅ Bonne résolution
❌ Éviter les photos trop décontractées

---

## 🔄 Changer les noms de fichiers

Si vos photos ont d'autres noms (ex: `ma-photo.png`), vous pouvez :

**Option 1** : Renommer vos fichiers en `photo-hero.jpg` et `photo-about.jpg`

**Option 2** : Modifier les chemins dans le code :
- Fichier : `src/components/Hero.jsx` (ligne ~20)
- Fichier : `src/components/About.jsx` (ligne ~30)

Changez `/images/photo-hero.jpg` par `/images/votre-nom-de-fichier.jpg`

---

**Note** : Les fichiers dans le dossier `public` sont accessibles directement via l'URL `/images/...`
