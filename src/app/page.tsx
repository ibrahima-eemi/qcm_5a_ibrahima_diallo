// src/app/page.tsx
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Introduction à l’Accessibilité Web',
    excerpt: 'Découvrez pourquoi l’accessibilité est cruciale pour rendre le web utilisable par tous.',
    href: '/articles/introduction-accessibilite',
    imageSrc: '/images/accessibilite-web.jpg',
  },
  {
    id: 2,
    title: '10 Bonnes Pratiques pour un Site Accessible',
    excerpt: 'Adoptez ces bonnes pratiques pour améliorer l’accessibilité de votre site.',
    href: '/articles/bonnes-pratiques-accessibilite',
    imageSrc: '/images/bonnes-pratiques.jpg',
  },
  {
    id: 3,
    title: 'Accessibilité et SEO : Un Duo Gagnant',
    excerpt: 'Comprenez comment l’accessibilité améliore aussi votre référencement.',
    href: '/articles/accessibilite-et-seo',
    imageSrc: '/images/seo-accessibilite.jpg',
  },
  {
    id: 4,
    title: 'Les ARIA Roles : Bonnes Pratiques',
    excerpt: 'Apprenez à utiliser les rôles ARIA pour améliorer l’accessibilité de vos applications web.',
    href: '/articles/aria-roles-pratiques',
    imageSrc: '/images/aria-roles.jpg',
  },
  {
    id: 5,
    title: 'Tester l’Accessibilité avec des Outils Gratuits',
    excerpt: 'Découvrez les meilleurs outils pour tester l’accessibilité de votre site sans frais.',
    href: '/articles/outils-gratuits-accessibilite',
    imageSrc: '/images/outils-gratuits.jpg',
  },
  {
    id: 6,
    title: 'Accessibilité des Formulaires : Ce qu’il faut savoir',
    excerpt: 'Assurez-vous que vos formulaires soient compréhensibles et utilisables par tous.',
    href: '/articles/accessibilite-formulaires',
    imageSrc: '/images/formulaires-accessibles.jpg',
  },
  {
    id: 7,
    title: 'Créer un Menu Accessible',
    excerpt: 'Les éléments clés pour concevoir des menus faciles à naviguer pour tous.',
    href: '/articles/menu-accessible',
    imageSrc: '/images/menu-accessible.jpg',
  },
  {
    id: 8,
    title: 'Accessibilité Mobile : Bonnes Pratiques',
    excerpt: 'Améliorez l’accessibilité de vos applications mobiles avec ces conseils.',
    href: '/articles/accessibilite-mobile',
    imageSrc: '/images/accessibilite-mobile.jpg',
  },
  {
    id: 9,
    title: 'Personnes en Situation de Handicap : Comment concevoir avec empathie',
    excerpt: 'Adoptez une approche centrée sur l’utilisateur pour concevoir des expériences accessibles.',
    href: '/articles/conception-empathie',
    imageSrc: '/images/conception-empathie.jpg',
  },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-8 transition-colors duration-300">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Blog sur l'Accessibilité
        </h1>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          Explorez des articles et des conseils pour rendre le web plus accessible.
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="relative p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-lg focus-within:shadow-lg"
              tabIndex={0}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={article.imageSrc}
                  alt={`Illustration de l'article "${article.title}"`}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="rounded-lg opacity-60 hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
                  <Link
                    href={article.href}
                    aria-label={`Lire l'article : ${article.title}`}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-300"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; 2024 Blog Accessibilité. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Home;