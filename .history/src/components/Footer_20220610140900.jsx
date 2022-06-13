import Image from 'next/image';
import Link from 'next/link';
/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import fedecajaLogoFooter from '@logos/logo_fedecajasFooter.png';
import corpensarLogoFooter from '@logos/logo_corpensarFooter.png';

import logoInvictos from '@logos/logo_invictos.png';
import logoUpamplona from '@logos/logo_upamplona.png';
import logoMiccbo from '@logos/logo_miccbo.png';
import logoLaIsla from '@logos/logo_medioDia.png';

const apoya = [
    {
        logo: logoInvictos,
        link: 'https://invictos.com.co/',
        alt: 'Logo de Invictos',
        width: 247,
        height: 75
    },
    {
        logo: logoUpamplona,
        link: 'https://www.upamplona.edu.co/',
        alt: 'Logo de U. Pamplona',
        width: 247 / 3.8,
        height: 260 /  3.8
    },
    {
        logo: logoMiccbo,
        link: 'https://www.facebook.com/miccbo.muestrainternacionaldecine',
        alt: 'Logo de Miccbo',
        width: 457 / 3,
        height: 141 /  3
    },
    {
        logo: logoLaIsla,
        link: '',
    }
]

function Footer(props) {
    return (
        <footer className={main['footer_container']}>
            <div className={main['footer_content']}>
                <div className={main['footer_content-left']}>
                    <div className={main['footer_content-invita']}>
                        <h3>
                            Invita:
                        </h3>
                        <div>
                            <Link href="https://www.fedecajas.com/" passHref>
                                <a target='_blank'>
                                    <figure>
                                        <Image 
                                            src={fedecajaLogoFooter}
                                            alt="Logo de la Federación de Cajas de Cine"
                                            width={263}
                                            height={59}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                            <Link href="https://www.corpensar.com/" passHref>
                                <a target='_blank'>
                                    <figure>
                                        <Image 
                                            src={corpensarLogoFooter}
                                            alt="Logo de Corpensar"
                                            width={264}
                                            height={59}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={main['footer_content_right']}>
                    <div className={main['footer_content-apoya']}>
                        <h3>
                            Apoya:
                        </h3>
                        <div>
                            <Link href="https://invictos.com.co/" passHref>
                                <a target='_blank'>
                                    <figure>
                                        <Image 
                                            src={logoInvictos}
                                            alt="Logo de Invictos"
                                            width={247}
                                            height={75}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                            <Link href="">
                                <a>
                                    <figure>
                                        <Image 
                                            src={logoUpamplona}
                                            alt="Logo de U. Pamplona"
                                            width={247 / 3.8}
                                            height={260 /  3.8}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                            <Link href="">
                                <a>
                                    <figure>
                                        <Image 
                                            src={logoMiccbo}
                                            alt="Logo de Miccbo"
                                            width={457 / 3}
                                            height={141 /  3}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                            <Link href="">
                                <a>
                                    <figure>
                                        <Image 
                                            src={logoLaIsla}
                                            alt="Logo La Isla Mediodia"
                                            width={324 / 2}
                                            height={92 /  2}
                                            loading="lazy"
                                            layout='intrinsic'
                                        />
                                    </figure>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;