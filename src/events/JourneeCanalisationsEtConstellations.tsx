import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { Description } from '../components/Description';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { buildDateRangeLabel, useDate } from '../hooks/useCalendar';
import { NextToComeEvent } from '../hooks/useMultipleEvents';
import { AnimatedBy } from '../pages/page-layout/AnimatedBy';
import { PageSubTitle } from '../pages/page-layout/PageSubTitle';
import { PageTitle } from '../pages/page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from '../pages/page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from '../pages/page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from '../pages/page-layout/TransparentListGroupItem';
import { websiteConfig } from '../website.config';
const event: NextToComeEvent = {
  startDate: '2024/06/16',
  startTime: 9,
  endDate: '2024/06/16',
  endTime: 18,
  name: 'Journée canalisations et constellations systémiques intuitives',
  url: '/events/journee-canalisations-et-constellations',
  isCanceled: false,
};

export const JourneeCanalisationsEtConstellations: FC = () => {
  const { isPassed } = useDate(event.startDate);

  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/constellations.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(79, 79, 93, 0.1))"
      backgroundPositionX="53%"
      backgroundPositionY="0%"
      htmlTitle={`${event.name} | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>{event.name}</PageTitle>
          <div>
            {isPassed || event.isCanceled ? (
              <PageSubTitle>Dates à venir</PageSubTitle>
            ) : (
              <>
                <PageSubTitle>{buildDateRangeLabel(event.startDate, event.endDate)}</PageSubTitle>
                <PageSubTitle>{`de ${event.startTime}h à ${event.endTime}h`}</PageSubTitle>
              </>
            )}
          </div>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-75 mt-1"
            modalId="prendre-rendez-vous"
          >
            S'inscrire
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '7vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(37, 54, 35, 0.7), rgba(14, 62, 106, 0.2))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <Description>
                Les Constellations sont un outil de développement personnel, de compréhension et de
                changement pour agir dans sa vie. C'est une méthode de thérapie transgénérationnelle
                dont le but est la mise à jour de l'inconscient familial. Des évènements vécus par
                nos ancêtres, nos parents ou nos proches, des secrets, des conflits non résolus
                peuvent être à l'origine de nos blocages et nos répétitions. Apporter de la
                conscience et désamalgamer certaines énergies, croyances… qui ne nous appartiennent
                pas, va permettre d'éclairer des zones cachées, inconscientes, pour libérer et
                réparer des blocages et ce qui vous empêche d'agir. On vient remettre la bonne
                information au bon endroit ; remettre de l'amour, du lien là où il n'y a en a pas eu
                et permettre ainsi la libération, la réconciliation afin d'être pleinement nous-même
                sur notre chemin de vie.
              </Description>
              <p>
                <OpenModalButton
                  className="btn btn-outline-light fw-bolder mt-0 mb-1"
                  modalId="prendre-rendez-vous"
                >
                  S'inscrire
                </OpenModalButton>
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(37, 54, 35, 0.7), rgba(14, 62, 106, 0.2))"
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
                      De 9h à 10h : canalisation par Hervé Roirand
                    </span>
                    <span className="text-wrap fs-7">
                      De 10h à 18h : constellations systémiques intuitive par Hervé et Nadia Roirand
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-2 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">189 rue du Fg St Denis</span>
                    <span className="text-nowrap fs-7">Métro gare du Nord</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">
                      90€ : Canalisation + constellations en tant que représentant et/ou participant
                    </span>
                    <span className="fw-bolder">
                      130€ : Canalisation + constellations en tant que constellé (tirage au sort
                      selon le nombre de participant)
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
                      S'inscrire
                    </OpenModalButton>

                    <span className="mt-4">Renseignements :</span>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-semi-bold w-100 mt-1"
                      phoneNumber={websiteConfig.links.phone.url}
                      title="Appeler pour s'inscrire ou poser une question"
                      analyticsEvent="tel-constellation"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Isabelle Hervouet{' '}
                          <PhoneNumber phoneNumber={websiteConfig.links.phone.url} />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-semi-bold w-100 mt-1"
                      phoneNumber="0687412464"
                      title="Appeler pour s'inscrire ou poser une question"
                      analyticsEvent="tel-constellation"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Véronique Schonfeld <PhoneNumber phoneNumber="0687412464" />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(37, 54, 35, 0.7), rgba(14, 62, 106, 0.2))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-header py-3">
              <h5 id="déroulement-et-tarifs" className="card-title mb-0 fw-bolder text-center">
                Animé par Nadia et Hervé Roirand
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="fw-semi-bold">
                <AnimatedBy>
                  <AnimatedBy.Img src="/images/portraits/herve-roirand.png" />
                  <AnimatedBy.FigCaption>Hervé Roirand, Médium Médiateur</AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    Hervé vous transmet en canalisation (channeling) des messages en accord avec les
                    (vos) guides ou des personnes parties sur un autre plan, il est Canal (channel),
                    il a l'art de percevoir le monde de l'invisible. Il s'agit d'une "lecture d'âme"
                    dans l'instant présent de votre vie, là où vous en êtes. Des prises de
                    conscience permettent alors à chacun de s'aligner avec sa mission d'âme. La
                    notion de groupe apporte des résonnances à votre propre histoire car les groupes
                    ne se constituent pas au hasard. Cette expérience unique ouvre la conscience sur
                    une autre façon d'aborder et de percevoir la Vie. Vous aurez une meilleure
                    connaissance de qui vous êtes et des réponses en lien avec votre chemin d'âme.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="fw-semi-bold">
                <AnimatedBy>
                  <AnimatedBy.Img src="/images/portraits/nadia-roirand.png" className="pt-4" />
                  <AnimatedBy.FigCaption>Nadia Roirand, Coach Holistique</AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    La Numérologie Karmique est un outil de développement personnel que j'utilise.
                    Conseillère en Image, je vous accompagne dans vos valeurs. L'hypnose Holistique
                    est un autre outil de developpement personnel que j'utilise. Les constellations
                    d'âmes permettent un autre travail de compréhension en lien avec le corps. Les
                    prises de conscience permettent des ouvertures de portes pour vivre plus en
                    harmonie avec soi, plus en paix et plus sereinement. Ainsi une vie plus
                    paisible, plus douce se dessine et l'Amour avec Soi vibre.
                  </AnimatedBy.Description>
                </AnimatedBy>
                <OpenModalButton
                  className="btn btn-outline-light fw-bolder w-100 mt-1"
                  modalId="prendre-rendez-vous"
                >
                  S'inscrire
                </OpenModalButton>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>

        <RendezVousModal
          formTitle="Inscription"
          modalId="prendre-rendez-vous"
          analyticsEvent="rdv-form-constellation"
          subjectOptions={[{ label: `Inscription: ${event.name} ` }, { label: 'Autre' }]}
          backgroundColor="#534119"
          backgroundImageUrl="/images/backgrounds/constellations.webp"
          backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(79, 79, 93, 0.1))"
          backgroundPositionX="53%"
          backgroundPositionY="0%"
          formBackgroundClassName="form-rdv-light-green fw-medium text-light placeholder-text-light"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

JourneeCanalisationsEtConstellations.displayName = 'JourneeCanalisationsEtConstellations';
