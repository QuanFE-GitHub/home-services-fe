import { Routes, Route } from 'react-router-dom';

import CustomRouter from './components/customRouter';
import { authRoutes } from './routes/routes';
import { history } from './utils/history';

function App() {
  return (
    <CustomRouter history={history}>
      <Routes>
        <div className='App'>
          {authRoutes.map((route, idx) => {
            return <Route key={idx} index={route.index ?? false} path={route.path} element={route.component}></Route>;
          })}
        </div>
      </Routes>
    </CustomRouter>
  );
}

export default App;
