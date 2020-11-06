import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../img/message.png';
import Logo1 from '../img/Bell.png';
import Logo2 from '../img/Galeery.png';
import Car from '../img/Car.jpg';
import Mob1 from '../img/Mob1.jpg';
import Heart from '../img/Heart.jpg';
import '../Components/Navbar.css';
import '../Components/Navbar1.css';
import '../Components/Mobile.css';

class Mobile extends React.Component{
    render(){
        return(
            <div style={{overflowX: "hidden"}}>
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
                        <li className="extra">Cars</li>
                        <li className="extra">Motor Cycles</li>
                        <li className="extra">Houses</li>
                        <li className="extra">Tv-video-audio</li>
                        <li className="extra">Tablets</li>
                        <li className="extra">Land & Plots</li>
                    </ul>
            </div>
                    </div>
                
            <div className="Image">
                <img src="https://tpc.googlesyndication.com/simgad/12756253881537486263" style={{marginLeft: 200}}/>
            </div>
            <div className="VNavbar">
                <h1 style={{marginLeft: "40px"}}><b>Mobile Phones</b></h1>
                <br />
                <h3 style={{marginLeft: "50px"}}>Filters</h3>
                <hr style={{border: "1.1px solid #DCDCDC", width: "250px", marginLeft: "50px", backgroundColor: "#DCDCDC"}} />
                <div className="dropdown">
                <button className="btn" style={{fontSize: "20px", marginLeft: "40px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Categories<i className="fa fa-angle-down" style={{marginLeft: "130px"}}></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tablets</a>
                <a class="dropdown-item" href="#">Accessories</a>
                <a class="dropdown-item" href="#">Mobile Phones</a>
                </div>
            </div>
            <hr style={{border: "1.1px solid #DCDCDC", width: "250px", marginLeft: "50px", backgroundColor: "#DCDCDC"}} />
            <div class="dropdown">
                <button class="btn" style={{fontSize: "20px", marginLeft: "40px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Location<i className="fa fa-angle-down" style={{marginLeft: "150px"}}></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tablets</a>
                <a class="dropdown-item" href="#">Accessories</a>
                <a class="dropdown-item" href="#">Mobile Phones</a>
                </div>
            </div>
            <hr style={{border: "1.1px solid #DCDCDC", width: "250px", marginLeft: "50px", backgroundColor: "#DCDCDC"}} />
            <div class="dropdown">
                <button class="btn" style={{fontSize: "20px", marginLeft: "40px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Make<i className="fa fa-angle-down" style={{marginLeft: "179px"}}></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tablets</a>
                <a class="dropdown-item" href="#">Accessories</a>
                <a class="dropdown-item" href="#">Mobile Phones</a>
                </div>
            </div>
            <hr style={{border: "1.1px solid #DCDCDC", width: "250px", marginLeft: "50px", backgroundColor: "#DCDCDC"}} />
            <div class="dropdown">
                <button class="btn" style={{fontSize: "20px", marginLeft: "40px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Price<i className="fa fa-angle-down" style={{marginLeft: "185px"}}></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tablets</a>
                <a class="dropdown-item" href="#">Accessories</a>
                <a class="dropdown-item" href="#">Mobile Phones</a>
                </div>
            </div>
            <hr style={{border: "1.1px solid #DCDCDC", width: "250px", marginLeft: "50px", backgroundColor: "#DCDCDC"}} />
            <div class="dropdown">
                <button class="btn" style={{fontSize: "20px", marginLeft: "40px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Condition<i className="fa fa-angle-down" style={{marginLeft: "140px"}}></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tablets</a>
                <a class="dropdown-item" href="#">Accessories</a>
                <a class="dropdown-item" href="#">Mobile Phones</a>
                </div>
            </div>
            
            </div>
            <br />
            <div className="row1" style={{fontSize: "10px", marginTop: "70px"}}>
            <div className="col-sm-4 col-2" style={{marginLeft: "60px"}}><div className="line"><p style={{fontSize: "15px"}}>13020 ads in Pakistan</p></div></div>
            <div className="col-sm-0"><div className="line1"><h4>View</h4></div></div>
            {/* <div className="col-sm-1"><div className="line"><i className="fa fa-bars"></i></div></div>
            <div className="col-sm-0"><div className="line"><i className="fa fa-th-large"></i></div></div>
            <div className="col-sm-1"><div className="line"><i className="fa fa-laptop"></i></div></div>
            <div className="col-sm-1"><div className="line"></div></div> */}
            <div className="col-sm-4" style={{fontSize: "15px", marginLeft: "30px", marginTop: "-24px"}}><i className="fa fa-bars">&nbsp;&nbsp;</i><i className="fa fa-th-large"></i>&nbsp;&nbsp;&nbsp;
            <i className="fa fa-laptop"></i>
            </div>
            <hr className="hr"/>
            <div className="vertical"></div>
            {/* <div className="col-sm-12" style={{marginleft: "200px"}}><div className="dropdown dropdown1" >
        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" style={{border: "none", textDecoration: "none"}}>
          Dropdown button
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Link 1</a>
          <a className="dropdown-item" href="#">Link 2</a>
          <a className="dropdown-item" href="#">Link 3</a>
        </div>
      </div></div> */}

            </div>
            <div className="row" style={{marginTop: "120px", marginLeft: "-764px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src={Mob1} width="200px"/>
                </div>
                <div className="col-sm-0">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-6" style={{fontSize: "30px"}}><b>Rs. 14500</b></div>
                <div className="col-sm-9" style={{fontSize: "15px"}}>Samsung A10S/2/32 GB</div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="row" style={{marginTop: "120px", marginLeft: "20px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src={Mob1} width="200px"/>
                </div>
                <div className="col-sm-0">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-6" style={{fontSize: "30px"}}><b>Rs. 14500</b></div>
                <div className="col-sm-9" style={{fontSize: "15px"}}>Samsung A10S/2/32 GB</div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="row" style={{marginTop: "120px", marginLeft: "20px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src={Mob1} width="200px"/>
                </div>
                <div className="col-sm-0">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-6" style={{fontSize: "30px"}}><b>Rs. 14500</b></div>
                <div className="col-sm-9" style={{fontSize: "15px"}}>Samsung A10S/2/32 GB</div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="col-sm-0">
            <div className="row" style={{marginTop: "20px", marginLeft: "310px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src={Mob1} width="200px"/>
                </div>
                <div className="col-sm-0">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-6" style={{fontSize: "30px"}}><b>Rs. 14500</b></div>
                <div className="col-sm-9" style={{fontSize: "15px"}}>Samsung A10S/2/32 GB</div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="row" style={{marginTop: "-300px", marginLeft: "665px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src={Mob1} width="200px"/>
                </div>
                <div className="col-sm-0">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-6" style={{fontSize: "30px"}}><b>Rs. 14500</b></div>
                <div className="col-sm-9" style={{fontSize: "15px"}}>Samsung A10S/2/32 GB</div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            
            </div>
            </div>
            <div className="button1"><Link to="/Load"><button style={{marginTop: "7px", color: "black", fontSize: "20px"}}>Load More</button></Link></div>
            <div className="car"><img src={Car} /></div>
            <div style={{backgroundColor: "lightgray", marginTop: "-40px", width: "1349px", overflowX: "hidden"}}>
                <div className="row">
                    <div className="col-sm first">
                        <h4><b>Popular Categories</b></h4>
                        <p>Cars <br /> Flats for rent <br />Jobs <br />Mobile Phones</p>
                    </div>
                    <div className="col-sm first">
                        <h4><b>Trending Searches</b></h4>
                        <p>Bikes <br />Watches<br />Books <br />Dogs</p>
                    </div>
                    <div className="col-sm first">
                        <h4><b>About OLX</b></h4>
                        <p>About OLx group<br />OLx blogs <br />Contact us <br />OLX for business</p>
                    </div>
                    <div className="col-sm first">
                        <h4><b>OLX</b></h4>
                        <p>Help<br /> Site map <br />Legal & Privacy information</p>
                    </div>
                    <div className="col-sm first">
                        <h4><b>Follow Us</b></h4>
                        <i className="fa fa-facebook" style={{fontSize: "10px", border: "2px solid grey", borderRadius: "50%", padding :"5px 5px", color: "grey"}}></i>
                        <i className="fa fa-twitter" style={{fontSize: "10px", border: "2px solid grey", borderRadius: "50%", padding :"5px 5px", color: "grey", marginLeft: "15px"}}></i>
                        <i className="fa fa-play" style={{fontSize: "10px", border: "2px solid grey", borderRadius: "50%", padding :"5px 5px", color: "grey", marginLeft: "15px"}}></i>
                        <i className="fa fa-instagram" style={{fontSize: "10px", border: "2px solid grey", borderRadius: "50%", padding :"5px 5px", color: "grey", marginLeft: "15px"}}></i>
                    </div>
                    </div>
                </div>
                <div className="footer">
                <div className="row">
                    <div className="col-sm">
                        <p><b>Other Countries</b>India-South Africe-Indonesia</p>
                    </div>
                    <div className="col-sm">
                        <p><b>Free Classifieds in Pakistan.</b>© 2006-2020 OLX</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Mobile;