import React from 'react';
import { Link } from 'react-router-dom';
import computer from '../assets/ComputerUltraThin.jpg';
import Ljacket from '../assets/LeatherJacket.jpg';
import Mjacket from '../assets/MensJacket.jpg';
import ring from '../assets/ring.jpg';
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
