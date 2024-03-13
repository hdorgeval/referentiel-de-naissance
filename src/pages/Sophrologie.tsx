import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { Description } from '../components/Description';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const Sophrologie: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/sophrologie.png"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(79, 79, 93, 0.2))"
      backgroundPositionX="64%"
      backgroundPositionY="84%"
      htmlTitle={`Sophrologie | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Sophrologie</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-100 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '5vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(45, 08, 172, 0.4), rgba(79, 79, 93, 0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <Description>
                Créée en 1960 par le neuropsychiatre Dr Alfonso Caycedo, la sophrologie fait partie
                des thérapies psychocorporelles non tactiles. C'est une méthode simple, concrète,
                douce et rapide, adaptée à chacun. La sophrologie n'est pas juste un ensemble de
                techniques de relaxation, de respiration ou de visualisations positives visant à
                échapper à la réalité quotidienne. Elle est, à travers un ensemble de pratiques, une
                invitation à la rencontre avec soi-même, à l'ouverture de conscience. C'est à
                travers des techniques d'activation, de la rencontre du corps et de l'esprit dans la
                conscience, que les séances permettent de libérer les tensions physiques,
                émotionnelles et mentales, des questions peuvent émerger, appelant à de nouvelles
                pratiques, à interroger son quotidien, à cheminer avec soi-même et ainsi produire le
                processus de changement, de transformation et d'évolution progressive. Ce
                cheminement se nourrit de tout ce qui se présente à soi, dans un rythme, des
                synchronicités et des résonances qui sont propres à chacun. L'utilisation de la
                sophrologie peut s'appliquer dans de nombreux domaines. La méthode permet de
                répondre à un très grand nombre de problématiques.
              </Description>
              <p>
                <OpenModalButton
                  className="btn btn-outline-light fw-bolder mt-0 mb-1"
                  modalId="prendre-rendez-vous"
                >
                  Prendre rendez-vous
                </OpenModalButton>
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(45, 08, 172, 0.4), rgba(79, 79, 93, 0.3))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-header py-3">
              <h5 id="déroulement-et-tarifs" className="card-title mb-0 fw-bolder text-center">
                Déroulement et tarifs
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-6">45 mn</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Je vous reçois au :</span>
                    <span className="text-nowrap fs-7 mt-2">32 rue Médéric</span>
                    <span className="text-nowrap fs-7">92250 La Garenne Colombes</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-1 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">60€ </span>
                    {/* <span className="text-nowrap fs-7 fw-normal">
                      Moyens de paiement: chèque ou espèces
                    </span> */}
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <OpenModalButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      modalId="prendre-rendez-vous"
                    >
                      Prendre rendez-vous
                    </OpenModalButton>

                    <span className="mt-4">Ou bien appelez-moi directement :</span>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      phoneNumber={websiteConfig.links.phone.url}
                      title="Appeler pour prendre un rdv, ou poser vos questions"
                      analyticsEvent="tel-trame"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Isabelle Hervouet{' '}
                          <PhoneNumber phoneNumber={websiteConfig.links.phone.url} />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between">
                    <Description>
                      Une séance dure environ une heure. Durant la séance, la personne est habillée,
                      allongée sur le dos. Le praticien pose les mains sur la personne et réalise
                      une séquence de 16 gestes codifiés, de 40mn environ, par un toucher subtil sur
                      le tronc, les pieds et la tête. Cette séquence ne s'apparente pas à un
                      massage.La séance débute et se termine par un temps d'échange avec la personne
                    </Description>
                    <Description>
                      Il s'ensuit un état d'apaisement, de profonde détente. Les séances sont
                      espacées de 3 à 4 semaines car la Trame continue d'agir et à rééquilibrer
                      après une séance. Ce temps permet au corps de s'auto-réguler.
                    </Description>

                    <p>
                      <OpenModalButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        modalId="prendre-rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenModalButton>
                    </p>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>

        <RendezVousModal
          modalId="prendre-rendez-vous"
          analyticsEvent="rdv-form-sophrologie"
          subjectOptions={[{ label: 'Prendre un rendez-vous Sophrologie' }, { label: 'Autre' }]}
          backgroundColor="#2f1e31"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Sophrologie.displayName = 'Sophrologie';
