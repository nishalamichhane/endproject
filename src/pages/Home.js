import React from 'react';
import { Link } from 'react-router-dom';
import computer from '../assets/computer-1419134_960_720.png';
import Ljacket from '../assets/gents-jacket.png';
import Mjacket from '../assets/jas.png';
import ring from '../assets/MicrosoftTeams-image.png';
function Home() {
    return (
        <>
            <h3 align="center">We kunnen deze dingen op de website vinden !! </h3>
            <section>
                <h4>. Electronics </h4>
                <h4>. Ladies Clothing </h4>
                <h4>. Mens Clothing </h4>
                <h4>. Jwelery </h4>
            </section>
            <div className="image_pos">
                <img src ={computer} alt="" width ={300} height={300}></img>
                <img src ={Ljacket} alt="" width ={300} height={300}></img>
               <img src ={Mjacket} alt="" width ={300} height={300}></img>
               <img src ={ring} alt="" width ={300} height={300}></img>
            </div>

        </>
    );
}
export default Home;
