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
export const ThemeDeNaissanceParLeTarotDeMarseille: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/theme-de-naissance.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(79, 79, 93, 0.1))"
      backgroundPositionX="60%"
      backgroundPositionY="0%"
      htmlTitle={`Thème de naissance par le tarot de Marseille | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Thème de naissance par le tarot de Marseille</PageTitle>
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
                J'accompagne avec le Tarot de Marseille les personnes en quête de sens, de réponses,
                de changement sur leur chemin de vie et toutes celles et ceux qui cherchent à
                comprendre le pourquoi de leurs blocages, de situations qui se répètent.
              </p>
              <p>J'utilise le Référentiel de naissance, outil créé par George Colleuil.</p>
              <p>
                Cette approche psychologique, thérapeutique et spirituelle permet de se révéler,
                guérir et se libérer par l'évolution de la conscience et un processus de
                transmutation.
              </p>
              <p>
                Cette démarche est celle de l'exploration et de la connaissance de soi. Voulez-vous
                explorer qui vous êtes ?
              </p>
              <p>
                Voulez-vous découvrir ce que vous avez choisi de vivre et de transmuter dans votre
                incarnation ?
              </p>
              <p>
                Je vous accompagne pour vous faire découvrir les 13 aspects fondamentaux de votre «
                chemin de vie » inscrit dans votre date de naissance :
              </p>
              <p>- votre personnalité et votre façon de penser,</p>
              <p>- votre quête fondamentale,</p>
              <p>- la manière dont vous vous réalisez,</p>
              <p>
                - la mise en lumière de vos ressources, vos talents innées, sur lesquels vous
                appuyer,
              </p>
              <p>
                - prendre conscience de vos difficultés, blocages, peurs, blessures, épreuves, et
                comment elles permettent de vous construire et de grandir,
              </p>
              <p>- vos mémoires tranqénërationnelles sources de blocage et de force de vie,</p>
              <p>- ce qui doit être expérimenté,</p>
              <p>- votre potentiel à développer pour lever vos blocages,</p>
              <p>- votre problématique et les solutions à mettre en place,</p>
              <p>- comment réussir votre vie,</p>
              <p>- comment réussir votre Soi.</p>
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
                      Consultation de 3h, en deux séances de 1h30
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-2 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">En présentiel ou en visio</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">150€</span>
                    <span className="">
                      Ce tarif comprend le calcul, l'étude, la consulation de 3h et la synthèse
                      écrite de votre référentiel de naissance.
                    </span>
                    {/* <span className="fs-7 fw-normal">Moyens de paiement: virement ou espèces</span> */}
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
          analyticsEvent="rdv-form-rdn"
          subjectOptions={[
            { label: 'Prendre un rendez-vous Thème de naissance par le tarot de Marseille' },
            { label: 'Autre' },
          ]}
          backgroundColor="#0f1b25"
          backgroundImageUrl="/images/backgrounds/theme-de-naissance.webp"
          backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(79, 79, 93, 0.1))"
          backgroundPositionX="60%"
          backgroundPositionY="0%"
          formBackgroundClassName="form-contact fw-medium text-light placeholder-text-light"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

ThemeDeNaissanceParLeTarotDeMarseille.displayName = 'ThemeDeNaissanceParLeTarotDeMarseille';
