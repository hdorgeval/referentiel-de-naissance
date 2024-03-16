import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const MassageTantriqueTao: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/massage-tantrique-tao-01.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(79, 79, 93, 0.2))"
      backgroundPositionX="64%"
      backgroundPositionY="84%"
      htmlTitle={`Massage Tantrique - Tao | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Massage Tantrique - Tao</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-75 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '5vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(115, 74, 48, 0.3), rgba(79, 79, 93, 0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <Description>
                Comme son nom l'indique, le massage tantrique s'inscrit dans une voie spirituelle
                qui est celle du Tantra et celui que je dispense respecte l'Essence profonde et
                Sacrée du Tantra sans aucune connotation sexuelle. C'est un massage bien-être dans
                une expérience à la fois sensuelle et spirituelle qui a pour objectif premier la
                reconnexion et la conscience du corps, hors du contrôle du mental. Il permet de
                faire circuler l'énergie pour redonner vitalité et harmonie dans tous vos corps
                (physique, mental et émotionnel), de s'accepter, de s'ouvrir à sa sensualité, voire
                de réparer des mémoires traumatiques. A la fois sensuel, enveloppant et énergisant,
                le massage tantrique s'effectue nu et consiste en de grands mouvements de liaisons
                englobant toutes les parties du corps pour faire circuler l'énergie vitale. Les
                mouvements alternent des touchers d'effleurage, doux ou plus appuyés à différents
                rythmes alliant rapidité et très grande lenteur, à tel point qu'il est difficile de
                les suivre mentalement. Cela permet un véritable lâcher prise, un voyage intérieur
                dans ses sensations profondes. Le mental lâche, le corps vibre, s'éveille et
                s'abandonne aux sensations du toucher, des émotions peuvent surgir et sont
                accueillies avec bienveillance et l'énergie circule.
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
            background="linear-gradient(rgb(115, 74, 48, 0.3), rgba(79, 79, 93, 0.3))"
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
                    <span className="text-nowrap fs-6">2h30 (durée du massage 1h30)</span>
                    <span className="text-nowrap fs-6">3h00 (durée du massage 2h)</span>
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
              <TransparentListGroupItem className="pt-2 pb-1 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">160€ la séance de 2h30</span>
                    <span className="fw-bolder">200€ la séance de 3h00</span>
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
                    <span className="">Rdv validé uniquement après entretien téléphonique</span>

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
                      analyticsEvent="tel-massage"
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
                  <i className="bi bi-shield-check fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <p className="">
                      Je m'engage à ce que la séance de massage se déroule selon la charte
                      ci-dessous:
                    </p>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link="https://association-massage-tantrique.com/charte-ethique-professionnelle/"
                      title="Charte éthique professionnelle de l'Association Massage Tantrique"
                      analyticsEvent="open-charte-ethique"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Charte éthique professionnelle de l'Association Massage Tantrique
                        </span>
                      </div>
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between">
                    <Description>
                      Je vous accueille dans un espace bienveillant qui permet de vous sentir à
                      l'aise et en sécurité. Nous prenons un temps de parole ou je vous explique le
                      déroulement du massage. Nous définissons vos limites et vos besoins. Le
                      respect de votre corps et votre consentement est primordial. A la fin du
                      massage un temps d'intégration vous permet de revenir à vous en douceur. Enfin
                      nous partageons quelques mots sur l'expérience vécue. Le massage s'effectue
                      sur table. Je pratique le massage cachemirien au sol après un premier massage
                      sur table et uniquement si je sens que la personne est prête à cela. J'utilise
                      une huile tiède neutre et bio. Le massage tantrique se pratique généralement
                      totalement nu mais le temps d'échange permet de poser vos limites et d'en
                      discuter. Les parties génitales externes sont considérées au même titre que le
                      reste du corps, les mains passent dessus sans intention spécifique et
                      seulement si c'est juste pour vous. IL NE S'AGIT PAS D'UN MASSAGE ÉROTIQUE.
                      Aucun geste envers-moi ou demande déplacée ne seront acceptés. Tout
                      comportement inapproprié ou manque de respect envers la masseuse entraînera
                      une cessation immédiate de la séance, sans remboursement.
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
          analyticsEvent="rdv-form-massage"
          subjectOptions={[
            { label: 'Prendre un rendez-vous Massage Tantrique - Tao' },
            { label: 'Autre' },
          ]}
          backgroundColor="#3d240d"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

MassageTantriqueTao.displayName = 'MassageTantriqueTao';
