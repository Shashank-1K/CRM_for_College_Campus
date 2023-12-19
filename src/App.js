import './App.css';
import IndexPage from './components/pages/Home';
import Login from './components/auth/Login';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Root from './components/pages/Root';
import Register from './components/auth/Register';
import Protected from './Protected';
import Profile from './components/pages/Profile';
import StudentsData from './components/pages/StudentsData';
function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<IndexPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<Protected><Profile/></Protected>}></Route>
      <Route path='/studentsdata' element={<Protected><StudentsData/></Protected>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
