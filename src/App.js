/** @format */

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {routes} from './routes';
import DefalutComponent from './components/DefaultComponent/DefaultComponent';
import {Fragment} from 'react';

function App() {
   return (
      <div>
         <Router>
            <Routes>
               {routes.map((route) => {
                  const Page = route.page;
                  const Layout = route.isShowHeader ? DefalutComponent : Fragment;
                  return (
                     <Route
                        key={route.path}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </Router>
      </div>
   );
}

export default App;
