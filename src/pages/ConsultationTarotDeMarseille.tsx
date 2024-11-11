import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const ConsultationTarotDeMarseille: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/consultation-tarot-02.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
      backgroundPositionX="60%"
      backgroundPositionY="0%"
      htmlTitle={`Consultation Tarot de Marseille | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Consultation Tarot de Marseille</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-75 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '7vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(14, 62, 106,0.4), rgba(14, 62, 106,0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <p>
                Je vous propose des consultations de tirage tarot pour des questions vous permettant
                d'avancer et d'avoir des éclairages sur des sujets personnels.
              </p>
              <p>
                Ce ne sont pas des séances de divination mais des séances dans une démarche
                alchimique, de connaissance de soi avec les tarots.
              </p>
              <p>
                Les tarots comme outil symbolique, vont vous permettre de faire le pont, la jonction
                entre votre part consciente et les divers aspects de votre part inconsciente afin de
                pouvoir changer vos schémas de fonctionnement et d'obtenir des éclairages puissants
                pour votre cheminement personnel.
              </p>
              <p className="mb-0">
                Consultation <span className="fw-bolder">Tarot et alchimie</span>
              </p>
              <p className="ms-4 mt-0 pt-0">
                - Aller visiter votre gardien du seuil, vos complexes, vos parts refoulées à
                réhabiliter, votre zone de génie.
              </p>

              <p className="mb-0">
                Consultation <span className="fw-bolder">Tarot et généalogie</span>
              </p>
              <p className="ms-4 mt-0 pt-0">
                - Aller visiter les transmissions familiales, les relations masculins-féminin,
                l'apport familial positif de votre arbre.
              </p>

              <p className="mb-0">
                Consultation <span className="fw-bolder">Tarot et questions personnelles</span>
              </p>
              <p className="ms-4 mt-0 pt-0">
                - Obtenir une réponse, un conseil sur un sujet au choix vous concernant.
              </p>
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
            background="linear-gradient(rgb(14, 62, 106,0.4), rgba(14, 62, 106,0.3))"
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
                    <span className="text-wrap fs-7">
                      Consultation pouvant aller de 15mn à 1h, selon vos besoins.
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-2 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="fw-medium mt-1 mb-2">
                      Consultation en présentiel ou en visio.
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <div className="d-inline-block">
                      <span className="">Consultation pour une question (15 mn): </span>
                      <span className="ms-1 fw-bolder">30€</span>
                    </div>
                    <div className="d-inline-block">
                      <span className="">Consultation (30 mn): </span>
                      <span className="ms-1 fw-bolder">45€</span>
                    </div>
                    <div className="d-inline-block">
                      <span className="">
                        Consultations tarot et alchimie, tarot et généalogie ou questions durée 1h:
                      </span>
                      <span className=" ms-1 fw-bolder">80€</span>
                    </div>
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
                      title="Appeler pour prendre rendez-vous"
                      analyticsEvent="tel-rdn"
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
            </ul>
          </SemiTransparentTile>
        </div>

        <RendezVousModal
          modalId="prendre-rendez-vous"
          analyticsEvent="rdv-form-consultation-tarot"
          subjectOptions={[
            { label: 'Prendre un rendez-vous Consultation Tarot de Marseille' },
            { label: 'Prendre un rendez-vous Consultation Tarot et alchimie' },
            { label: 'Prendre un rendez-vous Consultation Tarot et généalogie' },
            { label: 'Autre' },
          ]}
          backgroundColor="#0f1b25"
          backgroundImageUrl="/images/backgrounds/consultation-tarot-02.webp"
          backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(79, 79, 93, 0.1))"
          backgroundPositionX="60%"
          backgroundPositionY="0%"
          formBackgroundClassName="form-contact fw-medium text-light placeholder-text-light"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

ConsultationTarotDeMarseille.displayName = 'ConsultationTarotDeMarseille';
