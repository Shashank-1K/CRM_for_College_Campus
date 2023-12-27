import './App.css';
import IndexPage from './components/pages/Home';
import Login from './components/auth/Login';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Root from './components/pages/Root';
import Register from './components/auth/Register';
import FacultyLogin from './components/auth/FacultyLogin';
import FacultyRegister from './components/auth/FacultyRegister';
import Protected from './Protected';
import Profile from './components/pages/Profile';
import FacultyProfile from './components/pages/FacultyProfile';
import StudentsData from './components/pages/StudentsData';
import FacultyData from './components/pages/FacultyData';
import Eie from './components/pages/Eie';
import Civil from './components/pages/Civil';
import Aids from './components/pages/Aids';
import Automobile from './components/pages/Automobile'
import CseAiml from './components/pages/CseAiml';
import Ece from './components/pages/Ece';
import It from './components/pages/It'
import Mechanical from './components/pages/Mechanical';
import HandS from './components/pages/HandS';
import Eee from './components/pages/Eee';
import Cse from './components/pages/Cse';
import NotandTt from './components/pages/NotandTt';

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<IndexPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/FacultyLogin' element={<FacultyLogin/>}></Route>
      <Route path='/FacultyRegister' element={<FacultyRegister/>}></Route>
      <Route path='/profile' element={<Protected><Profile/></Protected>}></Route>
      <Route path='/FacultyProfile' element={<Protected><FacultyProfile/></Protected>}></Route>
      <Route path='/studentsdata' element={<Protected><StudentsData/></Protected>}></Route>
      <Route path='/FacultyData' element={<Protected><FacultyData/></Protected>}></Route>
      <Route path='/dept/Eie' element={<Protected><Eie/></Protected>}></Route>
      <Route path='/dept/Civil' element={<Protected><Civil/></Protected>}></Route>
      <Route path='/dept/Aids' element={<Protected><Aids/></Protected>}></Route>
      <Route path='/dept/Automobile' element={<Protected><Automobile/></Protected>}></Route>
      <Route path='/dept/CseAiml' element={<Protected><CseAiml/></Protected>}></Route>
      <Route path='/dept/Ece' element={<Protected><Ece/></Protected>}></Route>
      <Route path='/dept/Mechanical' element={<Protected><Mechanical/></Protected>}></Route>
      <Route path='/dept/HandS' element={<Protected><HandS/></Protected>}></Route>
      <Route path='/dept/It' element={<Protected><It/></Protected>}></Route>
      <Route path='/dept/Eee' element={<Protected><Eee/></Protected>}></Route>
      <Route path='/dept/Cse' element={<Protected><Cse/></Protected>}></Route>
      <Route path='/NotandTt' element={<Protected><NotandTt/></Protected>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
