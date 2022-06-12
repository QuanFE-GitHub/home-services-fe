import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/components/login';
import Customer from './pages/admin/customer';
import Services from './pages/admin/services/Services';
import ListService from './pages/admin/services/components/ListService';
import ServicesDetail from './pages/admin/services/components/ServicesDetail';
import Home from './pages/user/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
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
