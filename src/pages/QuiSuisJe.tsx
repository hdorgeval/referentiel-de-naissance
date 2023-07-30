import { FC } from 'react';
import { usePublicPage } from '../contexts/userContext';
import { useMetaDescription } from '../hooks/useMetaDescription';
import { useTitle } from '../hooks/useTitle';
import { websiteConfig } from '../website.config';
import { Footer } from './page-layout/Footer';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  usePublicPage();
  useTitle(`Qui-suis je? | ${websiteConfig.websiteTitle}`);
  useMetaDescription(`Qui-suis je? | ${websiteConfig.websiteTitle}`);
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/qui-suis-je-background.png"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="95%"
        backgroundPositionY="35%"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Qui suis-je ?</PageTitle>
          </div>
          <div className="" style={{ minHeight: '45vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-5 font-kite-one px-4 py-4">
            <p className="">Bonjour !</p>
            <p>Je suis Isabelle Hervouet.</p>
            <p className="">
              Aujourd'hui je me définirais comme une facilitatrice, une accompagnatrice de l'Être,
              une révélatrice de potentiels.
            </p>
            <p>
              J'ai mené un métier ancré dans la réalité matérielle pendant 25 ans au service des
              entreprises.
            </p>
            <p>
              En parallèle j'ai toujours été intéressée et attirée par tout ce qui touchait à un
              monde plus subtil, énergétique, invisible et petit à petit je me suis tournée vers le
              développement personnel, les thérapies corporelles et les méthodes alternatives
              faisant intervenir le bien-être du corps et de l'esprit.
            </p>
            <p>
              Je me forme d'abord à la sophrologie auprès de l'Académie de sophrologie de Paris avec
              le Dr Chéné. Puis je découvre un outil tarologique le référentiel de naissance qui est
              une méthode créée par Georges Colleuil.
            </p>
            <p>
              Je me forme pendant 4 ans à cet outil thérapeutique et initiatique et je chemine
              depuis avec le tarot. Depuis je continue à me former, cheminer, transmuter et
              approfondir mes connaissances et ma pratique en explorant toujours et encore les
              dimensions du corps, du cœur et de l'esprit dans la matière et le subtil.
            </p>
            <p>
              Aujourd'hui je suis plus à l'écoute de mon corps et de mes intuitions, plus alignée
              dans mes choix, auteure de ma vie, autonome et libre de vivre mes aspirations pour
              être à ma juste place à savoir l'accompagnement, l'écoute pour vous transmettre à mon
              tour les clés pour aborder ce chemin vers Soi le mieux possible.
            </p>
            <p>
              Nous avons tous un chemin à parcourir pour nous reconnecter à notre être profond et
              aller vers notre mission d'âme.
            </p>
            <p>
              « Tout le chemin de la vie c'est de passer de la peur à l'amour ». Frédéric Lenoir
            </p>

            <p className="mb-0 pb-0"></p>
          </SemiTransparentTile>
          <div className="fs-4 fw-bolder font-monserrat mt-4 mx-4 text-start text-light"></div>

          <div className="p-2 flex-grow-1 bd-highlight"></div>
          <Footer />
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
