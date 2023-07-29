import { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const LandingPage: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/landing-page-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="29%"
        backgroundPositionY="29%"
        htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}
      >
        <div
          className="d-flex flex-column justify-content-start align-items-center overflow-y-scroll"
          style={{ height: '100vh', minHeight: '100vh' }}
        >
          <div className="flex-grow-half"></div>
          <div className="mt-4">
            <PageTitle className="font-mali">Spirale Intérieure</PageTitle>

            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-80 mt-4 text-nowrap"
              link={websiteConfig.links.rdv.url}
              title={websiteConfig.links.rdv.title}
              analyticsEvent="rdv-ou-contact"
            >
              <div className="d-flex flex-column align-items-center">
                <span className="">{websiteConfig.links.rdv.label}</span>
              </div>
            </OpenExternalLinkButton>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

LandingPage.displayName = 'LandingPage';
