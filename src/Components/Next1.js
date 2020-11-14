import React from 'react';
import Header from '../Components/Header';
import Image from '../img/Image.jpg';
import CSlide from '../img/Car1.jpg';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import '../Components/Next.css';

class Next extends React.Component {
    render(){
        return(
            <div style={{overflowX: "hidden"}}>
                <Header />
                <div className="background" >
                    <img src="http://localhost:3000/static/media/Image.6f88b816.jpg" style={{marginLeft: "200px"}}/>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-8SsiBjfKP9w7Q9ren1opvOAsIzhL_2aA5g&usqp=CAU" width="500px"/>
                        <div className="row" style={{border: "1px solid grey", borderRadius: "4px"}}>
                            <div className="col-1"><h1>Details</h1>
                            <div className="row" style={{fontSize: "15px"}}><div className="col-3">Condition</div></div><br />
                            <div className="row" style={{fontSize: "15px"}}><div className="col">Year</div></div><br />
                            <div className="row" style={{fontSize: "15px"}}><div className="col">Launch</div></div><br />
                            </div>
                            <div className="col-4" style={{marginLeft: "290px", marginTop: "40px"}}>
                            <div className="row" style={{fontSize: "15px"}}><div className="col">New</div></div><br />
                            <div className="row" style={{fontSize: "15px"}}><div className="col">2019</div></div><br />
                            <div className="row" style={{fontSize: "15px"}}><div className="col">2018</div></div><br />
                            </div>
                            
                        </div>
                        </div>
                        
                        <div className="col">
                            <div className="container" style={{border: "1px solid grey", borderRadius: "4px"}}>
                            <div className="row" >
                                <div className="col-sm-8" style={{fontSize: "35px", fontWeight: "bolder"}}>Rs.Sample</div>
                                <div className="col-sm-0" style={{fontSize: "30px",marginLeft: "12px"}}><i className="fa fa-share-alt"></i></div>
                                <div className="col-sm-2" style={{fontSize: "30px"}}><i className="fa fa-heart-o"></i></div>
                            </div>
                            <div className="row">
                                <div className="col" style={{fontSize: "25px"}}>Sample</div>
                            </div>
                            <br />
                            <br />
                            <div className="row" style={{fontSize: "15px", color: "grey"}}>
                                <div className="col-8">Sindh, Pakistan</div>
                                <div className="col-sm-4">2 Days Ago</div>
                            </div>
                            </div>
                            <br />
                            <div className="container" style={{border: "1px solid grey", borderRadius: "4px"}}>
                            <div className="row" >
                                <div className="col"><h2>Seller Description</h2></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-8SsiBjfKP9w7Q9ren1opvOAsIzhL_2aA5g&usqp=CAU" style={{borderRadius: "50%", height: "80px", width: "90px"}}/></div>
                                <div className="col-sm-6"><h3  style={{marginTop: "20px"}}>Sample</h3><span>Member since May 2014</span></div>
                                <div className="col" style={{fontSize: "30px"}}><i className="fa fa-angle-right"></i></div>
                            </div><br />
                            <Link to="/Chat1" style={{textDecoration: "none", color: "black"}}>
                            <div className="row ChatS" style={{marginLeft: "5px"}}>
                                <button className="ChatS1" style={{outline: "none"}}>Chat with Seller</button>
                            </div>
                            </Link>
                            <br /><br />
                            <div className="row" style={{fontSize: "17px", marginBottom: "30px"}}>
                                <div className="col-sm-1" style={{marginLeft: "60px"}}><i className="fa fa-phone"></i></div>
                                <div className="col-sm-0" style={{marginLeft: "1px"}}>********</div>
                                <div className="col-sm-5"><Link>Show Number</Link></div>
                            </div>
                            
                            </div>
                            <br />
                            <div className="container" style={{border: "1px solid grey", borderRadius: "4px"}}>
                                <div className="row" >
                                    <div className="col"><h3>Posted in</h3></div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115774.96550039669!2d67.0564352!3d24.933171199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2s!4v1605108714837!5m2!1sen!2s" width={300} height={200} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>
                                    </div>
                                    
                                
                            </div>
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/xIil1YlBMOw" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width={300} height={200}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <br /><br /><br />
                <Footer />
            </div>
        );
    }
}

export default Next;