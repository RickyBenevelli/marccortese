import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'
import ContactForm from '@/components/ContactForm'

import imageBackground from '@/public/images/Production.webp'

const Production = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

            <PageTitle>Production</PageTitle>

            <p className='text-base md:text-lg py-5'>
                {locale == 'en' ? (
                    <>
                    Do you have a great 'hook' for a song that you are having trouble developing? Maybe you have a song that you want to add instrumentation to? Or maybe you just want to have someone produce a beat from scratch that will be all yours?
                    <br />
                    <br />
                    Well, if you find yourself in any of these scenarios you are in the right place!
                    <br />
                    <br />
                    Services I offer:
                    </>
                ):
                (
                    <>
                    Hai bisogno di aiuto nella creazione dei tuoi brani? Hai un testo con un’idea di melodia che necessita di un arrangiamento? O forse vuoi un beat su cui puoi scrivere e farlo tutto tuo?
                    <br />
                    <br />
                    Bene se è così allora sei nel posto giusto!
                    <br />
                    <br />
                    Servizi che offro:
                    </>
                )} 
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                {locale == 'en' ? (
                    <h2>Arrangement</h2>
                ) : (
                    <h2>Arrangiamenti</h2>
                )}
            </div>
            
            <p className='text-base md:text-lg py-5'>
            {
                locale == 'en' ? (
                    <>
                    If you have a partially formed idea for a song I will help get you past your writers block! For example, you may have a song that is lacking a bridge. In that case you will send me a recording of the melody and the chord structure after which I will work with you to come up with different options for a potential bridge until we strike magic! All publishing rights for the song will remain 100% yours!
                    </>
                    ) : (
                    <>
                    Se hai un'idea per una canzone, ti aiuterò a superare il blocco dello scrittore! Potresti ad esempio avere in mente una canzone a cui manca un bridge. In tal caso lavoreremo insieme fino a che non sarai soddisfatto completamente del lavoro. Tutti i diritti di pubblicazione della canzone rimarranno tuoi al 100%!
                    </>
                    )
            }
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                {locale == 'en' ? (
                    <h2>Lyrics</h2>
                ) : (
                    <h2>Testi</h2>
                )
                }
            </div>
            
            <p className='text-base md:text-lg py-5'>
                {locale == 'en' ? (
                    <>
                    Do you have a song with a killer melody that you can't find words for? You will send me a recording of the song with your melody of choice and I will write lyrics for you. It is preferable to supply me with a theme to write about as well, but in the case that you can't think of one I will think it up myself! All publishing rights for the song will remain 100% yours!
                    </>
                ):(
                    <>
                    Hai una canzone con una melodia che pensi possa essere la prossima hit ma non riesci a trovare le parole? Basta che mi invii una registrazione della melodia e penserò io a scrivere il testo per te. È preferibile che tu mi fornisca anche un tema su cui scrivere, ma nel caso in cui non te ne venga in mente uno penserò anche a quello io! Tutti i diritti di pubblicazione della canzone rimarranno tuoi al 100%!
                    </>
                )
                }
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                {locale == 'en' ? (
                    <h2>Instrumentation</h2>
                ) : (
                    <h2>Aggiunta strumenti</h2>
                )
                }
            </div>
            
            <p className='text-base md:text-lg py-5'>
                {
                locale == 'en' ? (
                    <>
                    I will record and add any of the following instruments to your song: acoustic guitar, electric guitar, electric bass, synthesiser, percussion, drums and various others. I play all these instruments on my own songs and I'd be happy to add any one of them to yours!
                    </>
                ):(
                    <>
                    Questi sono gli strumenti che posso registrare e aggiungere alla tua canzone: chitarra acustica, chitarra elettrica, basso elettrico, sintetizzatore, percussioni, batteria. Suono tutti questi strumenti nelle mie canzoni e sarei felice di aggiungerne uno di questi alle tue! Se volessi uno strumento che non è compreso nella lista non esitare comunque a chiedere e io cercherò qualcuno che lo registri per te!
                    </>
                )
                }
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                {
                locale == 'en' ? (
                    <h2>Recording</h2>
                ):(
                    <h2>Registrazione</h2>
                )}
            </div>
            
            <p className='text-base md:text-lg py-5'>
                {
                locale == 'en' ? (
                    <>
                    If you are in/around Venice Italy, I have a recording studio on site. For those of you looking to record vocals/instrumentation of any kind please write me to book a time slot.
                    </>
                ):(
                    <>
                    Se sei delle zone attorno a Venezia o sei disposto a venire a Venezia ho uno studio di registrazione. Se sei interessato a registrare la voce e/o strumenti di qualsiasi tipo scrivimi per prenotare una sessione di registrazione.
                    </>
                )}
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Vocals</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
                {locale == 'en' ? (
                    <>
                    Have you heard my golden voice ;) and thought to yourself - man, I need that voice on one of my tunes!! I will sing lead vocals, background vocals, voiceovers, etc. into my trusty Audio Tecnica AT4040 condenser mic! Also, if you are looking for female backing vocals I can organize to have them recorded with the talented singers that I collaborate with on a regular basis in my studio.
                    </>
                ):(
                    <>
                    Hai sentito la mia voce stupenda ;) e hai pensato: “Hey ma io ho bisogno di quella voce in uno dei miei brani!!” Posso cantare per te voce solista, voci di sottofondo, voci fuori campo, ecc. nel mio microfono a condensatore Audio Tecnica AT4040! Inoltre, se stai cercando cori femminili, posso organizzarmi per farli registrare a delle talentose cantanti con cui collaboro regolarmente nel mio studio.
                    </>
                )
                }
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Beats</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
                {locale == 'en' ? (
                    <>
                    Do you need a beat, a backing track, or a full fledged song? I will craft one specifically for you based on your needs and requirements. Once I make the track that suits your purpose the rights to the song will remain 100% yours!
                    </>
                ):(
                    <>
                    Hai bisogno di un ritmo, una base musicale o una canzone su cui cantare? Creerò un beat appositamente per te in base alle tue esigenze e i tuoi requisiti. Una volta creata la tua traccia, i diritti sulla canzone rimarranno tuoi al 100%!
                    </>
                )}
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                {
                locale == 'en' ? (
                    <h2>Lessons</h2>
                ):(
                    <h2>Lezioni</h2>
                )}
            </div>
            
            <p className='text-base md:text-lg py-5'>
            {
                locale == 'en' ? (
                    <>
                        1- to -1 lessons.
                        <br />
                        Logic X pro, Mixing, Mastering, Music Production, Songwriting.
                        <br />
                        30 euros per hour or 50 euros for a two hour block.
                        <br />
                        <br />
                        Most of these services are subjective and the prices vary greatly depending on the situation. For more information on the process get in touch with me directly to discuss your idea.
                    </>
                ):(
                    <>
                    Lezioni singole.
                    <br />
                    Logic X pro, Mixing, Mastering, Produzione musicale, scrittura.
                    <br />
                    30 euro all’ora o 50 euro per due ore.
                    <br />
                    <br />
                    Siccome molti dei servizi hanno numerose variabili, i prezzi variano di situazione in situazione. Per maggiori informazioni contattami attraverso l’apposito form e ci metteremo d’accordo di persona per discutere la tua idea.
                    </>
                )
            }
            </p>
            
            {
                locale == 'en' ? (
                    <p className='pt-5 md:pt-10'>Contact me</p>
                ):(
                    <p className='pt-5 md:pt-10'>Contattami</p>
                )
            }
            <ContactForm />
        </div>
    </PageLayout>
  )
}

export default Production