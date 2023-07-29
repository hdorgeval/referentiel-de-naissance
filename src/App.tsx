import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { Temoignages } from './pages/Temoignages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
