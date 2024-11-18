# QCM Accessibilité et Next.js

## Instructions
- Cochez les cases correspondant à vos réponses en remplaçant [ ] par [x]
- Les questions à choix multiples sont précisées
- Compléter le document et l'envoyer à l'adresse mail noelie.roux2@eemi.com
- Prénom Nom : Ibrahima DIALLO

## 1. Fondamentaux de l'accessibilité

### 1.1 Bases HTML et ARIA

1. Quel attribut est essentiel pour rendre une image accessible dans Next.js ?
- [ ] a) src
- [x] b) alt
- [ ] c) title
- [ ] d) aria-label

2. Comment définit-on correctement le titre d'une page dans Next.js ?
- [ ] a)
```javascript
export default function Page() {
  return <h1>Mon titre</h1>
}
```

- [x] b)
```javascript
import Head from 'next/head'
export default function Page() {
  return (
    <Head>
      <title>Mon titre</title>
    </Head>
  )
}
```

- [ ] c)
```javascript
export default function Page() {
  useEffect(() => {
    document.title = "Mon titre"
  }, [])
}
```

- [ ] d)
```javascript
<meta name="title" content="Mon titre" />
```

3. Quels éléments HTML5 sont considérés comme des landmarks ? (plusieurs réponses possibles)
- [x] a) `<header>`
- [ ] b) `<div>`
- [x] c) `<nav>`
- [x] d) `<main>`
- [ ] e) `<span>`
- [x] f) `<footer>`

4. Quel est est la meilleure façon d'afficher un groupe de champs de formulaire liés ?
- [ ] a) role="group"
- [ ] b) role="fieldset"
- [ ] c) role="form"
- [x] d) Utiliser la balise `<fieldset>` avec `<legend>`

5. Comment indiquer correctement une abréviation accessible ?
- [x] a) `<abbr title="World Wide Web">WWW</abbr>`
- [ ] b) `<acronym>WWW</acronym>`
- [ ] c) `<span aria-label="World Wide Web">WWW</span>`
- [ ] d) `<abbr aria-label="World Wide Web">WWW</abbr>`

### 1.2 Navigation et Focus

6. Quelle méthode est correcte pour gérer le focus après une navigation dynamique ?
- [ ] a)
```javascript
useEffect(() => {
  document.querySelector('main').focus()
}, [])
```
- [ ] b)
```javascript
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
```
- [x] c)
```javascript
useEffect(() => {
  const mainContent = document.getElementById('main-content')
  mainContent?.focus()
  mainContent?.scrollIntoView()
}, [router.asPath])
```
- [ ] d)
```javascript
const handleClick = () => {
  router.push('/page')
  setTimeout(() => document.body.focus(), 100)
}
```

7. Comment implémenter correctement un skip link ?
- [x] a)
```javascript
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4">
  Skip to content
</a>
```
- [ ] b)
```javascript
<button onClick={() => document.getElementById('main').focus()}>
  Skip to content
</button>
```
- [ ] c)
```javascript
<a href="#main" tabIndex={-1}>Skip to content</a>
```
- [ ] d)
```javascript
<Link href="#main" passHref>Skip to content</Link>
```
8. Quelle est la bonne pratique pour les liens ouvrant dans un nouvel onglet ? (plusieurs réponses possibles)
- [ ] a) `<a href="url" target="_blank">`
- [x] b) `<a href="url" target="_blank" rel="noopener noreferrer">`
- [ ] c) `<a href="url" target="_blank" aria-label="opens in new tab">`
- [x] d) `<a href="url" target="_blank" rel="noopener noreferrer" aria-label="opens in new tab">`

### 1.3 Sémantique et Structure

9. Quelle est la meilleure pratique pour structurer une page article ?
- [ ] a)
```javascript
<div>
  <h1>Titre</h1>
  <div className="content">
    <p>Contenu</p>
  </div>
</div>
```
- [x] b)
```javascript
<article>
  <h1>Titre</h1>
  <div>
    <p>Contenu</p>
  </div>
</article>
```
- [ ] c)
```javascript
<article>
  <header>
    <h1>Titre</h1>
    <time dateTime="2024-01-01">1er Janvier 2024</time>
  </header>
  <main>
    <p>Contenu</p>
  </main>
  <footer>
    <p>Auteur: John Doe</p>
  </footer>
</article>
```
- [ ] d)
```javascript
<main>
  <h1>Titre</h1>
  <section>
    <p>Contenu</p>
  </section>
</main>
```
10. Comment structurer correctement les niveaux de titres ?
- [x] a) Utiliser h1-h6 dans l'ordre sans sauter de niveau
- [ ] b) Utiliser uniquement h1 et h2 pour plus de simplicité
- [ ] c) Utiliser les niveaux selon l'importance visuelle
- [ ] d) Commencer chaque section par un h1

## 2. Composants React Accessibles

### 2.1 Formulaires

11. Quelle est la meilleure implémentation pour un champ de formulaire accessible ?
- [ ] a)
```javascript
<input 
  type="text" 
  name="username" 
  id="username"
  aria-label="Username"
/>
```
- [x] b)
```javascript
<div>
  <label htmlFor="username">Username</label>
  <input 
    type="text" 
    name="username" 
    id="username"
    aria-describedby="username-help"
  />
  <span id="username-help">Must be at least 3 characters</span>
</div>
```
- [ ] c)
```javascript
<div>
  <span>Username</span>
  <input 
    type="text" 
    name="username"
    aria-label="Username"
  />
</div>
```
- [ ] d)
```javascript
<label>
  Username
  <input type="text" name="username" />
</label>
```
### 2.2 Composants Interactifs

12. Quelle est la meilleure implémentation pour une modale accessible ? (plusieurs réponses possibles)
- [ ] a)
```javascript
<div className="modal">
  <div className="modal-content">
    <h2>Titre</h2>
    <button onClick={onClose}>Fermer</button>
  </div>
</div>
```
- [x] b)
```javascript
<div 
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">Titre</h2>
  <button onClick={onClose}>Fermer</button>
</div>
```
- [ ] c)
```javascript
<dialog
  ref={modalRef}
  aria-labelledby="modal-title"
  onClose={onClose}
>
  <h2 id="modal-title">Titre</h2>
  <button onClick={onClose}>Fermer</button>
</dialog>
```
- [x] d)
```javascript
<Portal>
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    className="modal"
  >
    <div className="modal-content">
      <h2 id="modal-title">Titre</h2>
      <button 
        onClick={onClose}
        aria-label="Fermer"
      >×</button>
      <div className="modal-body">Contenu</div>
    </div>
  </div>
</Portal>
```
13. Comment implémenter un menu déroulant accessible ?
- [ ] a)
```javascript
<div>
  <button onClick={toggleMenu}>Menu</button>
  {isOpen && (
    <ul>
      <li><a href="#1">Option 1</a></li>
      <li><a href="#2">Option 2</a></li>
    </ul>
  )}
</div>
```
- [ ] b)
```javascript
<div role="menu">
  <button role="menuitem" onClick={toggleMenu}>Menu</button>
  {isOpen && (
    <ul role="menu">
      <li role="menuitem"><a href="#1">Option 1</a></li>
      <li role="menuitem"><a href="#2">Option 2</a></li>
    </ul>
  )}
</div>
```
- [x] c)
```javascript
<div>
  <button 
    aria-haspopup="true"
    aria-expanded={isOpen}
    onClick={toggleMenu}
  >
    Menu
  </button>
  {isOpen && (
    <ul
      role="menu"
      aria-labelledby="menu-button"
    >
      <li role="menuitem">
        <a href="#1">Option 1</a>
      </li>
      <li role="menuitem">
        <a href="#2">Option 2</a>
      </li>
    </ul>
  )}
</div>
```
- [ ] d)
```javascript
<nav>
  <button onClick={toggleMenu}>Menu</button>
  <ul hidden={!isOpen}>
    <li><a href="#1">Option 1</a></li>
    <li><a href="#2">Option 2</a></li>
  </ul>
</nav>
```
### 2.3 Gestion des erreurs et feedback

14. Quelle est la meilleure façon d'annoncer une erreur de formulaire ?
- [ ] a)
```javascript
{error && <div className="error">{error}</div>}
```
- [x] b)
```javascript
{error && (
  <div 
    role="alert"
    className="error"
  >
    {error}
  </div>
)}
```
- [ ] c)
```javascript
{error && (
  <div 
    aria-live="polite"
    className="error"
  >
    {error}
  </div>
)}
```
- [ ] d)
```javascript
<div 
  role="alert"
  aria-live="assertive"
  className="error"
>
  {error}
</div>
```
15. Comment gérer les états de chargement de manière accessible ?
- [ ] a)
```javascript
{isLoading && <div>Loading...</div>}
```
- [x] b)
```javascript
<div 
  role="status"
  aria-busy={isLoading}
>
  {isLoading ? 'Loading...' : 'Content'}
</div>
```
- [ ] c)
```javascript
<div aria-live="polite">
  {isLoading && <span>Loading...</span>}
</div>
```
- [ ] d)
```javascript
<div 
  role="status"
  aria-live="polite"
  className="sr-only"
>
  {isLoading ? 'Loading content' : 'Content loaded'}
</div>
```
## 3. Tests et Monitoring

16. Quels outils sont recommandés pour tester l'accessibilité dans Next.js ? (plusieurs réponses possibles)
- [ ] a) Jest avec @testing-library/jest-dom
- [x] b) Cypress avec cypress-axe
- [x] c) ESLint avec eslint-plugin-jsx-a11y
- [x] d) Lighthouse CI
- [x] e) WAVE
- [x] f) Pa11y

17. Quelle est la meilleure pratique pour les tests d'accessibilité automatisés ?
- [ ] a) Tester uniquement avec des lecteurs d'écran
- [x] b) Utiliser une combinaison d'outils automatisés et des tests manuels
- [ ] c) Se fier uniquement aux tests automatisés
- [ ] d) Tester manuellement avec le clavier

18. Comment intégrer les tests d'accessibilité dans une CI/CD ? (plusieurs réponses possibles)
- [ ] a)
```javascript
// package.json
{
  "scripts": {
    "test:a11y": "jest",
    "build": "next build"
  }
}
```
- [x] b)
```javascript
// .github/workflows/a11y.yml
name: Accessibility Tests
on: [push]
jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Run pa11y
        run: npm run test:a11y
```
- [ ] c)
```javascript
// next.config.js
module.exports = {
  eslint: {
    dirs: ['pages', 'components'],
  },
}
```
- [x] d)
```javascript
// cypress/e2e/a11y.cy.js
describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })
  
  it('Has no detectable a11y violations', () => {
    cy.checkA11y()
  })
})
```
## 4. Patterns Avancés

19. Quelle est la meilleure approche pour gérer le focus dans une Single Page App ?
- [ ] a)
```javascript
const router = useRouter()
useEffect(() => {
  document.body.focus()
}, [router.asPath])
```
- [ ] b)
```javascript
const FocusHandler = ({ children }) => {
  const ref = useRef(null)
  
  useEffect(() => {
    ref.current?.focus()
  }, [])
  
  return (
    <main 
      ref={ref}
      tabIndex={-1}
      outline="none"
    >
      {children}
    </main>
  )
}
```
- [ ] c)
```javascript
const useFocus = () => {
  const router = useRouter()
  useEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.focus()
      main.scrollIntoView()
    }
  }, [router.asPath])
}
```
- [x] d)
```javascript
function RouteChangeHandler() {
  const { events } = useRouter()
  
  useEffect(() => {
    const handleRouteChange = () => {
      const main = document.getElementById('main-content')
      if (main) {
        main.focus()
        main.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    events.on('routeChangeComplete', handleRouteChange)
    return () => events.off('routeChangeComplete', handleRouteChange)
  }, [events])
  
  return null
}
```
20. Comment implémenter un composant de toast accessible ?
- [ ] a)
```javascript
const Toast = ({ message }) => (
  <div className="toast">{message}</div>
)
```
- [ ] b)
```javascript
const Toast = ({ message }) => (
  <div 
    role="alert"
    aria-live="polite"
    className="toast"
  >
    {message}
  </div>
)
```
- [ ] c)
```javascript
const Toast = ({ message, type = 'info' }) => (
  <div 
    role="status"
    aria-live="polite"
    className={`toast toast-${type}`}
  >
    {message}
  </div>
)
```
- [x] d)
```javascript
const Toast = ({ message, type = 'info', onClose }) => (
  <div 
    role="alert"
    aria-live="assertive"
    className={`toast toast-${type}`}
  >
    <p>{message}</p>
    <button
      onClick={onClose}
      aria-label="Fermer la notification"
    >
      ×
    </button>
  </div>
)
```
## 5. Exercice pratique de code

Écrivez un composant Next.js accessible Accordion qui respecte les critères suivants :
- L'accordion doit pouvoir contenir plusieurs sections
- Chaque section doit avoir un en-tête et un contenu
- Un seul panneau peut être ouvert à la fois
- Doit être utilisable au clavier
- Doit être compatible avec les lecteurs d'écran
- Style visuel au choix mais doit avoir un indicateur visuel clair de l'état (ouvert/fermé)

Exemple d'utilisation attendu :
```javascript
<Accordion>
  <AccordionItem>
    <AccordionHeader>Section 1</AccordionHeader>
    <AccordionPanel>Contenu de la section 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader>Section 2</AccordionHeader>
    <AccordionPanel>Contenu de la section 2</AccordionPanel>
  </AccordionItem>
</Accordion>
```

Critères d'évaluation :

- Utilisation correcte des attributs ARIA (aria-expanded, aria-controls, etc.)
- Gestion correcte du focus et navigation clavier
- Structure des composants et props
- Gestion de l'état

## Bonus

21. Quelles sont les bonnes pratiques pour l'internationalisation accessible ? (plusieurs réponses possibles)
- [x] a) Utiliser l'attribut lang sur html
- [x] b) Gérer la direction du texte (RTL/LTR)
- [x] c) Traduire les attributs aria
- [ ] d) Adapter les landmarks selon la langue
- [x] e) Utiliser des polices adaptées à chaque langue

22. Comment optimiser les performances tout en maintenant l'accessibilité ? (plusieurs réponses possibles)
- [x] a) Lazy loading avec fallback accessible
- [x] b) Réduire le JavaScript initial
- [x] c) Optimiser les images avec bon alt
- [ ] d) Mettre en cache les ressources ARIA
- [x] e) Utiliser des Service Workers
