import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/components/login';
import Customer from './pages/admin/customer';
import Services from './pages/admin/services/Services';
import ListService from './pages/admin/services/components/ListService';
import ServicesDetail from './pages/admin/services/components/ServicesDetail';
import Home from './pages/user/home/Home';
import AuthLayout from './layouts/authLayout';
import { authRoutes } from './routes/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='auth' element={<AuthLayout />}>
          {authRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} index={route.index ?? false} path={route.path} element={<Page />}></Route>;
          })}
        </Route>

        <Route path='/' element={<Home />} />
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='services' element={<Services />}>
          <Route path='list' element={<ListService />} />
          <Route path=':id' element={<ServicesDetail />} />
        </Route>
        <Route path='users' element={<Customer />} />
      </Routes>
    </Router>
  );
}

export default App;
