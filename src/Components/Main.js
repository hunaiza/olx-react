import React from 'react';
import Logo from '../img/message.png';
import Logo1 from '../img/Bell.png';
import Logo2 from '../img/Galeery.png'
import heart from '../img/Heart.jpg';

import '../Components/Navbar.css';
import '../Components/Navbar1.css';
import Image from '../img/Background.jpg';
import Image1 from '../img/Add.jpg';
import '../Components/Pics.css';
import Image2 from '../img/Mob.jpg';
import '../Components/End.css';
import '../Components/Footer.css';
import { Link } from "react-router-dom";
import $ from 'jquery';

class Navbar extends React.Component {
  
  render(){
    
    return(
      <div style={{overflowX: "hidden"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: "-10px"}}>
        <a className="navbar-brand" href="#" style={{fontSize: "43px", marginLeft: "10px", fontWeight: "bolder"}}>olx</a>
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
            {/* <li className="ml-3">
                <img src={Logo} alt="msg" width="30" style={{marginTop: "10px"}}/>
            </li>
            <li className="ml-3">
                <img src={Logo1} alt="bell" width="30" style={{marginTop: "10px"}}/>
            </li>
            <li className="ml-3">
                <img src={Logo2} alt="gallery" width="30" style={{marginTop: "10px"}}/>
            </li> */}
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
                <div className="background">
                    <img src={Image} alt="Background" className="background1" />
                </div>
                <br />
                <br />
                <br />
                <div class="row">
                <div class="column">
                <img src={Image1} alt="Snow" style={{width: "auto", marginLeft: "180px"}} />
                </div>
                </div><br />
                <br />
                <section className="text-gray-700 body-font" style={{width: "1200px", marginLeft: "80px", backgroundColor: "#DCDCDC"}}>
        <div className="container px-5 py-24">
            <div className="row">
                <div className="col-10 mt-n1">
                <h1 style={{marginTop: "-40px"}}>More on Mobile Phones</h1>
                </div>
                <div className="col-2">
                    <h2 style={{marginTop: "-40px"}}><a href="#" style={{color: "black"}}>View More</a> </h2>
                </div>
            </div>
            <br />
            <br />
            
          <div className="flex flex-wrap -m-4" style={{marginLeft: "120px"}}>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-light"><Link to="/Next" style={{textDecoration: "none", color: "black"}}>
              <a className=" relative h-48 rounded overflow-hidden">
                <img src={heart} width="20px" style={{marginLeft: "190px"}}/>
                <img alt="ecommerce" className="object-center w-full h-full block" src="https://i0.wp.com/www.pdevice.com/wp-content/uploads/2017/08/Xiaomi-Redmi-Note-4-MediaTek-436x439.jpg" style={{height: "230px"}}/>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "30px"}} >Xiaomi</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>RS. 17600</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-light" style={{marginLeft: "10px"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="relative h-48 rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "190px"}}/>
                <img alt="ecommerce" className="object-center w-full h-full block" src="https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/03/16/goods_img_big-v2/20170316111431_93337.jpg" style={{height: "230px"}}/>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "30px"}}>Xiomi Note 4</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 19800</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-light" style={{marginLeft: "10px"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="relative h-48 rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "190px"}}/>
                <img alt="ecommerce" className="object-center w-full h-full block" src="https://i.gadgets360cdn.com/large/xiaomi_redmi_note_4_gold_1500433984971.jpg?output-quality=80?output-quality=80" style={{height: "230px"}}/>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "30px"}}>Xiomi Android</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 12700</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
            <h1 style={{color: "black", marginLeft: "-50px", marginTop: "-30px"}}>Fresh Recommendations</h1>
            <br />
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" className="object-cover object-center block" src="https://www.dehlez.pk/wp-content/uploads/2018/12/balochi-chappal-3.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Balochi Sandals</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 2700</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=SAMO0168c1" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Samsung S10</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 144,999</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" className="object-cover object-center block" src="https://images-na.ssl-images-amazon.com/images/I/51kq0X42pLL._AC_SX425_.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>6 Piece Swords</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 1300</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/s/h/shoponline_manual_water_pump_for_water_bottle_new_1.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Water pump</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 25000</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font" style={{marginTop: "-70px"}}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}><Link to="/Next1" style={{textDecoration: "none", color: "black"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="https://www.babycouture.in/blog/wp-content/uploads/2018/08/saka_gorgeous_hot_pink_and_silver_kids_party_lehnga_choli_set.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Traditional Dress for Baby</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 1500</p>
              </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="https://image.made-in-china.com/2f0j00NsVtwkzrEpuA/Fixed-Round-Rubber-Coated-Dumbbell.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Rubber Coated Dumbbells</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 800 Each</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="https://ae01.alicdn.com/kf/HTB1J8H_d21H3KVjSZFHq6zKppXaD/Traditional-cartoon-Kids-clothing-Fashion-Child-Abaya-Muslim-Hijab-Girl-dress-abaya-islamic-Children-dress-for.jpg_350x350.jpg" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Hijabi Dress For Baby</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 1200</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{border: "1px solid grey"}}>
              <a className="block relative rounded overflow-hidden">
              <img src={heart} width="20px" style={{marginLeft: "220px", height: "30px"}}/>
                <img alt="ecommerce" style={{height: "190px"}} className="object-cover object-center block" src="data:image/jpeg;base64,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" />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium" style={{fontSize: "25px"}}>Sneakers</h2>
                <p className="mt-1" style={{fontSize: "15px"}}>Rs. 2700</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{backgroundColor: "#F5F5F5", height: "200px"}}>
                <div className="container">
                <div className="row" style={{marginTop: "30px"}}>
                <div className="col-sm">
                <img src={Image2} />
                </div>
                <div className="col-sm">
                <h1 style={{fontSize: "40px"}}>TRY THE OLX APP <br /><br /><span style={{fontSize: "18px"}}><p>Buy, sell and find just about anything using the app on your mobile.</p></span></h1>
                <div style={{borderLeft: "2px solid grey", height: "140px", marginLeft: "500px", marginTop: "-140px"}}></div>
                </div>
                <div className="col-sm">
                <h4>Get your APP Today</h4>
                    <div className="row">
                        <div className="col-sm">
                        <button className="rounded" style={{backgroundColor: "black"}}>
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-apple" style={{fontSize: "30px", color: "white", marginTop: "10px", marginLeft: "2px"}}></i>
                        </div>
                        <div className="col-9">
                            <p style={{color: "white", marginTop: "6px", fontSize: "10px"}}>Download on the<b style={{fontSize: "13px", marginTop: "-30px"}}><p>App Store</p></b></p>
                        </div>
                    </div>
                </button>
                        </div>
                        <div className="col-sm">
                        <button className="rounded" style={{backgroundColor: "black"}}>
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-play" style={{fontSize: "30px", color: "white", marginTop: "10px", marginLeft: "2px"}}></i>
                         
                         </div>
                        <div className="col-9">
                            <p style={{color: "white", marginTop: "6px", fontSize: "10px"}}>Get it on<b style={{fontSize: "13px", marginTop: "-30px"}}><p>Google Play</p></b></p>
                        </div>
                    </div>
                </button>
                        </div>
                    </div>
                

                </div>
                </div>
                </div>
            </div>
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

export default Navbar;