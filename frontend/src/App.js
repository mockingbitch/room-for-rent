import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './containers/layouts';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const authRedux = useSelector(state => state.auth);
  const isLoggedIn = authRedux.isLoggedIn;

  return (
    <>
      <Router>
          <Routes>
            { publicRoutes.map((publicRoute, index) => {
                const PublicLayout = publicRoute.layout || DefaultLayout;
                const PublicPage = publicRoute.component;

                return (
                  <Route key={ index } path={ publicRoute.path } element={
                    <PublicLayout>
                      <PublicPage />
                    </PublicLayout>
                  } />
                )
            })}

          { isLoggedIn && privateRoutes.map((privateRoute, index) => {
            const PrivateLayout = privateRoute.layout || DefaultLayout;
            const PrivatePage = privateRoute.component;

            return (
              <Route key={ index } path={ privateRoute.path } element={
                <PrivateLayout>
                  <PrivatePage />
                </PrivateLayout>
              } />
            )
          })}
          </Routes>
      </Router>
    </>
  );
}

export default App;
