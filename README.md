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

Ho creato una funzione per gestire i l'invio della http request.
```js
// lib/api.js
export const sendContactForm = async (data) => fetch('/api/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if(!res.ok) {
            console.log("ERRORE IN RISPOSTA AL CLIENT")
            throw new Error("Failed to send email")
        }
        return res.json()
    }
    )
    
```

L'endpoint  `/api/contact` gestisce la richiesta http e invia l'email.
```js
import { transporter, mailOptions } from "@/lib/nodemailer";

const handler = async(req, res) => {

  if (req.method === 'POST') {

    const data = req.body;
    // Check if the data is valid
    if (!data.name || !data.email) {
      console.log('DATA NOT VALID')
      return res.status(400).json({ message: 'Bad request - data not valid' })
    }

    try {
      console.log(data)
      await transporter.sendMail({
        ...mailOptions,
        text: "This is text string",
        html: `<div><p>Page: ${data.page}</p><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p></div>`
      })

      return res.status(200).json({ message: 'Success' })
    }
    catch (error) {
      console.log(error)
      console.log('ERROR SENDING EMAIL')
      return res.status(400).json({ message: error.message })
    }

  }


  console.log('NOT POST')
  return res.status(400).json({ message: 'Bad request - not post' })
}

export default handler
```

Nel file `nodemailer.js` ho importato il modulo `nodemailer` e ho creato un oggetto `transporter` per inviare l'email.
```js
import nodemailer from 'nodemailer';



export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: 'New message from your website',
    text: 'You have a new message from your website'
};
```

Ho creato un file `.env.local` per salvare le credenziali di accesso al mio account gmail. Questo file non verrà mai caricato su github.

Le variabili salvate sul file `.gitignore` sono: `EMAIL=`, `EMAIL_PASSWORD=`, `EMAIL_TO=`


Ho scoperto che quando di utilizza getStaticPath, la struttura di ritorno deve essere quella. Il valore di `params` deve essere un oggetto con chiave uguale al nome del file. Utilizzo `locales` per generare le pagine in tutte le lingue.
Da notare l'utilizzo di `flat()` per trasformare un array di array in un array semplice.

```js
// works/[idAlbum].js
export async function getStaticPaths({locales}) {
  const albumsId = albums.map((album) => ( locales.map((locale) => ({ params: { idAlbum: album.idAlbum}, locale})))).flat();
  
  return {
    paths: albumsId,
    fallback: false,
  };
}
```


## IMPORTANTE:
Ho aggiunto il campo `tracks` agli artisti. Bisognerà verificare che tutte le tracce di un artista siano contenute in quell'array. Anche quelle presenti in un album. Questo serve per consentire la collaborazione fra artisti ad un solo pezzo e non ad un intero album. 