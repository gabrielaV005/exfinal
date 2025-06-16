import './principal.css'
import './global.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Cartas from './Cartas.jsx'
import Modal1 from './Modal1.jsx'
import Modal2 from './Modal2.jsx'
import Modal3 from './Modal3.jsx'
import Modal4 from './Modal4.jsx'
import Modal5 from './Modal5.jsx'
import Modal6 from './Modal6.jsx'


function Inicio()
{
    return(
        <div>
            <h1>ESTO ES INICIO</h1>
            <Cartas></Cartas>
        </div>
    );
}

function  Ofertas()
{
     
    return(
        <div className="modals">
           
            
            <h2>RESUMENES DE PELICULAS</h2>
             
            <div className="botones">
                 
                
                <Modal1></Modal1>
                <Modal2></Modal2>
                <Modal3></Modal3>
                <Modal4></Modal4>
                <Modal5></Modal5>
                <Modal6></Modal6>
            </div>
        </div>
    );
}

function Principal()
{
    return(
        <div className="caja">
            <div className="contenido">
                <div className="titulo">
                HOLLYWOOD
                </div>
                <div className="navbar">
                   <ul className='lista'>
                    <li><Link to='/'>Principal</Link></li>

                    <li><Link to='/pag2'>Peliculas</Link></li>
                   </ul>
                </div>
                <div className="cuerpo">
                <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/pag2" element={<Ofertas></Ofertas>}></Route>
                </Routes>
                </div>
            </div>
            <div className="footer">
                <h3>BELEN GABRIELA VILALO LOPEZ - 2025</h3>
            </div>
        </div>
    );
}
export default Principal;