import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        return(
            <div className="Main" style={{overflowX: "hidden"}}>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>Back</Link>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: "-10px"}}>
        <a className="navbar-brand" href="#" style={{fontSize: "43px", fontWeight: "bolder"}}>olx</a>
        <form className="form-inline my-2 my-lg-0">
            <div className="main">
            <div className="form-group" >
            <span className="fa fa-search form-control-icon"></span>
            <select className="form-control" style={{width: "250px", height: "50px", fontSize: "20px"}}>
                <option>Pakistan</option>
                <option>USA</option>
                <option>Canada</option>
                <option>London</option>
            </select>
            </div>
            </div>
          </form>
          <form class="example" >
         <input type="text" placeholder="Search.." name="search"  style={{width: "620px", height: "50px"}}/>
         <button  class="search1" type="submit" style={{height: "50px" ,width: "55px", backgroundColor: "black", color: "white"}}><i class="fa fa-search" style={{fontSize: "25px", marginTop: "-1px"}}></i></button>
         </form> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{marginleft: "-200px" }}>
            <li>
              <Link to="/"  style={{textDecoration: "none", color: "black"}}><h4 style={{marginTop: "15px",fontSize: "17px"}}><u>Login</u></h4></Link>
            </li>
            <li className="nav-item active rounded ml-3">
              <button className="button" style={{width: "120px", borderRadius: "40px", height: "50px", fontSize: "20px"}}><span style={{fontSize: "20px", marginLeft: "-10px"}}>+</span>Sell</button>
            </li>
          </ul>
          
        </div>
      </nav>
      <div className="row">
                    <div className="col-lg-6">
                    <div class="btn-group">
                     <button type="button" style={{fontSize: "20px", marginTop: "-20px", outline: "none" , border: 0}} class="btn btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      All Categories<i className="fa fa-chevron-down"></i>
                     </button>
                     <div class="dropdown-menu" style={{fontSize: "16px"}}>
                     <a class="dropdown-item" href="#">Vehicles</a>
                     <a class="dropdown-item" href="#">Mobiles</a>
                    <a class="dropdown-item" href="#">Electronics and Home Appliances</a>
                    <a class="dropdown-item" href="#">Property for sale</a>
                    <a class="dropdown-item" href="#">Animals</a>
                    <a class="dropdown-item" href="#">Furniture and Home Decor</a>
                    <a class="dropdown-item" href="#">Business, Industria and agriculture</a>
                    <a class="dropdown-item" href="#">Bikes</a>
                    <a class="dropdown-item" href="#">Fashion and Beauty</a>
                    <a class="dropdown-item" href="#">Property for rent</a>
                    <a class="dropdown-item" href="#">Jobs</a>
                    <a class="dropdown-item" href="#">Services</a>
                    <a class="dropdown-item" href="#">Books, Sports and Hobbies</a>
                    <a class="dropdown-item" href="#">Kids</a>
                    </div>
                    <ul className="navbarextra" style={{width: "900px"}}>
                        <li className="extra1" ><Link to="/Mobile" style={{textDecoration: "none", color: "black"}}>Mobile Phones</Link></li>
                        <li className="extra"><Link to="/Cars" style={{textDecoration: "none", color: "black"}}>Cars</Link></li>
                        <li className="extra"><Link to="/Motor" style={{textDecoration: "none", color: "black"}}>Motor Cycles</Link></li>
                        <li className="extra"><Link to="/House" style={{textDecoration: "none", color: "black"}}>Houses</Link></li>
                        <li className="extra"><Link to="/Tv" style={{textDecoration: "none", color: "black"}}>Tv-video-audio</Link></li>
                        <li className="extra"><Link to="/Tablet" style={{textDecoration: "none", color: "black"}}>Tablets</Link></li>
                        <li className="extra"><Link to="/House" style={{textDecoration: "none", color: "black"}}>Land & Plots</Link></li>
                    </ul>
            </div>
                    </div>
            </div>
            </div>
        );
    }
}

export default Header;