import "./App.css"; //Import du style globale
//Import des composants basiques de navigation
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from './composantes/navbar/navbar'
import Accueil from './pages/accueil'
import Vols  from './pages/vols'




export default function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <main className="main-content">
     <Routes>
       <Route path="/" element={<Accueil />} />
       <Route path="/vols" element={<Vols />} />
     </Routes>
   </main>

 </BrowserRouter>
  );
}
