import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import SignIn from './pages/SignIn'; 
import SignUp from './pages/SignUp'; 
import About from './pages/About';
import Profile from './pages/Profile';
// import Header from './components/Header'; 
// import PrivateRoute from './components/PrivateRoute'; 
// import CreateListing from './pages/CreateListing'; 
// import UpdateListing from './pages/UpdateListing'; 
// import Listing from './pages/Listing'; 
// import Search from './pages/Search';






const App = () => {
  return (
<BrowserRouter>
  <Routes>
    {/* Cover everything with BrowserRouter and Routes and then include all the routes */}
    <Route path='/' element={<Home />} /> 
    <Route path='/sign-in' element={<SignIn />} /> 
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/about' element={<About />} /> 
    <Route path='/profile' element={<Profile />} /> 
    {/* <Route path='/search' element={<Search />} />  */}
    {/* <Route path='/listing/:listingId' element={<Listing />} /> */}

  </Routes>
  </BrowserRouter>
  );
}

export default App;




// export default function App(){
//   return 

// }
