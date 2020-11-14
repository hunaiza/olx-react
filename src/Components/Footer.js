import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div>
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
        );
    }
}

export default Footer;