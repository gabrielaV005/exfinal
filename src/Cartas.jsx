import './cartas.css'
function Cartas(proms)
{
    return(
        <div className='PrinCartas'>
        <div className="carta">
            <div className="imCarta">
                <img src="../public/jd.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>JOHNNY DEPP</h3>
            </div>
        </div>

        <div className="carta">
            <div className="imCarta">
                <img src="../malek.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>Rami Malek</h3>
            </div>
        </div>

        <div className="carta">
            <div className="imCarta">
                <img src="../public/sandler.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>Adam Sandler</h3>
            </div>
        </div>
        </div>
    );
}
export default Cartas;