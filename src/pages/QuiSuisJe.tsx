import { FC } from 'react';
import { Description } from '../components/Description';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
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
            <Description>
              Aujourd'hui je me définirais comme une facilitatrice, une accompagnatrice de l'Être,
              une révélatrice de potentiels. J'ai mené un métier ancré dans la réalité matérielle
              pendant 25 ans au service des entreprises. En parallèle j'ai toujours été intéressée
              et attirée par tout ce qui touchait à un monde plus subtil, énergétique, invisible et
              petit à petit je me suis tournée vers le développement personnel, les thérapies
              corporelles et les méthodes alternatives faisant intervenir le bien-être du corps et
              de l'esprit. Je me forme d'abord à la sophrologie auprès de l'Académie de sophrologie
              de Paris avec le Dr Chéné. Puis je découvre un outil tarologique le référentiel de
              naissance qui est une méthode créée par Georges Colleuil. Je me forme pendant 4 ans à
              cet outil thérapeutique et initiatique et je chemine depuis avec le tarot. Depuis je
              continue à me former, cheminer, transmuter et approfondir mes connaissances et ma
              pratique en explorant toujours et encore les dimensions du corps, du cœur et de
              l'esprit dans la matière et le subtil. Aujourd'hui je suis plus à l'écoute de mon
              corps et de mes intuitions, plus alignée dans mes choix, auteure de ma vie, autonome
              et libre de vivre mes aspirations pour être à ma juste place à savoir
              l'accompagnement, l'écoute pour vous transmettre à mon tour les clés pour aborder ce
              chemin vers Soi le mieux possible. Nous avons tous un chemin à parcourir pour nous
              reconnecter à notre être profond et aller vers notre mission d'âme. « Tout le chemin
              de la vie c'est de passer de la peur à l'amour ». Frédéric Lenoir
            </Description>

            <p className="fs-2">Mes apprentissages</p>
            <p>J'ai eu la chance et l'opportunité de me former à différentes pratiques :</p>
            <p className="">
              <span className="text-info">La Sophrologie</span> auprès de l'académie de sophrologie
              de Paris et du Dr Chéné ou je suis certifiée RCNP;
            </p>
            <p>
              <span className="text-info fw-bolder">
                Le Référentiel de naissance par le tarot de Marseille
              </span>{' '}
              auprès de Maïté Elissalde;
            </p>
            <p>
              <span className="text-info fw-bolder">La Numérologie Karmique</span> auprès de Maïté
              Elissalde;
            </p>
            <p>
              <span className="text-info fw-bolder">Le Chamanisme matriciel</span> auprès de Pierre
              Dugenetay;
            </p>
            <p>
              <span className="text-info fw-bolder">La Trame</span> auprès de Catherine Didelot;
            </p>
            <p>
              <span className="text-info fw-bolder">
                Les Constellations Familiales et Systémiques
              </span>{' '}
              auprès de Jean-Marc Belanger;
            </p>
            <p>
              <span className="text-info fw-bolder">L'harmonisation émotionnelle</span> auprès de
              Régis Grouard;
            </p>
            <p>
              <span className="text-info fw-bolder">L'Hypnose Ericksonienne</span> auprès de
              Jean-Marie et Bernadette Caplain;
            </p>
            <p>
              <span className="text-info fw-bolder">Le Tantra</span> auprès de Tantra intégral et
              Jacques Ferber.
            </p>
            <p className="mb-0 pb-0"></p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
