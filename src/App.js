import './App.css';
import './index.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Rgsbox from './Pages/Rgsdata/Rgsbox';
import Solving from './Pages/SolvingComplex/Solving';
import Solvingdata from './Pages/SolvingComplex/Solvingdata';
import Industry from './Pages/IndustryExp/Industry';
import Services from './Pages/Services/Services';
import ClientStory from './Pages/SuccessStroies/ClientStory';
import OurPartner from './Pages/OurPartner/OurPartner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarNew from './Pages/Newnav/NavbarNew';
//import DataEngineer from './Pages/DataEng/DataEngineer';
import Dataeng from './Pages/DataEngineer/Dataeng';

import CloudEngineer from './Pages/CloudEng/CloudEngineer';
import HomeSection from './Components/Homecomp/HomeSection';
import Navbar from './Components/Navbar/Navbar';
//  import Footer from './Pages/Footers/Footer';
import DataEngineerSec from './Components/DataEngineerComp/DataEngineerSec';
import Footer from './Pages/NewFooter/Footer';

import ContactPage from './Components/Contact/ContactPage';
import Banking from './Components/Banking&Finance/Banking';
import Blogs from './Pages/Blog/Blogs';
import DigitalEngineer from './Pages/DigitalEng/DigitalEngineer';
import ConsultyAd from './Pages/Consultys/ConsultyAd';
import TravelTrans from './Components/Travel&Transport/TravelTrans';


function App() {
  return (
    <div className='App'>
      <section className='h-screen bg-empower bg-cov
       font=[Poppins] md:bg-top bg-center'>
      <Router>
       <NavbarNew />
      
      
     

        {/* <Navbar/> */}
      
 
        <Routes>
          
            <Route path='/' element={<HomeSection />} />   

          <Route path='/services' element={<Services />} />
          <Route path='/industry' element={<Industry />} />

          <Route path='/solving' element={<Solving />} />
          <Route path='/clientstory' element={<ClientStory />} />
          {/* <Route path='/ourpartner' element={<OurPartner/>} /> */}

          {/* <Route path='/dataeng' element={<DataEngineer/>} /> */}
          <Route path='/dataeng' element={<DataEngineerSec />} />
          <Route path="/digitaleng" element={<DigitalEngineer/>}/>

          <Route path='/cloudeng' element={<CloudEngineer />} />
          <Route path='/consulty' element={<ConsultyAd />} />
          <Route path='/contact' element={<ContactPage />} />

          <Route path='/banking' element={<Banking />} />
          <Route path='/travel&trans' element={<TravelTrans />} />

          <Route path='/blog' element={<Blogs />} />
        </Routes>
      </Router>
     
      </section>
    </div>
  );
}

export default App;
