import { FC } from 'react';
import { usePublicPage } from '../contexts/userContext';
import { useMetaDescription } from '../hooks/useMetaDescription';
import { useTitle } from '../hooks/useTitle';
import { websiteConfig } from '../website.config';
import { Footer } from './page-layout/Footer';
import { HambugerMenu } from './page-layout/HamburgerMenu';
import { PageTitle } from './page-layout/PageTitle';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  usePublicPage();
  useTitle(`Qui-suis je? | ${websiteConfig.websiteTitle}`);
  useMetaDescription(`Qui-suis je? | ${websiteConfig.websiteTitle}`);
  return (
    <>
      <HambugerMenu />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/landing-page-background.jpg")`,
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="mt-6">
              <PageTitle>Qui suis-je ?</PageTitle>
            </div>
            <div className="" style={{ minHeight: '3rem' }}></div>
            <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="">Morbi sed vestibulum ipsum, aliquam fermentum leo.</p>
              <p className="">
                Sed accumsan leo vitae placerat interdum. Phasellus vitae nibh lobortis, congue arcu
                nec, venenatis magna. Donec posuere nisi eu tellus pharetra, sit amet congue purus
                sagittis.
              </p>
              <p>
                Pellentesque id aliquam erat. Pellentesque tempus et justo vel placerat. Praesent id
                ipsum eu neque tincidunt laoreet vel quis urna.
              </p>
              <p className="mb-0 pb-0">
                Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at
                est nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet
                nec est id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra
                ultricies accumsan. Etiam placerat tempor nunc vitae cursus.
              </p>
            </SemiTransparentTile>
            <div className="fs-4 fw-bolder font-monserrat mt-4 mx-4 text-start text-light"></div>

            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
