import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
    faThumbsUp,
    faPuzzlePiece,
    faHammer,
    faQuestionCircle,
    faEnvelope,
    faInfo,
    faExclamation,
    faMedal,
    faUsers,
    faScroll,
    faGift,
    faFileAlt,
    faHome,
    faCrown,
    faUserShield,
    IconDefinition,
    faScrewdriver,
    faGavel,
    faMap,
    faDownload,
    faBookOpen
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }: { icon: IconDefinition }) => {
    return <FontAwesomeIcon className="icon" icon={icon} />
}

const NavLink = ({
    close,
    url,
    icon,
    title
}: {
    close: () => void
    url: string
    icon: IconDefinition
    title: string
}) => {
    const router = useRouter()
    return (
        <li className="nav-item">
            <Link href={url} legacyBehavior>
                <a
                    className="nav-link"
                    onClick={() => {
                        if (router.pathname === url) {
                            close()
                        }
                    }}
                >
                    <Icon icon={icon} />
                    {title}
                </a>
            </Link>
        </li>
    )
}

const DropDownCollapseMenu = ({ selected, setSelected, itemIndex, icon, title, children, left }: any) => {
    let show = selected === itemIndex
    let className = (show ? 'dropdown-menu collapse show' : 'dropdown-menu collapse') + (left ? ' left' : '');
    return (
        <li className="nav-item dropdown">
            <div
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={show}
                onClick={() => setSelected(show ? null : itemIndex)}
            >
                <Icon icon={icon} />
                {title}
            </div>
            <div className={className} aria-labelledby="navbarDropdown">
                <h4 className="dropdown-header">{title}</h4>
                {children}
            </div>
        </li>
    )
}

const DropDownItem = ({
    close,
    url,
    icon,
    title
}: {
    close: () => void
    url: string
    icon: IconDefinition
    title: string
}) => {
    const router = useRouter();
    const [sameDomain, setSameDomain] = useState(false);

    useEffect(() => {
        setSameDomain(url.startsWith("/") || url.startsWith("#") || (new URL(url)).origin == window.origin);
    }, [url]);

    return (
        <Link href={url} legacyBehavior>
            <a
                className="dropdown-item"
                onClick={() => {
                    if (router.pathname === url) {
                        close()
                    }
                }}
                target={sameDomain ? '_self' : '_blank'}
            >
                <Icon icon={icon} />
                {title}
            </a>
        </Link>
    )
}

const Nav = ({ children, show, setShow }) => {
    const [windowDimension, setWindowDimension] = useState(null)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowDimension <= 1100

    return (
        <nav className={'navbar ' + (isMobile ? 'mobile' : '') + (show ? ' show' : '')}>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-expanded={show}
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
            >
                <div className="navbar-toggler-icon burger burger-rotate">
                    <div className="burger-lines"></div>
                </div>
            </button>
            <ul className="nav">{children}</ul>
        </nav>
    )
}

const Navbar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(null)
    const [show, setShow] = useState(false)

    const closeNav = () => {
        setSelectedDropdown(null)
        setShow(false)
    }

    return (
        <Nav show={show} setShow={setShow}>
            <NavLink close={closeNav} icon={faHome} url="/" title="Etusivu" />

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Yleistietoa"
                icon={faInfo}
                itemIndex={1}
            >
                <DropDownItem close={closeNav} icon={faThumbsUp} url="/hoks" title="Hyvä tietää!" />
                <DropDownItem close={closeNav} icon={faPuzzlePiece} url="/ominaisuudet" title="Ominaisuudet" />
                <DropDownItem close={closeNav} icon={faHammer} url="/reseptit" title="Custom reseptit" />
                <DropDownItem close={closeNav} icon={faQuestionCircle} url="/ukk" title="UKK" />
                <DropDownItem close={closeNav} icon={faEnvelope} url="/julkaisut" title="Julkaisut" />
            </DropDownCollapseMenu>

            <NavLink close={closeNav} icon={faExclamation} url="/saannot" title="Säännöt" />

            <NavLink close={closeNav} icon={faMedal} url="/rankit" title="Rankit" />

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Ylläpito"
                icon={faUsers}
                itemIndex={2}
            >
                <DropDownItem close={closeNav} icon={faUserShield} url="/yllapito" title="Ylläpito" />
                <DropDownItem close={closeNav} icon={faFileAlt} url="/yphaku" title="Hae ylläpitoon!" />
            </DropDownCollapseMenu>

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Kiitokset"
                icon={faGift}
                itemIndex={3}
            >
                <DropDownItem close={closeNav} icon={faGift} url="/kiitokset" title="Kiitokset" />
                <DropDownItem close={closeNav} icon={faCrown} url="/kkpelaaja" title="Kuukauden pelaajat" />
            </DropDownCollapseMenu>

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Hakemukset"
                icon={faScroll}
                itemIndex={4}
            >
                <DropDownItem close={closeNav} icon={faFileAlt} url="/yphaku" title="Hae ylläpitoon!" />
                <DropDownItem close={closeNav} icon={faFileAlt} url="/unban" title="Unban-hakemus" />
            </DropDownCollapseMenu>

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Muut"
                icon={faScrewdriver}
                itemIndex={5}
                left={true}
            >
                <DropDownItem close={closeNav} icon={faFileAlt} url="/nick" title="Nimigeneraattori" />
                <DropDownItem close={closeNav} icon={faGavel} url="http://bans.karanteeni.net/" title="Porttikiellot" />
                <DropDownItem close={closeNav} icon={faMap} url="http://map.karanteeni.net/" title="Kartta" />
                <DropDownItem close={closeNav} icon={faDownload} url="/downloads" title="Lataukset" />
                <DropDownItem close={closeNav} icon={faBookOpen} url="/historia" title="Historia" />
            </DropDownCollapseMenu>
        </Nav>
    )
}

export default Navbar
