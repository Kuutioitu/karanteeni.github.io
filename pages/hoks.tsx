import Link from 'next/link'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Hoks = () => {
    return (
        <Layout
            title="Hyvä tietää"
            description="Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft-palvelin. Karanteenin omistavat Jomeee, Nuubles ja Jokune.
            Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival, mutta meiltä löytyvät myös Hub minipeleineen ja Creative."
        >
            <Heading heading="Hyvä tietää!" lead="Karanteeni tiivistettynä" />
            <p>
                Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft-palvelin. Karanteenin omistajat ovat
                Jomeee, Nuubles ja Jokune. Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival,
                mutta monelle tuttu Creative on myös pelattavissa. Hub-palvelimelta löydät taas monenlaisia uniikkeja
                minipelejä ja gallerian palvelimen historiasta.
            </p>
            <p>
                Palvelimen toimintaidea on se, että mitä pidempään pelaat serverillä, sitä parempia ominaisuuksia avaat
                käyttöösi. Peliajalla kerättävistä ominaisuuksista voi lukea lisää{' '}
                <Link href="/rankit">rankit-sivulta</Link>. Muista Karanteenin ominaisuuksista voi lukea{' '}
                <Link href="ominaisuudet">ominaisuudet-sivulla</Link>.
            </p>
            <p>
                Palvelimella järjestetään satunnaisesti erilaisia tapahtumia (esim. synttäri- ja joulujuhlat, UHC ja
                pidemmät tapahtumapalvelimen tapahtumat). Voit saada tapahtumista palkintoja, kuten harvinaisia pelaajapartikkeleita!
                Survival resetoidaan noin puolen vuoden välein, jota ennen aina pelaajien annetaan räjäyttää
                vanha mappi uuden tieltä.
            </p>
            <p>
                Palvelin on täysin omakustanteinen.
            </p>

            <h3>Muita pointteja</h3>
            <ul>
                <li>
                    Karanteenissa valuuttana toimii pennit (❂). Pennejä voi saada
                    äänestämällä Karanteenia{' '}
                    <code>/vote</code> , myymällä malmeja kaupassa{' '}
                    <code>/warp kauppa</code> ja käymällä kauppaa toisten pelaajien kanssa.
                </li>
                <li>
                    Karanteenissa ylläpito suojaa alueesi. Pyydäthän ylläpitoa suojausta, niin vältytään turhilta grief-tapauksilta.
                </li>
                <li>
                    Kaikki viestit ja komennot joita laitetaan palvelimella, ovat ylläpidon nähtävissä turvallisuussyistä.
                </li>
            </ul>
        </Layout>
    )
}

export default Hoks
