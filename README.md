# Révision étude de cas – Management de projet

App de révision pour l'étude de cas du bloc Management de projet (CESI) : **outils de management** (charte projet, WBS, planning / chemin critique) et **analyse de risque** (identifier, évaluer, traiter, re-quantifier, suivre).

## Contenu

- **Plan 2 h** : découpage de l'épreuve, checklist de la copie, progression
- **Cours** : charte, WBS + RACI, planning (PERT, marges, chemin critique, Gantt), analyse de risque
- **Méthodes** : chaque outil pas à pas avec exemple et exercice : PMP, SMART, OBS, WBS, RACI, PERT, Gantt
- **Flashcards** (37) et **Quiz** (26 questions expliquées)
- **Chemin critique** : réseaux générés au hasard, correction automatique, Gantt
- **Analyse de risque** : registre avec contrôle des oublis et matrice avant → après
- **Sujet blanc** : étude de cas ERP chronométrée avec corrigé (sujet fictif)

La progression est gardée dans le navigateur (localStorage). L'app marche hors ligne après la première visite.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt sur GitHub (par ex. `revision-management-projet`), public.
2. Envoie le contenu de ce dossier à la racine du dépôt :
   ```bash
   git init
   git add .
   git commit -m "App de révision"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/revision-management-projet.git
   git push -u origin main
   ```
   Ou sur github.com : **Add file → Upload files**, glisse tous les fichiers et le dossier `icons`.
3. Dans le dépôt : **Settings → Pages → Build and deployment**, Source **Deploy from a branch**, branche `main`, dossier `/ (root)`, **Save**.
4. Une minute plus tard, le site est sur `https://<ton-pseudo>.github.io/revision-management-projet/`.

## L'installer comme une app

- **Android (Chrome)** : ouvre le site → menu ⋮ → **Installer l'application**.
- **iPhone (Safari)** : bouton Partager → **Sur l'écran d'accueil**.
- **PC (Chrome / Edge)** : icône d'installation dans la barre d'adresse.

## Mettre à jour

Modifie `index.html`, puis dans `sw.js` change `revision-v1` en `revision-v2` (pour forcer le rafraîchissement du cache) avant de pousser.

## Structure

```
index.html            l'app complète (HTML, CSS, JS)
manifest.webmanifest  nom, couleurs, icônes de l'app installée
sw.js                 service worker (hors ligne)
icons/                icônes 180, 192, 512 et maskable
.nojekyll             évite le traitement Jekyll de GitHub Pages
```
