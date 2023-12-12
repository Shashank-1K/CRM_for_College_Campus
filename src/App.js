import './App.css';
import IndexPage from './components/pages/Home';
import Login from './components/auth/Login';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Root from './components/pages/Root';
function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<IndexPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
