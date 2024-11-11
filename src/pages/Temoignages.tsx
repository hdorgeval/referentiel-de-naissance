import { FC } from 'react';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const Temoignages: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/temoignages.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPosition="33%"
      htmlTitle={`Témoignages | ${websiteConfig.websiteTitle}`}
    >
      <div>
        <div className="mt-7">
          <PageTitle>Témoignages</PageTitle>
        </div>

        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                <div
                  className="rounded-circle d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: '#4f46e5',
                  }}
                >
                  <span className="fs-1 fw-bolder p-0">J</span>
                </div>
                <div className="d-flex flex-column align-items-start ms-4">
                  <div className="card-title fs-5 mb-0">Joëlle C.</div>
                  <div className="card-title fs-7">
                    <span>
                      64 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Yvelines (78)
                    </span>
                  </div>
                  <div>
                    <FiveStarRating />
                  </div>
                </div>
              </div>
              <div className="pt-4 w-100">
                <Description>
                  Je viens de m'offrir mon référentiel de Naissance auprès d'Isabelle. Une
                  expérience incroyablement enrichissante qui m'a confirmé que le contrat
                  d'incarnation que j'avais signé avec moi-même a bel et bien trouvé son essence et
                  son expansion dans la voie du Massage Tantrique. Je vous conseille vraiment de
                  vivre l'expérience de cet outil de connaissance de soi en lien avec votre contrat
                  d'âme et votre karma accompagné par Isabelle que je recommande vivement.
                </Description>
              </div>
            </div>
          </div>

          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                <div
                  className="rounded-circle d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: '#4f46e5',
                  }}
                >
                  <span className="fs-1 fw-bolder p-0">B</span>
                </div>
                <div className="d-flex flex-column align-items-start ms-4">
                  <div className="card-title fs-5 mb-0">Bernadette</div>
                  <div className="card-title fs-7">
                    <span>
                      48 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Paris
                    </span>
                  </div>
                  <div>
                    <FiveStarRating />
                  </div>
                </div>
              </div>
              <div className="pt-4 w-100">
                <Description>
                  Merci pour le référentiel de naissance, outil puissant et impressionnant en effet.
                  J'ai vu ma vie défiler...
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Temoignages.displayName = 'Temoignages';
