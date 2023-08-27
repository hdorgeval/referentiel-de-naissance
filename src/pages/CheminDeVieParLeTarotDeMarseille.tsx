import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { Quote } from '../components/Quote';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const CheminDeVieParLeTarotDeMarseille: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/massage-couple-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.05), rgba(79, 79, 93, 0.1))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Chemin de vie par le tarot de Marseille | ${websiteConfig.websiteTitle}`}
      >
        <div className="w-100 d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Chemin de vie par le tarot de Marseille</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile
            background="linear-gradient(rgb(40, 26, 174, 0.6), rgba(79, 79, 93, 0.3)"
            className="card text-start text-light fs-2 font-monserrat px-4 py-4"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <Description>
                J'utilise un outil tarologique, le référentiel de naissance qui est une méthode
                créée par Georges Colleuil. C'est un outil thérapeutique et énergétique de
                connaissance de soi, de croissance, de rencontre et de connexion au cœur de
                soi-m'aime, d'évolution de conscience. C'est un allié qui amène à se poser les
                bonnes questions pour mettre en lumière nos blocages, obstacles, difficultés, peurs,
                nos sentiments cachés, refoulés, nos ressources, solutions et permettre d'avoir plus
                de lucidité, de clarté pour transmuter, réunifier et trouver enfin nos capacités et
                possibilités pour vivre pleinement notre potentiel intérieur dans toutes les
                circonstances de notre vie. Le référentiel est une carte géographique de vie,
                composée de 13 « maisons » qui sont le reflet de 13 facettes de vous-même, obtenue
                par calcul, basée sur votre date de naissance et représentés par les archétypes du
                tarot de Marseille. Les archétypes nous parlent de ces parties de vous-même aussi
                bien dans les tendances lumineuses que dans les tendances sombres de votre
                personnalité, de vos aspirations et de votre cheminement. C'est un miroir de votre
                inconscient qui vous conduit vers la connaissance de vous-même. Arcane après arcane,
                maison après maison, découvrez qui vous êtes vraiment ! Je vous accompagne en
                consultation individuelle dans un travail d'intériorisation, d'exploration de
                vous-même et d'évolution pour comprendre le sens de votre existence, découvrir vos
                talents, dépasser certaines difficultés de votre vie, identifier les obstacles à
                surmonter et les problématiques à transformer, créer les actions à entreprendre pour
                mettre fin aux situations qui se répètent… en confrontant vos expériences avec la
                symbolique des arcanes contenus dans chaque « maison » de votre référentiel. Un être
                ne souffre pas par hasard, une maladie (le mal a dit), une difficulté, une épreuve
                sont des signaux pour nous faire entendre qu'une partie de nous-même n'est pas en
                accord avec une autre. Entreprendre ce chemin initiatique et spirituel d'éveil,
                d'ouverture de conscience, lié à votre expérience de vie, contribuera à votre
                épanouissement personnel et professionnel en étant beaucoup plus alignés dans vos
                choix, actions, plus connecter à votre Être et avec vos aspirations profondes.
              </Description>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(40, 26, 174, 0.6), rgba(79, 79, 93, 0.3)"
            className="w-100 card text-start text-light font-monserrat mt-4"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Déroulement et tarifs</h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-7">2h</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">6 allée du mortier</span>
                    <span className="text-nowrap fs-7">44620 LA MONTAGNE</span>
                    {websiteConfig.links.googleMaps.show && (
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-0"
                        link={websiteConfig.links.googleMaps.url}
                        analyticsEvent="open-google-maps"
                        title={websiteConfig.links.googleMaps.title}
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span className="">{websiteConfig.links.googleMaps.label}</span>
                        </div>
                      </OpenExternalLinkButton>
                    )}
                    {websiteConfig.links.waze.show && (
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-2"
                        link={websiteConfig.links.waze.url}
                        analyticsEvent="open-waze"
                        title={websiteConfig.links.waze.title}
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span className="">{websiteConfig.links.waze.label}</span>
                        </div>
                      </OpenExternalLinkButton>
                    )}
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-1 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">300€</span>
                    <span className="fs-7 fw-normal">Moyens de paiement: chèque ou espèces</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Rdv validé uniquement après entretien téléphonique</span>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link={websiteConfig.links.rdv.url}
                      title="Prendre rendez-vous pour l'entretien téléphonique"
                      analyticsEvent="rdv-tarot"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">Prendre rendez-vous pour l'entretien téléphonique</span>
                      </div>
                    </OpenExternalLinkButton>
                    <span className="mt-4">Ou bien appelez-moi directement :</span>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      phoneNumber={websiteConfig.links.phone.url}
                      title="Appeler pour l'entretien téléphonique"
                      analyticsEvent="tel-tarot"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Sandra Giraudeau{' '}
                          <PhoneNumber phoneNumber={websiteConfig.links.phone.url} />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              {/* <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between">
                    <p className="">Une séance de massage Couple dure environ 2h.</p>
                    <p>Le massage en lui-même dure 1h30.</p>
                    <p>
                      Je vous accueille et vous propose un temps d'échange pour répondre à vos
                      attentes et besoins spécifiques sur d'éventuelles préoccupations. Cela
                      contribue à établir une relation de confiance pour recevoir le massage dans le
                      respect du cadre posé.
                    </p>
                    <p>
                      Le massage sera suivi d'un temps d'intégration pour revenir à vous en douceur.
                    </p>
                  </div>
                </div>
              </TransparentListGroupItem> */}
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(40, 26, 174, 0.6), rgba(79, 79, 93, 0.3)"
            className="card text-start text-light font-playfair mt-4"
          >
            <div className="card-body">
              <Quote
                sentence="Votre corps est un temple, prenez en grand soin et souvenez vous que vous êtes la divinité qui y vit."
                author="OSHO"
              />
            </div>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

CheminDeVieParLeTarotDeMarseille.displayName = 'CheminDeVieParLeTarotDeMarseille';
