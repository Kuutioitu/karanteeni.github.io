import Link from 'next/link'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import AnchorHeading from '../components/anchor'

const COMMANDS = [
  '/peliaika (/pa, /playtime, näyttää peliaikasi)',
  '/playtimetop (/patop)',
  '/discord',
  '/sivut',
  '/säännöt',
  '/rankit',
  '/warnings (tarkistathan varoitustilanteesi!)',
  '/vote',
  '/dynmap hide (piilottaa pelaajan dynmapista)',
  '/dynmap show (palauttaa pelaajan takaisin dynmappiin)',
  '/spawn',
  '/warp(s)',
  '/tpa',
  '/tpahere',
  '/tpyes (/tpaccept)',
  '/tpno (/tpdeny)',
  '/rtp (random tp)',
  '/sethome {kodin_nimi}',
  '/delhome {kodin_nimi}',
  '/home {kodin_nimi}',
  '/back',
  '/party (partychat-opas)',
  '/mail read [<sivu>]',
  '/mail clear [<määrä>]',
  '/mail send <nimi> <viesti>',
  '/msg (/m, /message)',
  '/reply (/r)',
  '/quickshop (kauppa-arkkuopas)',
  '/bal',
  '/baltop',
  '/pay {pelaaja} {määrä}',
  '/trust {alueen_nimi} {pelaajan_nimi}',
  '/untrust {alueen_nimi} {pelaajan_nimi}',
  '/alue (näyttää tietoja alueesta)',
  '/rg i (näyttää tietoja alueesta)',
  '/lukitus add-member <nimi>',
  '/lukitus remove-member <nimi>',
  '/lukitus unlock',
  '/lukitus lock',
  '/lukitus public',
  '/lukitus private',
  '/lukitus add-global-whitelist',
  '/lukitus remove-global-whitelist',
  '/lukitus info',
  '/trash (/roskis /roskakori)',
  '/kms',
  '/sit',
  '/lemmikki (lemmikkiopas)',
  '/music',
  '/radio',
]

const CHAT_CODES = [
  { code: '*penni', emoji: '❂' },
  { code: '<3', emoji: '♥' },
  { code: '*biovaara', emoji: '☣' },
  { code: '*karanteeni', emoji: '☣' },
  { code: '*check', emoji: '✔' },
  { code: '*shrug', emoji: '¯\\_(ツ)_/¯' },
  { code: '*magic*', emoji: '*magic* (värjättynä)' },
  { code: 'owo', emoji: 'OωO' },
  { code: '*miekka / *sword', emoji: '🗡' },
  { code: '*jousipyssy / *bowi', emoji: '🏹' },
  { code: '*kirves / *axe', emoji: '🪓' },
  { code: '*atrain / *trident', emoji: '🔱' },
  { code: '*onki', emoji: '🎣' },
  { code: '*pottu / *potion / *taikajuoma', emoji: '🧪' },
  { code: '*kilpi / *shield', emoji: '🛡' },
  { code: '*ilo / *hymy / *happyface', emoji: '☺' },
  { code: '*suru / *sadface', emoji: '☹' },
  { code: '*hakku / *pikki / *pickaxe', emoji: '⛏' },
  { code: '*nuoliylös / *ylös / *up / *arrowup', emoji: '↑' },
  { code: '*nuolialas / *alas / *down / *arrowdown', emoji: '↓' },
  { code: '*nuolioikea / *oikea / *right / *arrowright', emoji: '→' },
  { code: '*nuolivasen / *vasen / *left / *arrowleft', emoji: '←' },
  { code: '*pääkallo / *kallo / *skull', emoji: '☠' },
  { code: '*tm / *trademark', emoji: '™' },
  { code: '*aurinko / *sun', emoji: '☀' },
  { code: '*sade / *rain', emoji: '🌧' },
  { code: '*salama / *lightning', emoji: '⚡' },
  { code: '*tähti1 / *star1', emoji: '⭐' },
  { code: '*tähti2 / *star2', emoji: '★' },
  { code: '*tähti3 / *star3', emoji: '☆' },
  { code: '*meteoriitti / *meteorite', emoji: '☄' },
  { code: '*rasti / *raksi / *cross', emoji: '✘' },
  { code: '*ruoka / *food', emoji: '🍖' },
  { code: '*laatikko_tyhjä / *box_empty', emoji: '☐' },
  { code: '*laatikko_check / *box_check', emoji: '☑' },
  { code: '*laatikko_raksi / *laatikko_rasti / *box_cross', emoji: '☒' },
  { code: '^2', emoji: '²' }
]

const CommandsList = () => (
  <ul className="wrappedlist">
    {COMMANDS.map((command, index) => (
      <li key={index}>
        <code>{command}</code>
      </li>
    ))}
  </ul>
)

const ChatCodesList = ({ chatCodes }) => (
  <ul>
    {chatCodes.map(({ code, emoji }, index) => (
      <li key={index}>
        <code>{code}</code> =&gt; {emoji}
      </li>
    ))}
  </ul>
)

const Video = ({ source }: { source: string }) => {
    if (source.endsWith('.gif')) {
        return (
            <div className="video gif">
                <img src={source}></img>
            </div>
        )
    }

    return (
        <div className="video">
            <video autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src={source} type="video/mp4" />
            </video>
        </div>
    )
}

const Image = ({ src }: { src: string }) => {
    return (
        <div className="image">
            <img src={src}></img>
        </div>
    )
}

const Feature = ({
  id,
  title,
  children
}: {
  id?: string
  title: string
  children: React.ReactNode
}) => {
  const computedId = id || title.toLowerCase().split(' ').join('_')
    return (
    <div className="feature">
      <AnchorHeading id={computedId} level={4}>
        {title}
      </AnchorHeading>
            {children}
        </div>
    )
}

const Ominaisuudet = () => {
    return (
        <Layout title="Ominaisuudet" description="Karanteenin omat ominaisuudet listattuna.">
            <Heading
                heading="Karanteenin Ominaisuudet"
                lead="Lue nämä huolella. Avaat itsellesi mielenkiintoisia pelimahdollisuuksia!"
            />

            <h2>Survivalin lisäominaisuudet</h2>
            <p>
                Suuri osa erityisistä toiminnoista, komennoista ja muista jutuista, jotka toimivat Karanteenin
                survivalissa
            </p>
            <Feature title="Valikko">
                <Image src="/feature/inventory.png" />
                <p>
                    Komennolla /valikko pääsee muuttamaan pieniä erinäköisiä Karanteenilla pelaamiseen vaikuttavia
                    asetuksia sekä käyttämään muita Karanteenin komentoja nopeasti.
                </p>
            </Feature>

            <Feature title="Äänestyslaatikot">
                <Video source="/feature/votecrates.mp4" />
                <p>Voit äänestää Karanteenia kerran päivässä kahdella eri sivustolla! Linkit löydät pelistä komennolla <code>/vote</code> ja karanteeni.net -etusivulta.</p>
                <p>Äänestämällä saat palkinnoksi 50 penniä survivaliin ja yhden äänestyslaatikon yhtä äänestyskertaa kohden, jotka voit käyttää Hub-palvelimella palvelinportaalien vieressä.</p>
                <p>Äänestyslaatikoista voit saada palkinnoksi heiteltäviä tiiliä (tämän tilalle on kehitteillä jotain uutta!), koristepäitä, pelaajapartikkeleita, taikamattopalikoita tai lisää äänestyslaatikoita!</p>
            </Feature>

            <Feature title="Partikkelit">
                <Video source="/feature/particles1.gif" />
                <p>
                    Komennolla /partikkelit (tai /particles tai /pp) pystyy ottamaan käyttöön erilaisia partikkeleita,
                    jotka seuraavat pelaajahahmoa.
                </p>
                <p>Partikkeleita voi saada uusista rankeista, palvelinkohtaisen peliajan kertymisen myötä, äänestyspalkintoina sekä erilaisista tapahtumista.</p>
            </Feature>
            <Feature title="Emeraldhissi">
                <Video source="/feature/emeraldvator.mp4" />
                <p>
                    Voit rakentaa toimivan hissin emerald blockeista. Hissit kytketään päälle redstonevirralla ja ne yltävät enintään 32 palikan päähän.
                    Hississä pääsee ylös hyppynäppäimellä ja alas kyykkynäppäimellä. </p>
            </Feature>

            <Feature title="Taikamatto">
                <Video source="/feature/magiccarpet.mp4" />
                <p>
                    Sisukas-rankista ylöspäin pelaajat voivat aktivoida taikamaton, jolla pystyy lentämään kuin Aladdin
                    konsanaan!
                </p>
                <p>
                    Matto aktivoituu komennolla <code>/mc</code>, ja sen ulkonäköä voi muokata komennolla
                    <code>/mc design</code>.
                </p>
                <p>
                    Rankit avaavat maton muokkaukseen lisää blockkeja. Katso aukeavat blockit{' '}
                    <Link href="rankit">rankit-sivulta</Link>.
                </p>
            </Feature>

            <Feature title="Koristepäät">
                <Video source="/feature/playerheads.mp4" />
                <p>Voit saada äänestyslaatikoista palkinnoksi koristepäitä, joita voit käyttää koristeluun survivalissa ja creativessa.</p>
                <p>
                    Kun olet ansainnut päitä, voit käyttää niitä ensiksi {' '}
                    <Link href="/reseptit#player_head">craftaamalla</Link> tai muuten hankkimalla pelaajan pään.
                    Tämän jälkeen sitä kädessä pitäessä tee komento <code>/pää</code>, joka avaa päävalikon,
                    josta voit valita päälle haluamasi tekstuurin.
                </p>
                <p>Voit muuttaa myös muuttaa pään tekstuuria samasta valikosta.</p>
            </Feature>

            <Feature title="Puun kaataminen">
                <Video source="/feature/woodchop.mp4" />
                <p>Puu kaatuu alhaalta ylös kokonaan, kunhan sen hakkaa kirveellä! Tämän voi estää hakkaamalla kyykyssä.</p>
                <p>(muistathan kasvattaa puut aina seikkaillessasi takaisin)</p>
            </Feature>

            <Feature title="Alueen suojaaminen">
                <p>
                    Ylläpito suojaa alueesi pyydettäessä. Kun alue on suojattu, alueen tiedot voi tarkastaa
                    <code>/alue</code>
                    -komennolla.
                </p>
                <p>
                    Voit lisätä alueeseesi jäseniä komennolla{' '}
                    <code>
                        /trust {'{'}alueen_nimi{'}'} {'{'}pelaajan_nimi{'}'}
                    </code>{' '}
                    ja poistaa jäseniä{' '}
                    <code>
                        /untrust {'{'}alueen_nimi{'}'} {'{'}pelaajan_nimi{'}'}
                    </code>
                </p>
                <p>
                    Jos kylässäsi on vähintään 10 asukasta, voit pyytää sille warppia <code>/warps</code> listaan. Myös kauppapaikat ja torit voivat saada warpin,
                    tällöin vaaditaan vähintään 10 kauppiasta.
               </p>
            </Feature>

            <Feature title="Rakentajan taikasauva">
                <Video source="/feature/builderswand.mp4" />
                <p>
                    Sisukas-rankista ylöspäin pelaajat voivat craftata{' '}
                    <Link href="/reseptit#builders_wand">Builders Wandin</Link>. Tämä työkalu auttaa suurien
                    rakennusten rakennuksessa!
                </p>
                <p>
                    Taikasauva toimii kun laitat sen pelaajan vasempaan käteen, ja rakennuspalikat oikeaan, tai
                    päinvastoin, jos hahmosi on vasenkätinen.
                </p>
                <p>
                    Taikasauvassa on neljä eri rakentamismuotoa. Muotojen välillä voi vaihdella lyömällä kyykyssä ilmaa
                    taikasauvan ollessa kakkoskädessä.
                </p>
                <p>Rakentamismuodot ovat:</p>
                <ul>
                    <li>
                        Wand of extend
                        <ul>
                            <li>Jatkaa valmista muotoa taso kerrallaan</li>
                        </ul>
                    </li>
                    <li>
                        Wand of levitation
                        <ul>
                            <li>Mahdollistaa palikoiden asettamisen ilmaan</li>
                        </ul>
                    </li>
                    <li>
                        Wand of tower
                        <ul>
                            <li>Rakentaa 1x1 torneja</li>
                        </ul>
                    </li>
                    <li>
                        Wand of nothingness
                        <ul>
                            <li>Rakentaa normaalisti. Toisin sanoen tämä muoto poistaa taikasauvan käytöstä.</li>
                        </ul>
                    </li>
                </ul>
            </Feature>

            <Feature title="Kuolinchestit">
                <Image src="/feature/deathchest.png" />
                <p>
                    Pelaajan kuollessa kaikki tavarat päätyvät pieneen arkkuun, jonka pelaaja voi noutaa kuolinpaikalta.
                </p>
                <p>Kukaan muu ei voi koskea toisen pelaajan kuolinchestiin.</p>
            </Feature>

            <Feature title="Arkkukaupat">
                <Video source="/feature/chestshop.mp4" />
                <p>
                    Pelaajien väliseen kauppaan työkaluna on arkkukaupat! Lyö arkkua tai tynnyriä kyykyssä ollessa tavaralla, jota haluat myydä,
                    jonka jälkeen kirjoita chattiin tavaran hinta, ja kauppa on valmis! Yhden kaupan luominen maksaa 10 penniä.
                </p>
                <ul>
                    <li>
                        Komennolla <code>/qs price &lt;uusi hinta&gt;</code> voit muuttaa tavaran hintaa.
                    </li>
                    <li>
                        Komennolla <code>/qs remove</code> voit poistaa kaupan.
                    </li>
                    <li>
                        Voit etsiä lähistöltä tiettyjä myytäviä esineitä komennolla <code>/qs find &lt;tavara&gt;</code> .
                    </li>
                </ul>
            </Feature>

            <Feature title="Arkkujen lukittuminen">
                <p>Laittaessasi arkun maahan menee se automaattisesti lukkoon.</p>
                <ul>
                    <li>
                        Halutessasi poistaa arkun lukituksen, katso sitä ja tee komento <code>/lukitus unlock</code>.
                    </li>
                    <li>
                        Halutessasi antaa arkkuun jollekkin oikeudet, katso arkkua ja tee komento
                        <code>/lukitus add-member &lt;pelaajan_nimi&gt;</code>
                    </li>
                    <li>
                        Halutessasi poistaa arkusta jonkin oikeudet, katso arkkua ja tee komento
                        <code>/lukitus remove-member &lt;pelaajan_nimi&gt;</code>
                    </li>
                    <li>
                        Voit tehdä lukituksista kaikille avonaisen, mutta ilman muokkaus-/rikkomisoikeuksia komennolla <code>/lukitus public</code>.
                    </li>
                    <li>
                        Voit antaa haluamallesi pelaajalle oikeudet suoraan kaikkiin sinun omistamiisi lukituksiin komennolla <code>/lukitus add-global-whitelist &lt;pelaajan_nimi&gt;</code>.
                    </li>
                </ul>
            </Feature>

            <Feature title="Mobien ja pelaajien kantaminen">
                <Video source="/feature/carrying.mp4" />
                <p>
                    Voit kantaa osaa mobeista ja pelaajia! Kannettavia ovat pääosin passiiviset, neutraalit ja vauvamobit. Voit aloittaa mobin kantamisen klikkaamalla sitä hiiren oikealla
                    napilla ja heittää sen pois kannosta vasemmalla klikkauksella.
                </p>
                <ul>
                    <li>
                        Kun sinulla on eläin kannossa, painovoimasi kasvaa, eli et voi hypätä kovin korkealle. Kanaa kantaessa puolestaan painovoimasi laskee, tiput hitaasti etkä ota fall damagea!
                    </li>
                    <li>
                        Voit kantaa pelaajia siten, että olet kyykyssä ja kaverisi klikkaa sinua hiiren oikealla napilla. Voit pinota myös useampia pelaajia torniksi!
                    </li>
                </ul>
            </Feature>

            <Feature title="Partychat">
                <p>Voit luoda partychatin itsellesi ja kavereillesi, jossa voitte helposti jutella keskenänne. Vain partyn jäsenet (ja ylläpito, mutta partychatissa voi keskustella vapaammin) näkevät partyn viestit.</p>
                <p>Voit kuulua myös useampaan partyyn yhtä aikaa, asettaa partylle pikaviestin etuliitteen, ja jopa säädellä partychatin värejä!</p>
                <ul>
                    <li>
                        Alkuun pääset luomalla partyn komennolla <code>/party create &lt;partyn_nimi&gt;</code>.
                    </li>
                    <li>
                        Voit kutsua kaverisi partyyn komennolla <code>/party invite &lt;pelaajan_nimi&gt; &lt;partyn_nimi&gt;</code>.
                    </li>
                    <li>
                        Kutsun voi hyväksyä komennolla <code>/party join &lt;partyn_nimi&gt;</code>.
                    </li>
                    <li>
                        Partychatin voi kytkeä päälle tai pois päältä komennolla <code>/partychat</code> tai <code>/pc</code>.
                    </li>
                    <li>
                        Voit myös lähettää viestin suoraan partychattiin komennolla <code>/partychat &lt;viesti&gt; </code>.
                    </li>
                    <li>
                        Voit vaihtaa partychatin värejä komennolla <code>/party set-chat-style &lt;väriteema&gt; </code>.
                    </li>
                    <li>
                        Asettamalla partyn pikaviestille etuliitteen komennolla <code>/party set-message-prefix &lt;"etuliite"&gt;</code> voit lähettää viestejä partyyn suoraan normaalichatista.
                        Jos prefiksi olisi "!", viesti "!Moi kamut" menisi suoraan partyyn: "Moi kamut".
                    </li>
                    <li>
                        Näet selityksen kaikista lopuista partykomennoista komennolla <code>/party</code>!
                    </li>
                </ul>
            </Feature>

            <Feature title="Armorstandien muokkaus">
                <Video source="/feature/armorstand.mp4" />
                <p>
                    Karanteenissa voi muokata armostandien asentoa. Asentojen välillä voi vaihdella klikkaamalla
                    armostandia kyykyssä oikealla klikillä.
                </p>
                <p>Saatavilla olevat asennot:</p>
                <ul>
                    <li>Tavallinen (minen oma)</li>
                    <li>Tavallinen, mutta lisätty kädet ja poistettu laatta</li>
                    <li>T-pose</li>
                    <li>Tavaran pito kädessä (näyttää ihan kivalta vaikkapa miekan kanssa)</li>
                    <li>Kävely/juoksu</li>
                    <li>Zombi</li>
                    <li>Dab</li>
                    <li>Facepalm</li>
                </ul>
            </Feature>

            <Feature title="Yön ohittaminen">
                <p>
                    Yöt voi ohittaa Karanteenissa uudella tavalla. Mitä useampi pelaaja on nukkumassa yön aikana, sitä
                    nopeammin yö kuluu ja aamu koittaa!
                </p>
            </Feature>

            <Feature title="Peseminen cauldronissa">
                <p>
                    Värjätyt villat ja sängyt voi pestä takaisin valkoiseksi samalla tavalla kuin bannerit. Klikkaa vedellä täytettyä cauldronia esineellä, jonka haluat pestä.
                    Voit pestä myös magma creamia limapalloiksi, mutta sitä tehdessä on pieni riski, että vesi muuttuu laavaksi!
                </p>
            </Feature>

            <Feature title="Ender dragonin munien kerääminen">
                <p>
                    Karanteenissa jokainen uudelleenkin spawnattu Ender dragon pudottaa Ender dragonin munan. Tästä
                    syystä Ender dragon on myös hankalampi spawnata uudelleen.
                </p>
                <p>
                    End crystalleilla on Karanteenissa vaikeampi craftrecipe. Sen näet{' '}
                    <Link href="reseptit#endcrystal">täältä</Link>
                </p>
            </Feature>

            <Feature title="Spawnerien kerääminen">
                <p>
                    Karanteenissa pystyy hakkaamaan mobspawnerit itselleen, mutta ne putoavat tyhjänä maahan. Jos haluat mobin säilyvän, riko spawner hakulla jossa on on Silk Touch
                    (silkkinen kosketus) -enchantti.
                </p>
                <p>Voit muuttaa spawnerin tyyppiä{' '}
                <Link href="reseptit#spawner">craftaamalla</Link>.</p>
                <p>Roihuja sisältäviä spawnereita ei voi kerätä.</p>
            </Feature>

            <Feature title="Näkymättömät itemframet">
                <Video source="/feature/invisiframe.mp4" />
                <p>Itemframet voi muuttaa pysyvästi näkymättömiksi heitettävillä näkymättömyyspotioneilla!</p>
            </Feature>

            <Feature title="Muut ominaisuudet">
                <p>Tässä lyhyesti pienempiä kivoja ominaisuuksia mitä meiltä löytyy!</p>
                <ul>
                    <li>
                        Voit virittää nappeja ja painelaattoja pysyvästi pohjaan right klikkaamalla niitä höyhenellä.
                    </li>
                    <li>
                        Voit luoda lätäköitä maahan heitettävillä vesipulloilla.
                    </li>
                    <li>
                        Keritylle lampaalle voi syöttää heinäpaalin, jolloin se kasvattaa villansa suoraan takaisin.
                    </li>
                    <li>
                        Tiiliä voi heittää! Ole kuitenkin varovainen, ne rikkovat ikkunoita ja sattuvat osuessaan sinuun.
                    </li>
                    <li>
                        Ruohoa hakatessa mullan päältä ruohon alla oleva multa korvautuu ruoholla! Voit estää tämän hakkaamalla kyykyssä.
                    </li>
                    <li>
                        Tavaroiden loppuessa ja rikkoutuessa serveri korvaa sinulle uuden käteen, jos sinulla vain on niitä inventoryssä. Erityisen hyödyllinen rakennellessa, ettei tarvitse palikoiden kädestä loppuessa avata inventoryä. Tämän saa halutessaan pois päältä
                        asetuksista.
                    </li>
                    <li>
                        Voit halutessasi kytkeä asetuksista päälle asetuksen, jolla voit avata arkkuja kylttien ja kehysten läpi.
                    </li>
                </ul>
            </Feature>


            <Feature title="Yleiset komennot" id="komennot">
        <p>
          Survivalissa toimii iso läjä komentoja jotka ovat pelaajilla auki
          Eloton-rankista asti!
        </p>
                <p>
          Rankkikohtaiset komennot ja ominaisuudet löytyvät{' '}
          <Link href="rankit">täältä</Link>.
                </p>
        <CommandsList />
            </Feature>
            <Feature title="Chatkoodit">
                <p>
          Karanteenissa on käytössä tiettyjä chatkoodeja, jotka chattiin
          kirjoittaessa muuttuvat automaattisesti emojeiksi.
                </p>
        <ChatCodesList chatCodes={CHAT_CODES} />
            </Feature>
        </Layout>
    )
}
export default Ominaisuudet
