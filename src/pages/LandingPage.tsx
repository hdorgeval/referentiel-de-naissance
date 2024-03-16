import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const LandingPage: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/landing-page.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
      backgroundPositionX="44%"
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
          <PageSubTitle className="font-open-sans pt-4 fst-italic">Isabelle Hervouet</PageSubTitle>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

LandingPage.displayName = 'LandingPage';
