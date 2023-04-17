# MarcCortese Site

Questo è il repository del sito web di Marc Cortese.

## Struttura

* components
* json
    * en.json
    * it.json
* lib
* pages
    * _app.jsx
    * _document.jsx
    * index.jsx
* public
    * favicon
    * icons
    * images
        * _(section images)_
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


Ho aggiunto un componente per impostare un'immagine come sfondo:
```js
// ImageBackground.jsx
const ImageBackground = ({children}) => {
  return (
    <section className="relative flex  w-screen  flex-col items-center justify-between">
      <div className='absolute inset-0'>
        <Image src={placeholder} alt="" fill className='w-full brightness-[0.9] object-cover' sizes="100vw" style={{
            objectFit: 'cover',
          }} priority/>
      </div>

      <div className='h-full max-w-[1240px] w-full m-auto flex flex-col items-start pt-40 relative z-10 text-white'>
        {children}
      </div>
    </section>
  )
}

export default ImageBackground
```

Ho creto un PageLayout per gestire la struttura delle pagine:
```js
// PageLayout.jsx
const PageLayout = ({children}) => {
  return (
    <section>
        <ImageBackground>
            <NavBar />
            {children}
            <Footer />
        </ImageBackground>
    </section>
  )
}

export default PageLayout
```

Ho aggiunto il componente (`DownloadButton`) per scaricare il file pdf. Ancora però non funziona.

Aggiunta la proprietà `backdrop-blur`alla Navbar così che sfochi quello che passa sotto. La NavBar l'ho poi spostata fuori dall' `ImageBackground`.

Ho aggiunto la proprietà `imageBackground` al componente `PageLayout` per poter impostare un'immagine di sfondo diversa per ogni pagina.

Creato il nuovo componente `Layout.jsx` per aggiungere la favicon e il titolo della pagina.

Creato il menù da mobile.

Ho rimosso le icone dei social che importavo da react-icons e le ho sostituite con icone svg.

```js
// index.js
    <Link href={"/facebook"}>
        <FaFacebook className='socialIcon'/>
        <Image src={facebook} alt='Facebook' className='socialIcon'/>
    </Link>
```

Ho provato ad aggiungere il font Montserrat ma non funziona correttamente. Dovrò sistemarlo.

Abbozzate le altre pagine. 

Aggiunti i social anche al Footer. 


Creo le pagine dei Form. 

`yarn add react-hook-form` per gestire i form.

`yarn add nodemailer` per inviare email.

# BUGS:
- [ ] nella hommepage mettere tutte le dimensioni in funzione dell'altezza.
- [ ] controllare se fa correttamente il change della location
- [ ] sistemare font Montserrat