import React from "react";
import { Link } from "react-router-dom";
import "./Shoes.css";

export default function Shoes() {
  return (
    <>
      <img className="shoesHeroImg" src="Images/shoesPageHero.jpg" alt="shoesHeroImg" />

      <h2>Red Tape</h2>

      <div className="shoes">
        <div className="card">
          <Link to = '/redtape1' ><img src="Images\redTape-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape2' ><img src="Images\redTape-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape3' ><img src="Images\redTape-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape4' ><img src="Images\redTape-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>
      </div>

      <h2>Puma</h2>
      <div className="shoes">
        <div className="card">
          <Link to = '/puma1' ><img src="Images\puma-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>4,999.00</p>
        </div>

        <div className="card">
          <Link to = '/puma2' ><img src="Images\puma-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>4,999.00</p>
        </div>

        <div className="card">
          <Link to = '/puma3' ><img src="Images\puma-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>4,999.00</p>
        </div>

        <div className="card">
          <Link to = '/puma4' ><img src="Images\puma-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>4,999.00</p>
        </div>
      </div>

      <h2>Nike</h2>
      <div className="shoes">
        <div className="card">
        <Link to = '/nike1' ><img src="Images\Nike-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>3,999.00</p>
        </div>

        <div className="card">
        <Link to = '/nike2' ><img src="Images\Nike-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>3,999.00</p>
        </div>

        <div className="card">
        <Link to = '/nike3' ><img src="Images\Nike-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>3,999.00</p>
        </div>

        <div className="card">
        <Link to = '/nike4' ><img src="Images\Nike-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>3,999.00</p>
        </div>
      </div>

      <h2>Campus</h2>
      <div className="shoes">
        <div className="card">
          <Link to = '/campus1' ><img src="Images\campus-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>

        <div className="card">
          <Link to = '/campus2' ><img src="Images\campus-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>

        <div className="card">
          <Link to = '/campus3' ><img src="Images\campus-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>

        <div className="card">
          <Link to = '/campus4' ><img src="Images\campus-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>
      </div>
    </>
  );
}
