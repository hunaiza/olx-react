import React from 'react';
import Header from '../Components/Header';
import '../Components/Chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
      }
    
      sayHello() {
        alert('Hello!');
      }
    render(){
        
        return(
            <div className="Chat">
               <Header />
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <div className="row" style={{border: "1px solid #D4D4D4", borderRadius: "3px",width: "598px", marginLeft: "-73px", marginTop: "30px", backgroundColor: "#DEDEDE", height: "65px"}}>
                           <div className="col-9 inbox"><h1>INBOX</h1></div>
                           <div className="col-sm-0 icon"><i className="fa fa-search"></i></div>
                           <div className="col icon"><i className="fa fa-ellipsis-v "></i></div>
                           </div>
                       </div>
                       <div className="col">
                           <div className="row" style={{border: "1px solid #D4D4D4", borderRadius: "3px",width: "600px", marginLeft: "-20px", marginTop: "30px", height: "65px"}}>
                           <div className="col-lg-0"><img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" style={{ height: "40px", width: "60px", marginTop: "10px", marginLeft: "5px"}} /></div>
                           <div className="col-sm-7"><h3 className="Name">Hunaiza</h3></div>
                           <div className="col-lg-1 iconN"><i className="fa fa-flag-o"></i></div>
                           <div className="col-sm-1 iconN"><i className="fa fa-phone"></i></div>
                           <div className="col-sm-1 iconN"><i className="fa fa-envelope-o"></i></div>
                           <div className="col-sm-1 iconN"><i className="fa fa-times"></i></div>
                           </div>
                       </div>
                       
                   </div>
                   
                   </div> 
                   <div className="container">
                       <div className="row">
                           <div className="col Filter" style={{border: "1px solid #D4D4D4", borderRadius: "3px", marginLeft: "-59px", height: "160px"}}>
                           <div className="row" >
                       <div className="col"><h3>Quick Filters</h3></div>
                   </div>
                   <div className="row">
                       <div className="col-sm-1"><button className="buttonA">All</button></div>
                       <div className="col-sm-0" style={{marginLeft: "17px"}}><button className="buttonB">Unread Chat</button></div>
                       <div className="col-sm-1"><button className="buttonB">Important</button></div>
                   </div><br />
                   <div className="row">
                       <div className="col"><img src="https://i0.wp.com/www.pdevice.com/wp-content/uploads/2017/08/Xiaomi-Redmi-Note-4-MediaTek-436x439.jpg" style={{ height: "40px", width: "60px", marginTop: "10px", marginLeft: "5px"}} /></div>
                       <div className="col-sm-9"><h2 style={{marginLeft: "-20px", fontSize: "15px", marginTop: "10px"}}>Mobile's World <br /><span style={{color:"grey"}}>Xiomi</span></h2></div>
                       <div className="col"><p>Yesterday</p><i className="fa fa-ellipsis-v" style={{marginLeft: "40px"}}></i></div>
                   </div>
                   <div className="row" style={{border: "1px solid #D4D4D4", height: "240px", marginTop: "35px"}}>
                       <div className="col"></div>
                   </div>
                           </div>
                           <div className="col">
                               <div className="row">
                                   <div className="col">Xiomi</div>
                                   <div className="col">Rs. 17500</div>
                               </div>
                               <div className="row">
                                   <div className="col" style={{backgroundColor: "lightgray", width: "100px", height: "130px"}}></div>
                                 
                               </div>
                               <div className="row">
                               <div className="col">
                                   <div className="angle">
                                   <i className="fa fa-angle-down"></i>
                                   </div>
                                   
                               </div>
                               </div>
                               <div className="row">
                                   <div className="col">
                                       <div className="row">
                                           <div className="col"><i className="fa fa-"></i></div>
                                           <div className="col"><h2>QUESTIONS</h2></div>
                                       </div>
                                   </div>
                                   <div className="col">
                                       <div className="row">
                                           <div className="col"><i className="fa fa-"></i></div>
                                           <div className="col"><h2>QUESTIONS</h2></div>
                                       </div>
                                   </div>
                               </div><br /><br />
                               <div className="row">
                                   <div className="col">
                                       <div className="row">
                                       <div className="col-sm-6"><h2 className="know">Chat to know more</h2><h3 className="close">Close the deal faster by asking more about the product or person</h3></div>
                                       <div className="col"><img src="https://statics.olx.com.pk/external/base/img/chat/auto_answer_onboarding.webp" width="50px" style={{marginLeft: "230px"}}/></div>
                                       </div>
                                   </div>
                                   </div>
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <div className="row">
                                       <div className="col-sm-0"><i className="fa fa-paperclip"></i></div>
                                       <div className="col-sm-10 input"><input type="text" placeholder="Type a message" style={{outline: "none"}} autofocus/></div>
                                       <div className="col"><i className="fa fa-microphone"></i></div>
                                   </div>
                           </div>
                       </div>
                   </div>
            </div>
        );
    }
}

export default Chat;