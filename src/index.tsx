import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './Navigation/PublicRoute';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './Services/Constants/Routing';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { SuspenseBackdropView } from './Components/Views/SuspenseBackdropView';
import { NavigationDrawer } from './Components/Navigation/NavigationDrawer';
import { createRoot } from 'react-dom/client';
import { AuthenticationRoutes } from './Navigation/Authentication/AuthenticationRoutes';
import { AuthenticationRoute } from './Navigation/Authentication/AuthenticationRoute';
import { AuthenticationProvider } from './Providers/AuthenticationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CoursesRoutes } from './Navigation/Courses/CoursesRoutes';

const HomePage = lazy(() => import('./Pages/HomePage'));
const NotFoundPagePage = lazy(() => import('./Pages/NotFoundPage'));

const IndexRoute = () => {
  return (
    <Suspense fallback={<SuspenseBackdropView />}>
      <NavigationDrawer>
        <Routes>
          <Route element={<AuthenticationRoute />}>
            <Route path={`${AppRoutes.Home}/*`} element={<HomePage />} />
            <Route path={`${AppRoutes.Courses}/*`} element={<CoursesRoutes />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path={`${AppRoutes.Auth}/*`} element={<AuthenticationRoutes />} />
          </Route>

          <Route path={AppRoutes.NotFound} element={<NotFoundPagePage />} />
        </Routes>
      </NavigationDrawer>
    </Suspense>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AuthenticationProvider>
            <IndexRoute />
          </AuthenticationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
