# MarcCortese Site

Questo è il repository del sito web di Marc Cortese.

## Struttura

* components
* json
    * en.json
    * it.json
* pages
    * _app.jsx
    * _document.jsx
    * index.jsx
* public
* styles


## Development

Dopo avere inizializzato il progetto con `yarn create next-app`, ho aggiunto le opzioni per l'i18n.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
```

Ho trovato un modo per utilizzare il componente `Image` di Next.js per le immagini di sfondo:


```js
// index.js
export default function Home() {

  const { locale, locales, defaultLocale } = useRouter();
  return (
    <main className="relative flex h-screen w-screen overflow-hidden flex-col items-center justify-between">
      <div className='absolute inset-0'>
        <Image src={placeholder} alt="" className='w-full brightness-[0.9]' priority/>
      </div>

      <div className='flex flex-col max-w-xl w-full h-full items-center justify-between py-10 relative z-10 text-white'>

      </div>
    </main>
  )
}
```
Ho creato il file .gitignore e ho inizializzato il repository con `git init`.