import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { adminRoutes, authRoutes } from './routes/routes';

import AuthLayout from './layouts/authLayout';
import AdminLayout from './layouts/adminLayout';
import Home from './pages/user/home/Home';
import Error from './pages/error';
import ProtectedRoutes from './components/protectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />

        <Route path='auth' element={<AuthLayout />}>
          {authRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} index={route.index} path={route.path} element={<Page />} />;
          })}
        </Route>

        {/* <Route path='admin' element={<AdminLayout />}> */}
        <Route path='admin' element={<ProtectedRoutes component={AdminLayout} />}>
          {adminRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} index={route.index ?? false} element={<Page />}>
                {route.children &&
                  route.children.map((routeChild, index) => {
                    const ChildrenPage = routeChild.component;
                    return (
                      <Route
                        key={index}
                        index={routeChild.index ?? false}
                        path={routeChild.path}
                        element={<ChildrenPage />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
