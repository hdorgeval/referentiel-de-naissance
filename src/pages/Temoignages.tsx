import { FC } from 'react';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
import { FourStarRating } from '../components/FourStarRating';
import { OneLetterPill } from '../components/OneLetterPill';
import { ThreeStarRating } from '../components/ThreeStarRating';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const Temoignages: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-temoignages.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
        backgroundPosition="33%"
        htmlTitle={`Témoignages | ${websiteConfig.websiteTitle}`}
      >
        <div>
          <div className="mt-6">
            <PageTitle>Témoignages</PageTitle>
          </div>

          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>C</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Carole J.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>V</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">VB</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>D</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Delphine L.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>C</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Caroline Q.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>J</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">John D.</div>
                  <div>
                    <ThreeStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>I</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Isabelle J.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>D</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Declan K.</div>
                  <div>
                    <FourStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>S</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Steve L.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed vestibulum
                    ipsum, aliquam fermentum leo.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Temoignages.displayName = 'Temoignages';
