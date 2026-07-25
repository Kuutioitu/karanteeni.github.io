import Link from 'next/link'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Question = (props) => {
    return <h2>{props.children}</h2>
}

const Answer = (props) => {
    return <p>{props.children}</p>
}

const CommonQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Tahtoisin ylläpitäjäksi. Kuinka voin saavuttaa sen?</Question>
                <Answer>
                    Käy lukemassa ohjeet <Link href="/yphaku">täältä</Link> ja lähetä hakemus käyttäen annettua
                    lomaketta.
                </Answer>
            </div>

            <div>
                <Question>Apua! Ei ole oikeuksia komentoon, vaikka pitäisi olla.</Question>
                <Answer>
                    Koita poistua palvelimelta ja liittyä uudelleen. Mikäli ongelma ei korjaantunut, nykäise ylläpitäjää
                    hihasta. Vaihtoehtoisesti mikäli ylläpitäjiä ei ole palvelimella, tee tiketti Discordiin ja
                    katsotaan kuinka asian voi hoitaa.
                </Answer>
            </div>

            <div>
                <Question>Kuinka pääsen korkeammalle tasolle?</Question>
                <Answer>
                    Pelaamalla. Rankeista löydät lisätietoa <Link href="/rankit">täältä</Link>.
                </Answer>
            </div>

            <div>
                <Question>Löysin palvelimelta peliä rikkovan vian. Mitä teen?</Question>
                <Answer>
                    Ota yhteyttä ylläpitäjään joko palvelimella tai liity Karanteenin Discordiin ja valitse sieltä
                    kanava "Bugit ja parannusehdotukset". <strong>Mikäli bugia voi hyväksikäyttää, pidä se omana tietonasi,
                    äläkä kerro muille pelaajille.</strong> Bugin
                    hyväksikäyttö on <strong>ankarasti kiellettyä</strong>. Mikäli jäät siitä kiinni, saat siitä
                    automaattisesti tuntuvan porttikiellon. Hyväksikäytettävän / peliärikkovan bugin ilmiantamisesta saa
                    yleensä korvauksen.
                </Answer>
            </div>

            <div>
                <Question>Voinko käyttää kahta tiliä palvelimella?</Question>
                <Answer>
                    Voit, mutta tilit eivät saa hyötyä toisistaan. Tähän lukeutuu mm. tavarapakkausten ja
                    äänestysrahojen siirtäminen toiselle tilille. Pelitilit eivät saa olla yhtä aikaa palvelimella.
                </Answer>
            </div>

            <div>
                <Question>Kuinka usein maailma nollataan?</Question>
                <Answer>
                    Maailma nollataan yleensä noin puolen vuoden välein, mutta ei tapahdu automaationa. Yleensä maailman
                    nollaus myös tähdätään seuraavan Minecraftin suuren versiopäivityksen kohdille. Netheriä ei nollata
                    ja End nollataan kerran kolmessa kuukaudessa.
                </Answer>
            </div>

            <div>
                <Question>Mikä säilyy maailman nollauksen yhteydessä?</Question>
                <Answer>
                    Maailman nollauksessa eli "mapresetissa" kaikki aloittavat samalta viivalta. Tämä tarkoittaa sitä,
                    että pelaajien rahat, inventory ja koko kartta nollataan maisemanvaihdon vuoksi, jolloin kaikki
                    joutuvat aloittamaan alusta. Peliaika (ja täten tasot) on ainut asia, joka säilyy.
                </Answer>
            </div>

            <div>
                <Question>Voinko ostaa tasoja?</Question>
                <Answer>
                    Karanteenissa ei ole käytössä vippejä, vaan kaikki normaalit rankit perustuvat peliaikaan. Lahjoituksia ei oteta vastaan.
                </Answer>
            </div>

            <div>
                <Question>Mitä teen jos tarvitsen ylläpidon apua, mutta he eivät ole juuri nyt paikalla?</Question>
                <Answer>
                    Voit liittyä Karanteenin{' '}
                    <a href="https://discord.gg/dxCtuY7" rel="noreferrer">
                        Discord
                    </a>{' '}
                    -palvelimelle ja pyytää apua luomalla tiketin #apua kanavalta.
                </Answer>
            </div>
        </>
    )
}

const ProtectionQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Miten voin suojata alueeni?</Question>
                <Answer>
                    Ylläpito suojaa alueen ja suojaukseen vaaditaan talon alku. Huomaathan, että talosi täytyy olla
                    vähintään sadan (100) blockin päässä lähimmästä talosta. Mikäli aiot luoda kylän, voit päättää
                    alueelle nimen. Warpin kylälle saa vasta, kun kylällä on 10 asukasta. Endiin emme suojaa alueita
                    sen resetoituessa myös Kartan aikana.
                </Answer>
            </div>

            <div>
                <Question>Apua! Taloani on grieffattu!</Question>
                <Answer>
                    Ei hätää. Pääset Karanteenin Discordiin <code>/discord</code> komennolla, tai voit nykäistä jo
                    paikalla olevaa ylläpitäjää hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sekä tavarat
                    takaisin. Grieffaaja sitä vastoin saa porttikiellon palvelimelle.
                </Answer>
            </div>

            <div>
                <Question>Kuinka annan kaverilleni oikeudet alueeseen?</Question>
                <Answer>
                    Oikeudet alueeseen voit antaa komennolla{' '}
                    <code>/trust &lt;suojauksen_nimi&gt; &lt;pelaajan_nimi&gt;</code> seisten suojauksen sisällä.
                    Suojauksen nimen saat selville komennolla <code>/alue</code> kun seisot sen päällä.
                </Answer>
            </div>

            <div>
                <Question>Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?</Question>
                <Answer>
                    Voit antaa oikeudet kyseisiin blockeihin katsomalla blockia ja kirjoittamalla komennon{' '}
                    <code>/lukitus add-member &lt;pelaajan_nimi&gt;</code>. Tämän jälkeen kaverillasi on oikeudet avata kyseinen
                    arkku. Komento toimii myös muihin container blockeihin.<br/> Vaihtoehtoisesti voit antaa oikeudet myös kaikkiin
                    suojattuihin palikoihin lisäämällä kaverisi valkoiselle listalle komennolla <code>/lukitus add-global-whitelist &lt;pelaaja_nimi&gt;</code>.
                </Answer>
            </div>

            <div>
                <Question>Löysin suojaamattoman arkun. Voinko ottaa sieltä tavaraa?</Question>
                <Answer>
                    Et. Vaikka löytäisit arkun tai kokonaan suojaamattoman arkun, et saa ottaa sieltä tavaroita tai
                    rikkoa paikkaa. Grieffaaminen johtaa usein porttikieltoon.
                </Answer>
            </div>
        </>
    )
}

const EconomyQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Kuinka voin luoda arkkukaupan?</Question>
                <Answer>
                    Voit luoda arkkukaupan lyömällä arkkua kyykyssä tavara kädessä. Tämän jälkeen chat kysyy sinulta
                    hinnan tavaralle. Kirjoita hinta ja näin arkkukauppasi on valmis.
                </Answer>
            </div>

            <div>
                <Question>Kuinka voin poistaa arkkukaupan?</Question>
                <Answer>
                    Voit poistaa arkkukaupan hajottamalla kyseisen arkun tai katsomalla arkkukauppaa kohti ja
                    suorittamalla <code>/qs remove</code>. Muita arkkukaupan komentoja ovat mm.{' '}
                    <code>/qs price &lt;hinta&gt;</code>
                </Answer>
            </div>

            <div>
                <Question>Mitä valuuttaa palvelin käyttää ja kuinka saan sitä?</Question>
                <Answer>
                    Palvelimella on rahavaluuttana pennit. Pennejä saat äänestämällä Karanteenia äänestyssivuilla, joihin
                    löydät linkit komennolla <code>/vote</code> tai tämän sivuston etusivulta. Voit myös myydä sekä
                    ostaa tavaraa käyttämällä arkkukauppoja. Spawnilla on kauppa (<code>/warp kauppa</code>), jonne voit
                    myydä oreista tehtyjä blockeja.
                </Answer>
            </div>
        </>
    )
}

const HomeQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Hukkasin kotini. Kuinka saan sen takaisin?</Question>
                <Answer>
                    Nykäise ylläpitäjää hihasta ja kerro hänelle mitä teit viimeksi kotisi lähettyviltä ja miltä se
                    näytti. Näin saamme palautettua sinut oikeaan paikkaan.
                </Answer>
            </div>

            <div>
                <Question>En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?</Question>
                <Answer>
                    Sano lähimmälle ylläpitäjälle asiasta. Todennäköisesti joku tai jotkin kodeistasi ovat
                    korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mikäli ylläpitoa ei ole paikalla, liity
                    Karanteenin Discord palvelimelle ja kerro siellä ongelmastasi ylläpidolle.
                </Answer>
            </div>

            <div>
                <Question>Saanko asettaa kodin Netheriin tai Endiin?</Question>
                <Answer>
                    Saat, mutta Endiin emme suosittele. End resetoidaan n. puolessa välissä karttaa, mikä voi aiheuttaa
                    kodin korruptoitumista ja sinun kuoleman. Tämä tarkoittaa siis sitä, että saatat kuolla jos käytät
                    kotia resetoinnin jälkeen. Ylläpito ei ole velvollinen palauttamaan tavaroitasi.
                </Answer>
            </div>

            <div>
                <Question>Saanko asettaa kodin toisen pelaajan taloon?</Question>
                <Answer>
                    Mikäli toiselta pelaajalta on lupa asettaa taloon koti, on tämä sallittua. Kodin asettaminen muussa
                    tapauksessa luetaan häirinnäksi ja on varoituksen arvoinen. Toistuvissa tapauksissa rangaistuksia
                    tiukennetaan.
                </Answer>
            </div>
        </>
    )
}

const PunishmentQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Montako rangaistusta voin saada?</Question>
                <Answer>
                    Riippuu käyttäytymisestäsi servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista
                    jälkimmäinen on aina ikuinen, jos ensimmäinen on ollut yli viiden (5) päivän mittainen.
                </Answer>
            </div>

            <div>
                <Question>Mitä rankaisumenetelmiä teillä on olemassa?</Question>
                <Answer>
                    Hiljennykset, varoitukset, sekä porttikiellot. Kolme varoitusta on aina kahden viikon porttikielto.
                </Answer>
            </div>

            <div>
                <Question>Sain rangaistuksen turhasta!</Question>
                <Answer>
                    Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla. Muista, että vaikka jokin ei olisi
                    kiellettyä säännöissä, siitä voidaan silti rangaista. Ylläpitäjien näkemykset voivat myös erota
                    toisistaan, jonka vuoksi keskustele rangaistuksesta rangaistuksen antajan kanssa.
                </Answer>
            </div>
        </>
    )
}

const ModQuestions = (props) => {
    return (
        <>
            <div>
                <Question>Mitkä modit ovat sallittuja Karanteenissa?</Question>
                <Answer>
                    Pääsääntöisesti kaikki pelaajia hyödyttävät modit ovat kiellettyjä, siinä missä grafiikkamodit kuten
                    OptiFine ovat sallittuja. Mikäli modi vain neuvoo pelaajaa (esim. Litematica) on se todennäköisesti sallittu.
                    Nykäise ylläpitäjää hihasta mikäli et ole varma.
                </Answer>
            </div>
        </>
    )
}

const Ukk = () => {
    return (
        <Layout
            title="Usein kysytyt kysymykset"
            description="Karanteenissa usein kysytyt kysymykset, ja niihin vastaukset."
        >
            <Heading
                heading="Usein kysytyt kysymykset"
                lead='"Milloin on mapresetin tuhoamisenchantin yhteensopiva plugarin home ei teleporttaa?" "On."'
            />

            <div>
                <CommonQuestions />
                <ProtectionQuestions />
                <EconomyQuestions />
                <HomeQuestions />
                <PunishmentQuestions />
                <ModQuestions />
            </div>
        </Layout>
    )
}

export default Ukk
