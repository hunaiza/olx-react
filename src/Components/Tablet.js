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

class Tablet extends React.Component{
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
                        <li className="extra"><Link to="/Cars" style={{textDecoration: "none", color: "black"}}>Cars</Link></li>
                        <li className="extra"><Link to="/Motor" style={{textDecoration: "none", color: "black"}}>Motor Cycles</Link></li>
                        <li className="extra"><Link to="/House" style={{textDecoration: "none", color: "black"}}>Houses</Link></li>
                        <li className="extra"><Link to="/Tv" style={{textDecoration: "none", color: "black"}}>Tv-video-audio</Link></li>
                        <li className="extra"><Link to="/Tablet" style={{textDecoration: "none", color: "black"}}>Tablets</Link></li>
                        <li className="extra"><Link to="/House" style={{textDecoration: "none", color: "black"}}>Land & Plots</Link></li>
                    </ul>
            </div>
                    </div>
                
            <div className="Image">
                <img src="http://localhost:3000/static/media/Image.6f88b816.jpg" style={{marginLeft: 200}}/>
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
                    <img src="data:image/jpeg;base64,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" width="200px"/>
                </div>
                <div className="col-sm-0 heart">
                    <img src={Heart} width="50px"/>
                </div>
                <div className="col-sm-8" style={{fontSize: "30px"}}><b>Rs. 67,000</b></div>
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
                    <img src="data:image/jpeg;base64,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" width="200px"/>
                </div>
                <div className="col-sm-0 heart">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-8" style={{fontSize: "30px"}}><b>Rs. 67,000</b></div>
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
                    <img src="data:image/jpeg;base64,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" width="200px"/>
                </div>
                <div className="col-sm-0 heart">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-8" style={{fontSize: "30px"}}><b>Rs. 67,000</b></div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="col-sm-0">
            <div className="row" style={{marginTop: "20px", marginLeft: "230px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src="data:image/jpeg;base64,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" width="200px"/>
                </div>
                <div className="col-sm-0 heart">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-8" style={{fontSize: "30px"}}><b>Rs. 67,000</b></div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-9 Location">Sialkot, Punjab</div>
                  <div className="col-lg-6 Date">19 Sep</div>
                </div>
            </div>
            <div className="row" style={{marginTop: "-300px", marginLeft: "585px", border: "1px solid grey", height: "300px", width: "350px"}}>
                <div className="col-sm-0">
                    <h5 className="feature">Featured</h5>
                </div>
                <div className="col-sm-0">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4PDw8PDw8QDw0PDQ0PDQ8ODhANDQ0NFREWFhURFRUYHCogGBolHRUWITEhJiorLi4uFyszODMtPTQtLisBCgoKDg0OFxAQGCslHiYrLS8tLSstKystLS8rLi4vLy0tLS0vLS0tLSsrKzItKy0vLS0tLS0rLSstLS0rLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGCAf/xABJEAACAgACBAcMBwUHBQEAAAAAAQIDBBEFEiGTBhMXMVFS0QcVNUFTVHFzkqGy4SIydJGxs9IUI0JhgTRDRGRywdNiY6Lw8TP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANBEBAAEDAQUGBQMEAwEAAAAAAAECAxEEFCExUpEFEhNBUaEVMmFxsSJCgQZTwfCC0eHx/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaThJwqwWjlF4q3VlP6lcVr2SXTl4l/Ngc/ytaI61+5+ZOA5WdEda7c/MYDlZ0R1rtz8xgOVnRHWu3PzGA5WtEda7c/MYDla0R1rtz8xgOVrRHWu3XzGBTla0R1rt0v1DApytaI6b90v1DArytaI6126XaMBytaJ6127X6hgOVrRHWu3a7RgOVrRHWu3a/UMBytaI6126XaMByt6I6126XaMCnK3ojrXbpdowHK3ojrXbpfqGA5XNEda7dL9QwKPuuaI6bt3H9QwKcruif+/u4/qGBk6O7qWibrI18ZZW5tJStglXm+lpvL0vYMDtiAAAAAAAAAAAAAAB567tU29LWJvNRpoUV0LUTy+9v7yYHBEgAAAAAACgAABWxp8yyWS8ee3pAiBQAAAAUAAAKATq+svSvxA9ZcGpuWBwUpNuUsHhXJvnbdUc2yo2QAAAAAAAAAAAAAPPHdp8L2+po/LRI1vAzAVWxulZVG3VlFJS8WzpO7SUU1Uzn8ZeH2tfrtV0d3OMTwmY/DpZaIwviwkE9njTXPt/h6Nh2RZp+nSHkVa25PDvR/ylK/ReFako4OqDdmtGX1tWvVy4vJrJ7dufOKbNMcYjpCLmtuzE92ao380zu9P/WN3mp8jXu49hp4Vvljow2vU89XWVHoinyNe7j2E+Db5Y6I2zUx++rrK09FU+Rr3cewnwbfLHQ26/8A3KusqPRdPkq93HsHgW+WOiduv89XWUXounyVe7j2DwLfLHRO23ueesoy0bSv7qvdx7CY09uf2x0TGtvz++esrE9H1eSr9iPYXjT2+WOjWNXe556yg9HVeTh7ESdmt8sdFtsvc89ZQej6vJw9iJOzW+WOidru889ZQej6/Jw9iJOzW+WOkLRq7vPPWUHgK+pD2ENmt8sdFtru889ZQlga+pD2UTs1vljpC0aq7zz1lB4OvqR9lDZrXLHSFtpu809ZWbcPXH+COfRqobNb5Y6NKb92f3T1liypj1Y/0ihs1vljpDaL1fNPVB0x6q+5EbNb5Y6LRer5p6sjXo4qcXh48Y6lGFqm1qTU03PVy+lnFNZf9WfQlhXpKYzO7z8o9G9OomcRv8vP6tLV9aPpX4nz71nrDgrNS0fgZRTUXgcI0nzpOmOSIG0AAAAAAAAAAAAAB557tPhez1NHwIkT7mledeJ9ZX8LO/Rzul4Xa8Zro+0vqOCwFSjUuJjNTinObg5vWeee3milkUru3JuTGcQ1saexFqn9OZln97MP5Gv2EV8Sv1lts1nkjpB3sw/ka/YQ8Wv1k2azyR0hF6Lw3kKvYiT4tfNKNls8kdIU704XyFW7iT4tfNPVGyWP7dPSFO9GF83q3cR41fNPU2Sx/bp6Qp3pwvm9W7j2DxrnNPU2Sx/bp6Qi9D4Tzendx7B41zmnqnZbPJHSFO8uE82p3Uewnx7nNPU2azyR0g7y4PzandR7B49zmnqnZrPJHSDvJg/NqN1DsHj3eaeqdms8kdIO8eD81o3UOwePd5p6ynZ7XJHSDvFgvNaNzDsI8e7zT1k2e1yR0hGWhMHnl+x0NdPFV5L3Dx7vPPWU+Ba5I6Qj3kwfmNG6q7B493nnrKfAtckdIIcH8A+fA4Zemira/uG0XeeesrRao5Y6NFwz4PYFYHE2LD1Yeyla1NlUY1OUs0lF5c+tnll/M6dJqLk3aYzM545ZXrVPcmZiI9MOc4C6Hw12DvuswaxVscVGuKcpxahxcX4mvGzPt3XX9LNHhef3+u/dH0wt2dYt3aZ7/wDvBpe6Jo6nDYtQoqVMJYSmx1pyaU5KWf1nn4jt7PvV3tH4lzjMdN3BjqaKaL8U08M/5cJV9aP+qP4ngvVeq+BngzR/2DB/kxIG5AAAAAAAAAAAAAB557tPhez1NHwImBe7mLyqxPra/hZ36ThLw+1/mo+0u1hi7I7IzlFdCk0jrm3TPGHlU366IxTVMK98LvKz9uQ8Kj0TtV3nnqhLSF3lbPbkTFqj0hWdVe556rUtI3+Ws9uRPhUekKTq73PPVYs0rfH++s9uReLFE/thnOtvR++erEs0ziXzX2peskbRprfLDPbtRzz1WnpjFecW7yRbZ7XLCdt1HPKD0xivOLd5LtJ2e1ywttmo55RemMV5xbvJdpOzWuWE7ZqOeUXprF+cXbyXaTs1rlhbbL/PKD01i/OLt7LtJ2a1ywttl/nlF6bxnnN29l2k7LZ5YTtd/nlYu4RYuP8Aibs+jjZdpaNJZn9kNaNRqKv3ywbOEmOf+KvX8lbPtLbJZ5IdNN+7H7pWnwjx/neI30+0jZbPJC/j3eZB8JMf55iN9PtI2WzyQt49zmYmO0tib0o3X22xTzUbLJTin05N85aizbo300xCKrldXGVvCaWxNCcab7aoyeclVbOtN82bSfOLlq3XOaqYlaiuqndEsfGYy25ud1k7Z6uWtZOU5ZJbFm/EVmimi3VFMY3StFU1VxMz5w0lfOvSj5F7z1jwZoVeBwdabahg8NFN87yqisyBswAAAAAAAAAAAAAeeu7T4Ws9TR8CJDucP91iPW1/Cz0NFwqeD2z81H2l1rkdzxJlFzJwrlGUyVZli3YlLYtr9yNaaM8WVVfow5yb2s2iMMuK22WwmGbVVTLD3SUZcbXGp6zn9HOVii0opc2T8bZjNVcXKYzunP4d1Fu1VYrmInvRjfn1n0Qwsqf3UOK46yyWVmcpxcW5ZKEMmtuWTzefOTXFf6p72Ijhw902fC/RT3e9M8eMY38I/PmtSw9MbXrWJ0Rvsh9F52yrjnlJLLmexZ/zLd+uaN0b8Z+n+wmLNum5Peq/TEzH1xH/AGrZGqymVnFqnVvrgnCU5qcZKTkspN5yjknsy5yImumvu5zumf8AcerTu267c193u4mI85zn7+cJW01SqumqXTVCOdF8nZnbLXSUJZvVk2s39FLLLozIpqrpqpiaszPGN27/ADu+rWbVFVFUxRiI4Tv3/wD36ObvxXij9/Yd0UsKLXqwpSLOiIW5MheIW2yF4hBshMQg2QtEOg4L6CrxcZubycZNL97GmOyDk85NNLYjwu1O0L2nu0028b4zv/nz/h9F2V2fp9RYqru97MVY3b/Ty89879/8NXp7BwotcINuDqhNazTeUo55bDfs/VV6nS1XK8Z38Pt/Lm7U0dvS6qm3bzjdx9czH+P8Odr516V+J4LqerOCFrno7ASbbk8DhHJva3Lio5kDbgAAAAAAAAAAAAA89d2jwtZ6mj4ETAh3PHlXiPWQ+E9HRcKnz/bXz0faXVOR3vDytysLRCkyw7sQ3sWxfibU0YY1VTKy2XVwi2WiFsINkpwycNiIxpxEG/pWRqUFk9rjYpP0bEZ10TNdEx5Z/DqtV002rlM8ZxjquYKdMam1dGvET1otyha3VXzfR1Yta0vG/EtnjKXIrmvE0zNMfbfP13+To0/h028xXEVz6xO6PpiOM+vow401ayUr0o8Zqykq7HlXkv3iWW3xrLnNu9XjdT5escfRlFq3mImvz9J4eq5pTEUfRauhKqtpV4eEbozcNZaz1pQS1nzuT7EUs03N+aZzPGZx/wB8I8nXcpormMVR3Y4RGeHnvxxnzY12MphDEKOId1VtUoU0alicJOScZz1lqpxy54t7ebZmTFFdVVEzRiYnfO72897op7lumqIqzExujf8A7uc7KR2sIhbbIWiFuTIXiEHIqtEINkLYRzISycHpO6hNVzyUmnJOMZxb/mpJo49TobGoqiq7TmY3cZehpe0dRpqZotVYjOeEceHHisY3F2WylOyTlNra3zi3Yt6e1VRbjEb/AK/lW9qLupu013JzMYjhEbo+zVQ516UfMvTesODTzwOCb53g8K3uokDZAAAAAAAAAAAAAA89d2jwtZ6mj4ESLHAGWVd/rIfCeloeFT57tucVUfaXTOZ6GHgTUxL7c9niX4m1NLOZystl0YRbLRCcKNkpwi2WThBslaIK7Ir60dZdGs4kVU1T8s4bW5pif1U5/nDGuxsFmlDN7fpaz2c+WXo2fcT4dec972dNFNvG+j3a66xPmWXTtbzfTtNqYmOMtZxuxGFiUiUxC22QtEINlV4hbkyFohBsjKymZCUWyFohFsyqr9G9Fr1QlzP0Mwrn9M/aXREb4YlfOvSj5p6D1dwY/sGC+xYX8qJA2YAAAAAAAAAAAAAPPXdo8LWepo+BEwMTgM/3d/rIfCep2f8ALU+a7en9dv7S6K2eSPSpje+fyxWzZOEWyYhOEWyUotloThFyJWiFq21R5/mWiMr00TLBuvcv5LoNIjDpooiGNKRZrELcpENIhbbKrRCDZC0QttkLRCDZEysiVWwo2RNUQvTRM8EWzGqqZdNFuKVDOZaRCj5n6GUq+WftK0cYYcOdelHzjueruC/9gwP2LCfkxIGzAAAAAAAAAAAAAB567tHhaz1NHwIkYXAn/wDO71kfhPV7O+Wp8z/UHz2/tLfXy5j1KYfP0rDZpELqNkpRbLLYQbJThatsyWf/AKy0Q0ppzOGusszebNeDrppxwWZSJXiFuUisyvELbkRlaIQciF4hBshMQg2VWRZC0Qi5GdVfo3otZ3yiYzLoiMBGVsOg4P8ABO7G024iFtFVdNmpPjpTUnLUUtijF57Gji1Ost6fHf8ANtas1XZ7tMb2Fwj0JZgLuItnXOTqhapVOTg4STy2tLoNaLsXLc1R9VZp7tWJaCHOvSjwXW9WcFfB+B+w4T8mJA2gAAAAAAAAAAAAAPPXdo8LWepo+BEwMHgU/wB3d6yPwnrdncKnzH9QfPb+0t5c9v8AQ9ajg8GngtNl10GyVsINkrRCEpFlohg4u3bl0fiXpdNqndliSkWbxC25EZWiEJMqvELcpELRCDZGVohFsjK2EWyszhemmZ4INmFVeXTRbilQplqETK2FSEuq4KcK6sFh7cPZhpXxtvVutG/iWvoKLj9V9HvOPUabxa6as74+mfPJMRNM0z7Tj8Nbwt01HHX8dCniIRorqjW58ZkoZ7dbJdJtRRNFFUTOeJERGIhzUOdelHgu16s4K+D8D9hwn5MSBtAAAAAAAAAAAAAAeeu7R4Xs9TR8CJGv4GP93d6yPwnrdnfLU+Y/qD57f2lu7nt/oetRweHRwdDDg5XLDQujKyVk4Vy1E45fSyz2JN7Dzrmuu011UxTG6dz247OteDTc705mIzEOe0lQqrZ1p5qEss3z8x6Niua7dNVXFwai1Tbu1UUzmIYcpGzOIbDg/otYuycHOUFCpzWpBTlJ60YqKWa6xya3V7NbivGd+Orv0GjjU3O5M4WeFnB+ODhTZG52O2d0ZRagnXKGrszjJr+InR6uu9mKqO669RprdqI8OuKo4bnMOR3Zc8Qg5EZWwg5EZWiEGyuVohFkZXiEGzOqvDWi33kDGZy6qaYjgFcrYbDQGj1isVRhnLUV1sYOaWs4p+PLxmV2vuUTUtTGZdhp/gJhcJg8Rif2q22VSjGMFXCvK2U1GLltecdviOS3q5ru+HiM/wCCMVU96nhn8OAO4bXRPB3F4uudtMIuquarnOd9NMVNpPV+nJeJoxu6i3a+ecNLduu5OKYzP0Y+mNFX4Sx04iGpZxcZ5KcLE4SzyecW14i1NymuiZp+qsxMTiWmhzr0o8B1vVfBbwfgfsOE/JiQNoAAAAAAAAAAAAADzz3afC9nqcP8CJga3ga/oXf64/Cev2b8tX3fM9v/AD2/tLeYjY16D1re94tNMxulv8HwknGqNWrDJVxjm75wkkoauayWcXlt2f0PMvaOJrqn9W/0j/19DpdXNNNGJp3es+n0x7Od0rjHddZa0k5zbyTckvQ3znqWLfct00vL1FfiXaqvr5MGUzZnEM7QelZ4ac5RVUtepwkrtZRy1ovY4tNPNI5NZYpu0RTVEzv8nbpK5oqnfG+PNa4U6ctxUKYT/Z8q3ZJcRK2cnKWrm5ym239VFNFZptzOIq/5Oy/P6Yjd/GZ6ubcjuc8Qg5ELRCDkQtEIuRVZFzKzOIaURmcIaxhO91xuU1iqVNZkSlsdAYyVGJqvjOuE6ZKyHGxlKuU08lF6u3x+4xvRmiYxnPovTxdNp7hhiMXhbMNOWAhCyWtZxMb1Y5QnrLJttPPVW3+Zy2rUUV96KavZeqrMYy4nWZ6DHLsOB3CHCYbDzqxEro2ftfHQddUbYuDqjBxeclk9j2//AA4dVp67lUVUY3R57/Xy/kmJmIxVMb9+POPT2a/h1pqnG4rjsOpqpYeqpcZFQlnHWz2JvZtLaTTzY0/hz5RP4aXK+/X3nKQe1elHjut6t4K+D8D9hwn5MSBtAAAAAAAAAAAAAAeeO7T4Xt9Th/gRMDVcEJZQt/1x/A9fs35avu+b7djNdv7S3d8tnoZ61HF4tEb2K5GrbC3KRK0QtykSvEK316qi9aMtaOt9F56u3mZWivvZ3cGtVvuxG/i1MizohbbIXhkV4Nypsu160q5Qi63NK6et/FGHjivGzKq5iuKcTv6NKaM0zVlhMshRshaIZGjMA8TaqlbTU3CyWviLOKq+jFyy1ul5bDC/c7kZxM/Z0Wac5YJVqFZWShHNpZpZtLN7Es3lmyJ3Qlm6d0W8HfOh21XOKg+Molr1vNZ7H/Upbr79PewmYxLALqhIAHzP0MrPyz9pTHGGJDnXpR867nq/gr4PwP2HCfkxIG0AAAAAAAAAAAAAB547tPhe31OH+BEwONwePtpTVbS1mm84p7f6m9rUV2sxTLm1GktX5ibkZx9WS9O4nrr2I9htGvvx5+0Of4VpeX3lDvxiOsvYj2FviOo5vaE/DNNy+8qPS9/WXsR7B8S1HN7Qn4bp+X3lTvrf1l7MewfEtRze0J+Hafl95Rek7ut/4x7B8S1HN7QfD9Py+8rcsZY/H7kPiOo5vaF40VmPL3lF4qfT7kR8R1HN7QnY7Pp7yp+0z6fch8R1HN7QnZLXp7yftE+n3IfENRze0Gy2vT8qcfLp9yI+Iajm9oTstr0/KnHS6fciJ11+f3e0LRp7ccIU42XT7kRtt719oT4NHocbLp9yI2y96+0J8Kn0ONl0+5DbL3r7QeFT6KcbLp9yG2Xub2g8Kj0V42XT7kNsvc3tB4VHocbLp9yG2Xub2g8Kj0ONl0+5DbL3N7QeFR6KcbLp9yI2u9w734PCp9FIc69KOdo9X8FotaPwKfOsDhE/TxMSo2gAAAAAAAAAAAAAPmXdP7nd+kL44vCShxrrjXbVZLU1tXPKUZc2eTyyfQSOF5JdM+Tp38BkV5JNM+Tp38RkV5I9MdSjfxGQ5ItMdWjfrsGRXki0x1aN+uwZFeSHTHRh9/8AIZFOSHTHRh9/8hkOSDTHRh9/8hkOSDTHRh9/8hkOSDTHRh9/8hkOSDTHRh9/8hkOR/THRh9+/wBIyHI/pj/Lb9/pGRXke0x/lt+/0jIrHuOaXf8AFhF6b5/7QYyKvuOaXX8WEfovn/vAZFORzS/ThN/P9AyK8jel+thN/Z/xjIcjel+vg9/Z/wAYyK8jWl+vg9/b/wAYyMvRncYx7tj+0X4eunNa8qpztsy6IpwSz9LGR9wwmHhVXXVBZV11wrguiEUkl9yIF0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=" width="200px"/>
                </div>
                <div className="col-sm-0 heart">
                    <img src={Heart} width="50px" style={{marginTop: "10px"}}/>
                </div>
                <div className="col-sm-8" style={{fontSize: "30px"}}><b>Rs. 67,000</b></div>
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

export default Tablet;