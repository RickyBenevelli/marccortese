# MarcCortese Site

Official website of [Marc Cortese](marccortese.com).

## Tech Stack
This website is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). This site supports [i18n](https://nextjs.org/docs/pages/building-your-application/routing/internationalization): the default language is English, but Italian is also available.

[Nodemailer](https://nodemailer.com/) is used to send the content of a form to the email of the owner. The form is handled with [react-hook-form](https://www.react-hook-form.com/).

All the data of the website are stored in .json files in the `json` folder.

## How to admin the site


To add a new album, track, artist or article you need to edit the .json files in the `json` folder.

> Please, note that the data in artist.json, albums.json and tracks.json are linked together by the id of the artist, album and track. Make sure that the id matches in all the files.
### Add new artist

```json
// artist.json
[
  {
      "idArtist": "1",
      "name": "marc cortese",
      "tracks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
      "albums" : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  }
]
```

### Add new album

```json
// albums.json
[
  {
      "idAlbum" : "1",
      "titleAlbum" : "suspicious issues",
      "cover" : "/albums/suspicious-issues.webp",
      "date" : "2022-01-07",
      "tracks": ["1"]
  }
]
```
### Add new track
```json
// tracks.json
[
  {
      "idTrack": "1",
      "title": "suspicious issues",
      "producer": "marc cortese, Notorious CZR",
      "lirycs": "marc cortese",
      "social" : {
          "spotify": "https://open.spotify.com/track/56PG9CWyIu3svT99rQs9kJ?si=c1e153c0bbf740a8",
          "apple": "https://music.apple.com/it/album/suspicious-issues/1601830088?i=1601830090",
          "youtube": "https://music.youtube.com/watch?v=ZzauRCKcyfs&feature=share",
          "deezer" : "https://deezer.page.link/54NG3su8zfafy5s6A"
      }
  },
]
```

### Add new article
```json
[
  {
      "title": "There is no music production without the artist",
      "date": "2023-04-28",
      "cover": "/images/Error.webp",
      "slug": "music-production-without-artist",
      "text": "<p>Inserire qui il testo stilizzato</p>"
  }
]
```


## Structure

```bash
.
├── README.md
├── components
│   ├── ArticleGridElement.jsx
│   ├── ArticlesGrid.jsx
│   ├── ContactForm.jsx
│   ├── DownloadButton.jsx
│   ├── Footer.jsx
│   ├── GalleryImage.jsx
│   ├── ImageBackground.jsx
│   ├── Layout.jsx
│   ├── NavBar.jsx
│   ├── PageLayout.jsx
│   ├── PageTitle.jsx
│   ├── WorkCard.jsx
│   ├── WorkGridElement.jsx
│   └── WorksGrid.jsx
├── jsconfig.json
├── json
│   ├── albums.json
│   ├── articles.json
│   ├── artists.json
│   ├── menu.json
│   └── tracks.json
├── lib
│   ├── api.js
│   └── nodemailer.js
├── mailtemplate.html
├── next-sitemap.config.js
├── next.config.js
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   ├── api
│   │   └── contact.js
│   ├── article
│   │   └── [slug].js
│   ├── artists
│   │   └── [idArtist].js
│   ├── blog.js
│   ├── contacts.js
│   ├── cookie.js
│   ├── index.js
│   ├── master.js
│   ├── media.js
│   ├── mix.js
│   ├── privacy.js
│   ├── production.js
│   ├── works
│   │   └── [idAlbum].js
│   └── works.js
├── postcss.config.js
├── public
│   ├── MarcCortese.otf
│   ├── Press Kit Marc Cortese - English.pdf
│   ├── Press Kit Marc Cortese.pdf
│   ├── about
│   │   ├── 1.webp
│   │   ├── 2.webp
│   │   └── 3.webp
│   ├── albums
│   │   ├── comparse.webp
│   │   └── ...
│   ├── favicon
│   │   └── ...
│   ├── icons
│   │   └── ...
│   ├── images
│   │   ├── About.webp
│   │   └── ...
│   ├── media
│   │   ├── acc.webp
│   │   └── ...
│   ├── robots.txt
│   └── sitemap.xml
├── styles
│   └── globals.css
├── tailwind.config.js
└── yarn.lock

17 directories, 122 files
```